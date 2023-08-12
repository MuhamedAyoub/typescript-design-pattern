import { Observer } from './Observer';

export abstract class UIController {
	private observers = new Set<Observer>();

	public addEventHandler(observer: Observer): void {
		this.observers.add(observer);
	}
	public detach(observer: Observer): void {
		this.observers.delete(observer);
	}
	protected notifyEventHandlers() {
		this.observers.forEach((observer) => observer.update());
	}
}
