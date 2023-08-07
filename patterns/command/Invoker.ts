import { Command } from './Command';
class Invoker {
	private _command: Command;
	constructor(command: Command) {
		this._command = command;
	}
	public action() {
		this._command.execute();
	}
}
