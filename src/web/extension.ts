/* eslint-disable @typescript-eslint/semi */
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode'
import { Utils } from 'vscode-uri'
import * as MATHJS from 'mathjs'
import * as MathParser from 'tex-math-parser' // ES6 module

const COMMAND = 'code-actions-mathjs.command'

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

function jit(document: vscode.TextDocument) {
  if (preview[document.fileName]) {
    preview[document.fileName].panel.webview.postMessage({
      cmd: 'jit',
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
    jit(event.document)
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

function findParenRanges(lineText: string) {
  let parenRanges = []
  let openParenIndexes = []
  for (let i = 0; i < lineText.length; i++) {
    let char = lineText.charAt(i)
    if (char === '(') {
      openParenIndexes.push(i)
    } else if (char === ')') {
      let openParenIndex = openParenIndexes.pop()
      if (openParenIndex !== undefined) {
        parenRanges.unshift([openParenIndex, i])
      }
    }
  }
  return parenRanges
}

function filterParenRanges(
  parenRanges: any,
  lineText: string,
  bufferColumn: number
): number[][] {
  return parenRanges.filter((range: [number, number]) => {
    // empty parens aren't worth showing suggestions for
    let innerText = lineText.substring(range[0] + 1, range[1]) // skip open paren
    let isNotTrivial = /[^()]/.test(innerText)

    // check if cursor is within or immediately after paren range
    let isCursorWithin = bufferColumn > range[0] && bufferColumn <= range[1] + 1

    return isNotTrivial && isCursorWithin
  })
}

function tryOut(fn: () => any) {
  try {
    return fn()
  } catch (e) {
    return ''
  }
}

class Mathjizer implements vscode.CodeActionProvider {
  public static readonly providedCodeActionKinds = [
    vscode.CodeActionKind.RefactorInline,
  ]

  public provideCodeActions(
    document: vscode.TextDocument,
    range: vscode.Range
  ): vscode.CodeAction[] | undefined {
    const result = this.isAtStartOfSmiley(document, range)

    if (result === null) {
      return
    }

    const replace = []

    if (result.result) {
      replace.push(
        this.createFix(document, result.range, 'Evaluates to', result.result)
      )
    }

    if (result.latex && result.result !== result.latex) {
      replace.push(
        this.createFix(document, result.range, 'Replace by TeX', result.latex)
      )
    }

    if (
      result.simplify &&
      (result.latex !== result.simplify || result.result !== result.simplify)
    ) {
      replace.push(
        this.createFix(
          document,
          result.range,
          'Simplified TeX',
          result.simplify
        )
      )
    }

    replace.push(this.createCommand())

    return replace
  }

  private isAtStartOfSmiley(
    document: vscode.TextDocument,
    range: vscode.Range
  ): null | {
    result: string
    latex: string
    simplify: string

    range: vscode.Range
  } {
    const line = document.lineAt(range.start.line)

    let reg = /\$[^\$]+\$/g

    let match
    while ((match = reg.exec(line.text))) {
      if (
        match.index !== undefined &&
        range.start.character >= match.index &&
        range.start.character <= match.index + match[0].length
      ) {
        let [expression, json] = match[0].slice(1, -1).split('%')
        let scope = {}
        expression = expression.trim()

        if (json) {
          try {
            scope = eval('Object(' + json + ')') || {}
          } catch (e) {}
        }

        try {
          MATHJS.parse(expression)
          return {
            result: tryOut(() =>
              MATHJS.format(MATHJS.evaluate(expression, scope))
            ),
            latex: tryOut(() => MATHJS.parse(expression).toTex()),
            simplify: tryOut(() => MATHJS.simplify(expression, scope).toTex()),

            range: new vscode.Range(
              range.start.line,
              match.index + 1,
              range.start.line,
              match.index + match[0].length - 1
            ),
          }
        } catch (e) {}

        try {
          let math = MathParser.parseTex(expression)

          return {
            result: tryOut(
              () => MathParser.evaluateTex(expression, scope)['evaluated']
            ),
            latex: '', //MATHJS.parse(expression).toTex(),
            // @ts-ignore
            simplify: tryOut(() => MATHJS.simplify(math).toTex()),

            range: new vscode.Range(
              range.start.line,
              match.index + 1,
              range.start.line,
              match.index + match[0].length - 1
            ),
          }
        } catch (e) {}

        return null
      }
    }

    return null
  }

  private createFix(
    document: vscode.TextDocument,
    range: vscode.Range,
    comment: string,
    replace: string
  ): vscode.CodeAction {
    const fix = new vscode.CodeAction(
      comment + ': ' + replace,
      vscode.CodeActionKind.QuickFix
    )
    fix.edit = new vscode.WorkspaceEdit()
    fix.edit.replace(document.uri, range, replace)
    return fix
  }

  private createCommand(): vscode.CodeAction {
    const action = new vscode.CodeAction(
      'Learn more about MathJS',
      vscode.CodeActionKind.Empty
    )
    action.command = {
      command: COMMAND,
      title: 'Learn more about MathJS',
      tooltip: 'This will open the MathJS page.',
    }
    return action
  }
}

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

  const baseRoots: vscode.Uri[] = [
    vscode.Uri.joinPath(context.extensionUri, 'liascript'),
  ]

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
          'liascript',
          'LiaScript: ' + fileName.slice(1),
          vscode.ViewColumn.Beside,
          {
            enableScripts: true,
            retainContextWhenHidden: true,
            localResourceRoots: baseRoots,
          }
        )

    webviewPanel.iconPath = vscode.Uri.joinPath(
      context.extensionUri,
      'icon.png'
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
    vscode.languages.registerCodeActionsProvider('markdown', new Mathjizer(), {
      providedCodeActionKinds: Mathjizer.providedCodeActionKinds,
    })
  )

  context.subscriptions.push(
    vscode.commands.registerCommand(COMMAND, () =>
      vscode.env.openExternal(
        vscode.Uri.parse('https://mathjs.org/docs/expressions/syntax.html')
      )
    )
  )

  /*
  mathDiagnostics = vscode.languages.createDiagnosticCollection('math')
  context.subscriptions.push(mathDiagnostics)

  context.subscriptions.push(
    vscode.languages.registerCodeActionsProvider('markdown', new Mathinfo(), {
      providedCodeActionKinds: Mathinfo.providedCodeActionKinds,
    })
  )*/

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
        <meta http-equiv="Cross-Origin-Embedder-Policy" content="credentialless" />

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
      src="${webview.asWebviewUri(liascriptPath)}?vscode-coi=3"
      style="width: 100%; height: 100%; border: 0px">
    </iframe>
    </body>
    </html>`

  webview.html = htmlContent
}

// this method is called when your extension is deactivated
export function deactivate() {}
