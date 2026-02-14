import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	const provider = new PaletteViewProvider();

	context.subscriptions.push(
		vscode.window.registerWebviewViewProvider(
			'phppointPaletteView',
			provider
		)
	);
}

class PaletteViewProvider implements vscode.WebviewViewProvider {

	resolveWebviewView(webviewView: vscode.WebviewView) {

		webviewView.webview.options = {
			enableScripts: true
		};

		webviewView.webview.html = `
			<!DOCTYPE html>
			<html>
			<body style="padding:0;margin:0;">
				<iframe 
					src="https://colorspalettes.in"
					style="width:100%; height:100vh; border:none;">
				</iframe>
			</body>
			</html>
		`;
	}
}

export function deactivate() {}
