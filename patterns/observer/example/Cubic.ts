import { Observer } from '../Observer';
import { Publisher } from '../Publisher';

export class Cubic implements Observer {
	private dataSource: Publisher;
	constructor(dataSource: Publisher) {
		this.dataSource = dataSource;
	}
	public update(): void {
		console.log('Cubic got notified', this.dataSource.value);
	}
}
