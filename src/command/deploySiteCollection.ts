import * as vscode from 'vscode';
import { Utils, Auth, Output } from '..';

export function deploySiteCollection(fileUri: vscode.Uri, auth: Auth, output: Output): void {
  if (!Utils.warnIfNotSppkg(fileUri)) {
    return;
  }

  Utils.deploySolution(fileUri, false, false, auth, output);
}