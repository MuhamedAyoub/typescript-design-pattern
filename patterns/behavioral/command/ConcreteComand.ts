import { Command } from './Command';
import { Receiver } from './Receiver';

class ConcreteCommand implements Command {
	private receiver: Receiver;
	constructor(receiver: Receiver) {
		this.receiver = receiver;
	}

	execute(): void {
		this.receiver.action();
	}
}
