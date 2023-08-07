export interface StrategyOne {
	doSomething(): void;
}

export class FirstConcreteStrategyOne implements StrategyOne {
	doSomething(): void {
		console.log('ConcreteStrategyOne From StrategyOne');
	}
}

export class FirstConcreteStrategyTwo implements StrategyOne {
	doSomething(): void {
		console.log('ConcreteStrategyTwo From StrategyOne');
	}
}
