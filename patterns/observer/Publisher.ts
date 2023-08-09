import { Subject } from './Subject';

export class Publisher extends Subject {
	// Only for the Pull style
	private _value: number = 0;

	public get value(): number {
		return this._value;
	}
	public set value(value: number) {
		this._value = value;
		this.notifyObservers();
	}
	/* 
	Push style
	*/
	public notifyObservers(): void {
		// @params: data: observer or any data needed to be passed to the observer
		this.observers.forEach((observer) => observer.update<number>(this.value));
	}
}
