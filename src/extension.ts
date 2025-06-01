import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerCommand('file-reloader.reloadFile', async () => {
        const activeEditor = vscode.window.activeTextEditor;
        
        if (!activeEditor) {
            vscode.window.showInformationMessage('No active editor found');
            return;
        }
        
        const document = activeEditor.document;
        const filePath = document.uri;
        
        if (document.isUntitled) {
            vscode.window.showInformationMessage('Cannot reload untitled document');
            return;
        }
        
        try {
            await vscode.commands.executeCommand('workbench.action.files.revert', filePath);
            vscode.window.showInformationMessage('File reloaded from disk');
        } catch (error) {
            vscode.window.showErrorMessage(`Failed to reload file: ${error}`);
        }
    });
    
    context.subscriptions.push(disposable);
}

export function deactivate() {}