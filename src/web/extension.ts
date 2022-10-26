/* eslint-disable @typescript-eslint/semi */
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode'
import { Utils } from 'vscode-uri'

const preview: {
  [key: string]: {
    panel: vscode.WebviewPanel
    jit: boolean
  }
} = {}

function compile(document: vscode.TextDocument) {
  if (preview[document.fileName]) {
    preview[document.fileName].panel.webview.postMessage({
      cmd: 'compile',
      param: document.getText(),
    })
  }
}

/*
vscode.workspace.onDidSaveTextDocument((document: vscode.TextDocument) => {
  if (document && !preview[document.fileName].jit) {
    compile(document)
  }
})
*/

function linkClicked(url: string) {
  vscode.commands.executeCommand('vscode.open', vscode.Uri.parse(url))
}

vscode.workspace.onDidChangeTextDocument((event) => {
  if (
    event.document &&
    preview[event.document.fileName] &&
    preview[event.document.fileName].jit
  ) {
    preview[event.document.fileName].panel.webview.postMessage({
      cmd: 'jit',
      param: event.document.getText(),
    })
  }
})

/*
vscode.languages.registerCodeActionsProvider('markdown', {
  provideCodeActions(document, pos, tok) {
    if (preview[document.fileName]) {
      const line = pos.start.line

      if (line) {
        try {
          preview[document.fileName].panel.webview.postMessage({
            cmd: 'gotoLine',
            param: line + 1,
          })
        } catch (e) {}
      }
    }

    return undefined
  },
})
*/

function createPreview(
  jit: boolean,
  context: vscode.ExtensionContext,
  editor?: vscode.TextEditor,
  update: boolean = false
) {
  if (!editor) {
    vscode.window.showWarningMessage(
      'LiaScript can only open Markdown files. Your file has to end with the file extension (.md).'
    )

    return
  }

  const liascriptPath = vscode.Uri.joinPath(
    context.extensionUri,
    'liascript',
    'index.html'
  )

  const baseRoots: vscode.Uri[] = []
  const folder = vscode.workspace.getWorkspaceFolder(editor.document.uri)
  if (folder) {
    const workspaceRoots = vscode.workspace.workspaceFolders?.map(
      (folder) => folder.uri
    )
    if (workspaceRoots) {
      baseRoots.push(...workspaceRoots)
    }
  } else {
    baseRoots.push(Utils.dirname(editor.document.uri))
  }

  const fileName = editor.document.fileName
  const fileEnding = fileName.split('.').slice(-1)[0]?.toLowerCase()

  if (fileEnding !== 'md') {
    vscode.window.showWarningMessage(
      'LiaScript can only open Markdown files. Your file has to end with the file extension (.md).'
    )

    return
  }

  if (preview[fileName] && !update) {
    // close the panel
    preview[fileName].panel.dispose()
    delete preview[fileName]
  } else {
    // create a new preview
    const webviewPanel = update
      ? preview[fileName].panel
      : vscode.window.createWebviewPanel(
          'vscodeTest',
          'LiaScript Preview: ' + fileName.slice(1),
          vscode.ViewColumn.Beside,
          {
            enableScripts: true,
            retainContextWhenHidden: true,
            localResourceRoots: baseRoots,
          }
        )

    function asWebviewUri(resource: vscode.Uri) {
      return webviewPanel.webview.asWebviewUri(resource)
    }

    function transformSrc(src: string) {
      let ret = ''
      let uri = vscode.Uri.parse('markdown-link:' + src)
      if (folder) {
        uri = vscode.Uri.joinPath(folder.uri, uri.fsPath)
        ret = asWebviewUri(uri).toString(true)
      } else {
        ret = uri.toString(true).replace(/^markdown-link:/, '')
      }
      return ret
    }

    if (!update) {
      webviewPanel.onDidDispose(() => {
        delete preview[fileName]
      })

      webviewPanel.webview.onDidReceiveMessage(
        (message) => {
          switch (message.cmd) {
            case 'ready': {
              console.warn('ready ... ')
              webviewPanel.webview.postMessage({
                cmd: 'compile',
                param: editor.document.getText(),
              })
              break
            }
            case 'lineGoto': {
              const range = editor.document.lineAt(message.param).range
              editor.selection = new vscode.Selection(range.start, range.end)
              editor.revealRange(range)
              break
            }
            case 'media.load.1': {
              webviewPanel.webview.postMessage({
                cmd: 'media.load.2',
                param: {
                  tag: message.param.tag,
                  intern: transformSrc(message.param.src),
                  origin: message.param.src,
                },
              })
              break
            }
            case 'eval': {
              try {
                eval(message.param)
              } catch (e) {
                console.warn('eval Error:', e)
              }
              break
            }

            case 'link': {
              linkClicked(message.param)
              break
            }
            default: {
              console.warn('liascript-preview: unknown message ->', message)
            }
          }

          return
        },
        undefined,
        context.subscriptions
      )
    }

    setHtmlContent(context.extensionUri, webviewPanel.webview)

    preview[fileName] = {
      panel: webviewPanel,
      jit: update ? preview[fileName].jit : jit,
    }
  }
}

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log(
    'Congratulations, your extension "liascript-preview-web" is now active!'
  )

  context.subscriptions.push(
    vscode.commands.registerCommand('liascript-preview-web.reload', () => {
      const editor = vscode.window.activeTextEditor

      if (editor && preview[editor.document.fileName]) {
        createPreview(false, context, editor, true)
      }
    })
  )

  context.subscriptions.push(
    vscode.commands.registerCommand('liascript-preview-web.toggle', () => {
      const editor = vscode.window.activeTextEditor

      createPreview(false, context, editor)
    })
  )

  context.subscriptions.push(
    vscode.commands.registerCommand('liascript-preview-web.toggle-jit', () => {
      const editor = vscode.window.activeTextEditor

      createPreview(true, context, editor)
    })
  )

  context.subscriptions.push(
    vscode.commands.registerCommand('liascript-preview-web.update', () => {
      const editor = vscode.window.activeTextEditor

      if (editor && preview[editor.document.fileName]) {
        compile(editor.document)
      }
    })
  )
}

function setHtmlContent(extensionUri: vscode.Uri, webview: vscode.Webview) {
  const liascriptPath = vscode.Uri.joinPath(
    extensionUri,
    'liascript',
    'index.html'
  )

  if (webview.html) {
    webview.html = ''
    webview.options
  }

  let htmlContent = `<!DOCTYPE html>
	  <html lang="en">
	  <head>
		<meta charset="UTF-8">
	
		<title>LiaScript - Preview</title>
		
		<meta http-equiv="Content-type" content="text/html;charset=UTF-8">
		

		<script>
		const vscode = acquireVsCodeApi();

    vscode

		var lia;

		function sendToLia(cmd, param) {
			if (lia) {
				lia.postMessage({cmd, param}, "*")
			}
			else {
				init()
			}
		}

		window.addEventListener("message", (event) => {
			switch (event.data.cmd) {
				case "jit":
					sendToLia("jit", event.data.param)
					break
				case "compile":
					sendToLia("compile", event.data.param)
					break
        case "lineGoto":
          publish("lineGoto", event.data.param)
          break
        case "gotoLine":
          sendToLia("goto", event.data.param)
          break
        case "link":
          publish("link", event.data.param)
          break
        case "eval":
          publish("eval", event.data.param)
          break
        case "lia-ready":
          init()
          break;
        case "media.load":
          publish("media.load.1", event.data.param)
          break
        case "media.load.2":
          fetch(event.data.param.intern)
            .then((response) => response.blob())
            .then((blob) => { sendToLia("inject", {tag: event.data.param.tag, src: event.data.param.origin, data: blob}) })
            .catch((e) => { console.warn("loading content failed", e) })
          break
				default:
          console.warn("unknown command:", event.data)
					break
			}
		  }, false);
	
		function publish(cmd, param) {
		  // Call back to the extension context to save the image to the workspace folder.
		  vscode.postMessage({ cmd, param });
		}
	
		function init() {
		  const iframe = document.getElementById("lia")
		  
		  if (iframe) {
			  lia = iframe.contentWindow || iframe.contentDocument;

			  sendToLia("eval", \`
          var blob = {};

          window.LIA.lineGoto = (line) => {
            parent.postMessage({cmd: 'lineGoto', param: line}, "*")
          }

          window.LIA.onReady = undefined

          window.injectHandler = function (param) {
            let url
            if (blob[param.src]) {
              url = blob[param.src]
            }
            else if (param.data) {
              url = URL.createObjectURL(param.data)
              blob[param.src] = url
            } else {
              return
            }

            const src = window.location.origin + param.src
          
            switch (param.tag) {
              case "img": {
                const images = document.querySelectorAll('img,picture')
          
                for (let i = 0; i < images.length; i++) {
                  let image = images[i]
          
                  if (image.src == src) {
                    image.src = url
          
                    if (image.onclick) {
                      image.onclick = function () {
                        window.LIA.img.click(url)
                      }
                    }
                    
                    break
                  }
                }
          
                break
              }
            
          
              case "audio": {
                const nodes = document.querySelectorAll('source')
          
                for (let i = 0; i < nodes.length; i++) {
                  let elem = nodes[i]
                  if (elem.src == src) {
                    elem.src = url
                    elem.removeAttribute("onerror")
                    
                    const parent = elem.parentNode
                    // this forces the player to reload
                    parent.innerHTML = elem.outerHTML
                    parent.play()

                    break
                  }
                }
          
                break
              }
          
              case "video": {
                const nodes = document.querySelectorAll('source')
                for (let i = 0; i < nodes.length; i++) {
                  let elem = nodes[i]
                  if (elem.src == src) {                  
                    const parent = elem.parentNode
                    parent.src = url
                    parent.load()
                    parent.onloadeddata = function() {
                      parent.play()
                    }
                    break
                  }
                }
          
                break
              }

              case "script": {
                const tag = document.createElement('script')
                tag.src = url
                document.head.appendChild(tag)
                
                break
              }

              case "link": {
                const tag = document.createElement('link')
                tag.href = url
                tag.rel = 'stylesheet'
                document.head.appendChild(tag)
                
                break
              }

              default: {
                console.warn("could not handle tag =>", param)
              }
            }
          }
          
            
          document.body.onclick = (e) => {
            e = e.srcElement || e.target;
            const parentNode = e.parentNode

            if (parentNode && parentNode.tagName === "A" && parentNode.target === "_blank") {
              parent.postMessage({cmd: 'link', param: parentNode.href}, "*")
            }
          }

          window.LIA.fetchError = (tag, src) => {
            if (blob[src]) {
              window.injectHandler({tag, src})
            } else {
              parent.postMessage({cmd: 'media.load', param: {tag, src}}, "*")
            }
          }
        \`)

			  publish("ready", true)
		  }
		}
	
		</script>
	  </head>
	  <body style="padding: 0px; height: 100vh; overflow: hidden; width: 100%">
		<iframe
			id="lia"
			sandbox="allow-scripts allow-same-origin allow-forms allow-pointer-lock allow-downloads"
			allow="clipboard-read; clipboard-write;"
			class="webview ready"
			src="${liascriptPath}?#1"
			style="width: 100%; height: 100%; border: 0px">
		</iframe>
	  </body>
	  </html>`

  webview.html = htmlContent
}

// this method is called when your extension is deactivated
export function deactivate() {}
