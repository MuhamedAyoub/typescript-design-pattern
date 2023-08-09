import { Mediator } from './Mediator';

export class ConcreteMediator extends Mediator {
	public changed(): void {
		console.log('ConcreteMediator has been changed');
	}
}
