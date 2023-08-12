import { ConcreteStateA } from './Concretes';
import { State } from './State';

class Context {
	private _currentState!: State;

	public request(): void {
		this.currentState.handle();
	}
	public get currentState(): State {
		return this._currentState;
	}
	public set currentState(value: State) {
		console.log(' You are sitter');
		this._currentState = value;
	}
}
