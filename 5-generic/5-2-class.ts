// either: a or b 
interface EitherNumber {
    left: () => number; 
    right: () => number;
}

// π© numberλ§ λ°μ μ μλ ν΄λμ€.. λ§μ½ μ€λ₯Έμͺ½, μΌμͺ½ λ€λ₯Έ νμμ΄ λ€μ΄μ¨λ€λ©΄? 
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




// β¨ μ λ€λ¦­μ μ¬μ©ν΄μ νμμ μ μ°μ±μ λμ¬λ³΄μ! 
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

const either2 = new SimpleEither({name: 'may'}, 3); // object, number λ€λ₯Έ νμλ λ£μ μ μλ€. 
