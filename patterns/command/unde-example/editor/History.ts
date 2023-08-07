import { UndoAbleCommand } from './UndoAbleCommand';
import { Stack } from '../utils';

export class History {
	private commands: Stack<UndoAbleCommand>;
	constructor() {
		this.commands = new Stack<UndoAbleCommand>();
	}

	public push(command: UndoAbleCommand): void {
		this.commands.push(command);
	}
	public pop(): UndoAbleCommand | null {
		return this.commands.pop();
	}
}
