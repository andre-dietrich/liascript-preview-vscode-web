# liascript-preview-web

This is a preview module for [LiaScript](https://LiaScript.github.io) courses developed in Markdown.

## Usage

After installing press <kbd>F1</kbd> to open the fuzzy search and type "liascript", three options will be presented:

* __LiaScript: Toggle Preview [<kbd>Alt</kbd> <kbd>L</kbd>]__

  This will open a panel on the right side (or close it).
  The preview will be updated only with manual intervention, when you select the option "Update Preview" or hit the keyboard short-cut [<kbd>Ctrl</kbd> <kbd>S</kbd>] or when you completely reload the document without caching [<kbd>Alt</kbd> <kbd>F5</kbd>].

* __LiaScript: Toggle Preview in JIT mode [<kbd>Shift</kbd> <kbd>Alt</kbd> <kbd>L</kbd>]__

  The difference between this and the upper mode is, that with this option a faster update mode (Just-In-Time compilation) will be used, which will only compile the differences between the current and the previous version.
  This results in optimized update times, especially for large documents, but it also may result in glitches, when state changes of quizzes, code, etc. might be involved.
  If this happens, you simply have to reload the Preview, which will result in an entire re-interpretation of the entire document.

* __LiaScript: Update Preview [<kbd>Ctrl</kbd> <kbd>S</kbd>]__

  Reload the entire document, which is okay if you are writing Markdown, but when you import some JavaScript or CSS, then it is better to reload the entire document.

* __LiaScript: Reload Preview [<kbd>Alt</kbd> <kbd>F5</kbd>]__

  This will reload the entire document and all imported sources.
  This is the best way if you are developing JavaScript or CSS, if you only write Markdown, then use the update option, which will will only compile the document.

As an alternative you can also use the keyboard shortcuts directly.


## Navigation

__Preview to Editor:__
Double-click onto a an element within the preview and the cursor position within the editor will jump to the associated line.

__Editor to Preview:__
Currently not activated.


