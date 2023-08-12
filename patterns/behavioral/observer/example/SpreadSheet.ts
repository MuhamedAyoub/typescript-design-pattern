import { Observer } from '../Observer';

export class SpreadSheet implements Observer {
	update(): void {
		console.log('SpreadSheet got notified');
	}
}
