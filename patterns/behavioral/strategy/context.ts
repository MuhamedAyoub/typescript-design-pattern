import { StrategyOne } from './strategyOne';
import { StrategyTwo } from './strategyTwo';

class Context {
	private _strategyOne!: StrategyOne;
	private _strategyTwo!: StrategyTwo;
	private _content!: string;
	public get content(): string {
		return this._content;
	}
	public set content(value: string) {
		this._content = value;
	}

	public get strategyOne(): StrategyOne {
		return this._strategyOne;
	}

	public get strategyTwo(): StrategyTwo {
		return this._strategyTwo;
	}
	public store(
		strategyOne: StrategyOne,
		strategyTwo: StrategyTwo,
		content: string
	): void {
		this._strategyOne = strategyOne;
		this._strategyTwo = strategyTwo;
		this._content = content;
	}
	public requestOne(): void {
		this.strategyOne.doSomething();
	}
	public requestTwo(): void {
		this.strategyTwo.doSomething();
	}
}
