import { History } from './History';
import { HTMLDocument } from './HtmlDocument';
import { UndoAbleCommand } from './UndoAbleCommand';

export class BoldCommand implements UndoAbleCommand {
	private history: History;
	private document: HTMLDocument;
	private prevContent: string;

	constructor(history: History, document: HTMLDocument) {
		this.history = history;
		this.document = document;
		this.prevContent = '';
	}
	public unExecute(): void {
		this.document.content = this.prevContent;
	}
	public execute(): void {
		this.prevContent = this.document.content;
		this.document.makeBold();
		this.history.push(this);
	}
}
