import { Subject } from './Subject';

export class Publisher extends Subject {
	private _value: number = 0;
	public get value(): number {
		return this._value;
	}
	public set value(value: number) {
		this._value = value;
		this.notifyObservers();
	}
}
