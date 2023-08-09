import { Observer } from './Observer';

export class UIController {
	private observers = new Set<Observer>();

	public attach(observer: Observer): void {
		this.observers.add(observer);
	}
	public detach(observer: Observer): void {
		this.observers.delete(observer);
	}
	public notifyObservers() {
		this.observers.forEach((observer) => observer.update());
	}
}
