export interface StrategyTwo {
	doSomething(): void;
}

export class SecondConcreteStrategyOne implements StrategyTwo {
	doSomething(): void {
		console.log('ConcreteStrategyOne From StrategyTwo');
	}
}

export class SecondConcreteStrategyTwo implements StrategyTwo {
	doSomething(): void {
		console.log('ConcreteStrategyTwo From StrategyTwo');
	}
}
