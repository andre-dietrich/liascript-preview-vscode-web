// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode'

const preview: {
  [key: string]: {
    webview: vscode.WebviewPanel
    jit: boolean
  }
} = {}

function compile(document: vscode.TextDocument) {
  if (preview[document.fileName]) {
    preview[document.fileName].webview.webview.postMessage({
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
    preview[event.document.fileName].webview.webview.postMessage({
      cmd: 'jit',
      param: event.document.getText(),
    })
  }
})

vscode.languages.registerCodeActionsProvider('markdown', {
  provideCodeActions(document, pos, tok) {
    if (preview[document.fileName]) {
      const line = pos.start.line

      if (line) {
        try {
          preview[document.fileName].webview.webview.postMessage({
            cmd: 'gotoLine',
            param: line + 1,
          })
        } catch (e) {}
      }
    }

    return undefined
  },
})

function createPreview(
  jit: boolean,
  context: vscode.ExtensionContext,
  editor?: vscode.TextEditor
) {
  if (!editor) {
    vscode.window.showWarningMessage(
      'LiaScript can only open Markdown files. Your file has to end with the file extension (.md).'
    )

    return
  }

  const fileName = editor.document.fileName
  const fileEnding = fileName.split('.').slice(-1)[0]?.toLowerCase()

  if (fileEnding !== 'md') {
    vscode.window.showWarningMessage(
      'LiaScript can only open Markdown files. Your file has to end with the file extension (.md).'
    )

    return
  }

  if (preview[fileName]) {
    // close the panel
    preview[fileName].webview.dispose()
    delete preview[fileName]
  } else {
    // create a new preview
    const webviewPanel = vscode.window.createWebviewPanel(
      'vscodeTest',
      'LiaScript Preview: ' + fileName.slice(1),
      vscode.ViewColumn.Beside,
      {
        enableScripts: true,
        retainContextWhenHidden: true,
        //localResourceRoots: [vscode.workspace. editor.document.uri],
      }
    )

    webviewPanel.onDidDispose(() => {
      delete preview[fileName]
    })

    webviewPanel.webview.onDidReceiveMessage(
      (message) => {
        switch (message.cmd) {
          case 'ready': {
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

    setHtmlContent(context.extensionUri, webviewPanel.webview)

    preview[fileName] = {
      webview: webviewPanel,
      jit: jit,
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
        compile(editor.document)
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
}

function setHtmlContent(extensionUri: vscode.Uri, webview: vscode.Webview) {
  const liascriptPath = vscode.Uri.joinPath(
    extensionUri,
    'liascript',
    'index.html'
  )

  let htmlContent = `<!DOCTYPE html>
	  <html lang="en">
	  <head>
		<meta charset="UTF-8">
	
		<title>LiaScript - Preview</title>
		
		<meta http-equiv="Content-type" content="text/html;charset=UTF-8">
		

		<script>
		const vscode = acquireVsCodeApi();

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
					break;
				case "compile":
					sendToLia("compile", event.data.param)
					break;
        case "lineGoto":
          publish("lineGoto", event.data.param)
          break;
        case "gotoLine":
          sendToLia("goto", event.data.param)
          break
        case "link":
          publish("link", event.data.param)
          break;
        case "eval":
          publish("eval", event.data.param)
          break
        case "lia-ready":
          init()
          break;
				default:
          console.warn("unknown command:", event.data)
					break;
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
          window.LIA.lineGoto = (line) => {
            parent.postMessage({cmd: 'lineGoto', param: line}, "*")
          }

          window.LIA.onReady = undefined
          
          document.body.onclick = (e) => {
            e = e.srcElement || e.target;
            const parentNode = e.parentNode

            if (parentNode && parentNode.tagName === "A" && parentNode.target === "_blank") {
              parent.postMessage({cmd: 'link', param: parentNode.href}, "*")
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
