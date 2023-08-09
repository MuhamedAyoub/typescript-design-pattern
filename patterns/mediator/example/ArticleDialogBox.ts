import { Button } from './Button';
import { DialogBox } from './DialogBox';
import { ListBox } from './ListBox';
import { TextBox } from './TextBox';
import { UIController } from './UIController';

export class ArticleDialogBox extends DialogBox {
	private titleTextBox = new TextBox(this);
	private saveButton = new Button(this);
	private articlesListBox = new ListBox(this);

	public changed(colleague: UIController): void {
		if (colleague === this.titleTextBox) {
			this.titleChanged();
		} else if (colleague === this.articlesListBox) {
			this.articleSelected();
		}
	}
	private titleChanged() {
		const content = this.titleTextBox.selection;
		this.saveButton.isEnabled = content !== null && content.length !== 0;
	}

	private articleSelected() {
		this.titleTextBox.selection = this.articlesListBox.selection;
		this.saveButton.isEnabled = true;
	}
	//*  Only for Testing
	public simulateUserInteraction(): void {
		this.articlesListBox.selection = 'Article 1';
		this.titleTextBox.selection = '';
		console.log('TextBox: ' + this.titleTextBox.selection);
		console.log('Button: ' + this.saveButton.isEnabled);
		console.log('ListBox: ' + this.articlesListBox.selection);
	}
}
