import { Command } from '../../Command';

export interface UndoAbleCommand extends Command {
	unExecute(): void;
}
