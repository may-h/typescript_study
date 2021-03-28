// either: a or b 
interface EitherNumber {
    left: () => number; 
    right: () => number;
}

// 💩 number만 받을 수 있는 클래스.. 만약 오른쪽, 왼쪽 다른 타입이 들어온다면? 
class SimpleEitherNumber implements EitherNumber {
    constructor(private leftValue: number, private rightValue: number){} 

    left(): number {
        return this.leftValue;
    }
    right(): number {
        return this.rightValue;
    }
}

const either = new SimpleEitherNumber(4,5); 
either.left();  // 4
either.right(); // 5




// ✨ 제네릭을 사용해서 타입의 유연성을 높여보자! 
interface Either<L, R> {
    left: () => L; 
    right: () => R;
}

class SimpleEither<L, R> implements Either<L, R> { 
    constructor(private leftValue: L, private rightValue: R){} 

    left(): L {
        return this.leftValue;
    }
    right(): R {
        return this.rightValue;
    }
}

const either2 = new SimpleEither({name: 'may'}, 3); // object, number 다른 타입도 넣을 수 있다. 
