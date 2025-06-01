# File Reloader

A simple VSCode extension that allows you to reload a single file from disk, discarding any unsaved changes.

## Features

- Reload the current file from disk with a single command
- Discard unsaved changes without affecting other open files
- Keyboard shortcut for quick access

## Usage

### Keyboard Shortcut
- **Windows/Linux**: `Ctrl+Alt+R`
- **Mac**: `Cmd+Alt+R`

### Command Palette
1. Open Command Palette (`Ctrl+Shift+P` / `Cmd+Shift+P`)
2. Type "Reload File from Disk"
3. Press Enter

## Requirements

- VSCode version 1.74.0 or higher

## Installation

1. Clone this repository
2. Run `npm install` to install dependencies
3. Run `npm run compile` to build the extension
4. Press `F5` in VSCode to launch a new window with the extension loaded

## Development

```bash
# Install dependencies
npm install

# Compile TypeScript
npm run compile

# Watch mode for development
npm run watch
```

## License

This extension is released under the MIT License.