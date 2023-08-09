import { DialogBox } from './DialogBox';

export class UIController {
	protected owner: DialogBox;
	constructor(owner: DialogBox) {
		this.owner = owner;
	}
}
