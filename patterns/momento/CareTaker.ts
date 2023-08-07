import { Momento } from './Momento';
class CareTaker {
	private states = new Array<Momento>();

	public push(state: Momento): void {
		this.states.push(state);
	}

	public pop(): Momento {
		var lastIndex = this.states.length - 1;
		var lastState = this.states[lastIndex];
		this.states.splice(lastIndex, 1);
		return lastState;
	}
}
