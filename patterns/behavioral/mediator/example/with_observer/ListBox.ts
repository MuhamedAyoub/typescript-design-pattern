import { UIController } from './UIController';

export class ListBox extends UIController {
	private _selection: string = '';
	public get selection(): string {
		return this._selection;
	}
	public set selection(value: string) {
		this._selection = value;
		this.notifyEventHandlers();
	}
}
