import { State } from './State';

export class ConcreteStateA implements State {
	handle(): void {
		console.log('ConcreteStateA handles request.');
	}
}

export class ConcreteStateB implements State {
	handle(): void {
		console.log('ConcreteStateB handles request.');
	}
}
