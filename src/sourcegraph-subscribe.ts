import * as sourcegraph from 'sourcegraph'

export function activate(ctx: sourcegraph.ExtensionContext): void {
  ctx.subscriptions.add(sourcegraph.workspace.onDidOpenTextDocument.subscribe(doc => {
      console.log("Woah-oah! We're inside the onDidOpenTextDocument method");
    }));
   ctx.subscriptions.add(
       sourcegraph.languages.registerHoverProvider(['*'], {
           provideHover: () => ({
               contents: {
                   value: 'Hello world from WIP: Sourcegraph subscribe event! 🎉🎉🎉',
                   kind: sourcegraph.MarkupKind.Markdown
               }
           }),
        })
    )
}

// Sourcegraph extension documentation: https://docs.sourcegraph.com/extensions/authoring
