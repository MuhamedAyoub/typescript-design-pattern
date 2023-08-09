import { DialogBox } from './DialogBox';
import { UIController } from './UIController';

export class Button extends UIController {
	private _isEnabled: boolean;
	constructor(owner: DialogBox) {
		super(owner);
		this._isEnabled = false;
	}
	public get isEnabled(): boolean {
		return this._isEnabled;
	}
	public set isEnabled(value: boolean) {
		this._isEnabled = value;
		this.owner.changed(this);
	}
}
