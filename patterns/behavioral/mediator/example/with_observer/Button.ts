import { UIController } from './UIController';

export class Button extends UIController {
	private _isEnabled: boolean = false;
	public get isEnabled(): boolean {
		return this._isEnabled;
	}
	public set isEnabled(value: boolean) {
		this._isEnabled = value;
		this.notifyEventHandlers();
	}
}
