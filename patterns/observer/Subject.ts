import { Observer } from './Observer';

export class Subject {
	private observers: Array<Observer> = new Array();
	public addObserver(observer: Observer): void {
		this.observers.push(observer);
	}
	public removeObserver(observer: Observer): void {
		// TODO
		this.observers?.splice(this.observers.indexOf(observer), 1);
	}
	public notifyObservers(): void {
		this.observers.forEach((observer) => observer.update());
	}
}
