import { DialogBox } from './DialogBox';
import { UIController } from './UIController';

export class ListBox extends UIController {
	private _selection: string;
	constructor(owner: DialogBox) {
		super(owner);
		this._selection = '';
	}
	public get selection(): string {
		return this._selection;
	}
	public set selection(value: string) {
		this._selection = value;
		this.owner.changed(this);
	}
}
