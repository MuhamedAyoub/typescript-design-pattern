import { Observer } from './Observer';

export class Subject {
	protected observers: Set<Observer> = new Set<Observer>();
	public addObserver(observer: Observer): void {
		this.observers.add(observer);
	}
	public removeObserver(observer: Observer): void {
		// TODO
		this.observers.delete(observer);
	}

	public notifyObservers<T>(): void {
		this.observers.forEach((observer) => observer.update());
	}
}
