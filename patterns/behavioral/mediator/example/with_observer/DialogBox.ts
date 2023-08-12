import { TextBox } from './TextBox';
import { Button } from './Button';
import { ListBox } from './ListBox';

export class ArticleDialogBox {
	private saveButton: Button = new Button();
	private articlesListBox: ListBox = new ListBox();
	private titleTextBox: TextBox = new TextBox();
	constructor() {
		this.titleTextBox.addEventHandler({
			update: this.titleChanged,
		});

		this.articlesListBox.addEventHandler({
			update: this.articleSelected,
		});
	}
	private titleChanged(): void {
		const content = this.titleTextBox.selection!;
		this.saveButton.isEnabled = content !== null && content.length !== 0;
	}

	private articleSelected(): void {
		this.titleTextBox.selection = 'hello';
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
