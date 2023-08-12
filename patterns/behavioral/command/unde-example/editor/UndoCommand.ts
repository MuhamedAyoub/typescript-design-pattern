import { Command } from './Command';
import { History } from './History';

export class UndoCommand implements Command {
	private history: History;
	constructor(history: History) {
		this.history = history;
	}
	execute(): void {
		const command = this.history.pop();
		if (command) {
			command.unExecute();
		}
	}
}
