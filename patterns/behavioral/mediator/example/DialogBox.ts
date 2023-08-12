import { UIController } from './UIController';

export abstract class DialogBox {
	public abstract changed(colleague: UIController): void;
}
