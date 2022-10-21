# liascript-preview-web


This is a preview module for [LiaScript](https://LiaScript.github.io) courses developed in Markdown.

## Usage

After installing press <kbd>F1</kbd> to open the fuzzy search and type "liascript", three options will be presented:

* __LiaScript: Toggle Preview [<kbd>Alt</kbd> <kbd>L</kbd>]__

  This will open a panel on the right side (or close it).
  The preview will be updated only with manual intervention, when you select the option "Reload Preview" or hit the keyboard short-cut [<kbd>Ctrl</kbd> <kbd>S</kbd>].

* __LiaScript: Toggle Preview in JIT mode [<kbd>Shift</kbd> <kbd>Alt</kbd> <kbd>L</kbd>]__

  The difference between this and the upper mode is, that with this option a faster update mode (Just-In-Time compilation) will be used, which will only compile the differences between the current and the previous version.
  This results in optimized update times, especially for large documents, but it also may result in glitches, when state changes of quizzes, code, etc. might be involved.
  If this happens, you simply have to reload the Preview, which will result in an entire re-interpretation of the entire document.

* __LiaScript: Reload Preview [<kbd>Ctrl</kbd> <kbd>S</kbd>]__

  Reload the entire document, all states are reset.

As an alternative you can also use the keyboard shortcuts directly.


## Navigation

__Preview to Editor: __
Double-click onto a an element within the preview and the cursor position within the editor will jump to the associated line.

__Editor to Preview:__
When you hit <kbd>Ctrl</kbd> and click onto an text element within the editor, the preview will switch to the associated slide.


## Shortcomings

Multimedia content cannot be loaded directly from the editor at the moment.
You have to commit them first to your repository and set a `base` in the following format.

``` markdown
<!--
...
base: https://raw.githubusercontent.com/USER/REPOSITORY/BRANCH/
...
-->

# Main Document
```

This means, the following README - URL:

`https://github.com/LiaScript/docs/blob/master/README.md`

has a raw-base of:

`https://raw.githubusercontent.com/LiaScript/docs/master/`

