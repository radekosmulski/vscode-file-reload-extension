# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a VSCode extension called "File Reloader" that provides a command to reload files from disk, discarding any unsaved changes. The extension adds:
- A command "Reload File from Disk" accessible via Command Palette
- A keyboard shortcut: `Ctrl+Alt+R` (Windows/Linux) or `Cmd+Alt+R` (Mac)

## Development Commands

### Build and Compile
```bash
npm run compile     # Compile TypeScript to JavaScript
npm run watch       # Watch mode for continuous compilation
```

### VSCode Extension Development
- Press `F5` in VSCode to launch a new Extension Development Host window with the extension loaded
- The compiled JavaScript output is in the `out/` directory
- Source TypeScript files are in the `src/` directory

## Architecture

The extension is minimal with a single main file:
- `src/extension.ts`: Contains the activation function that registers the `file-reloader.reloadFile` command
  - Uses VSCode's built-in `workbench.action.files.revert` command to reload files
  - Handles edge cases for untitled documents and missing editors
  - Provides user feedback via information and error messages