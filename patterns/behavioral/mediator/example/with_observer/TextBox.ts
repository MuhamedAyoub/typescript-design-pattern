import { UIController } from './UIController';

export class TextBox extends UIController {
	private _selection: string;
	constructor() {
		super();
		this._selection = '';
	}
	public get selection(): string {
		return this._selection;
	}
	public set selection(value: string) {
		this._selection = value;
		this.notifyEventHandlers();
	}
}
