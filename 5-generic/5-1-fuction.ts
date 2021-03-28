/**
 * Generic 
 * 어떤 타입이든지 받을 수 있다. 
 * 타입 보장, 재사용성이 가능하다. 
 */


{
    // 💩 이 함수의 문제점은 'number' 타입만 체크 할 수 있다.. 다른 타입들은 다 따로 만들어줘야 할까?
    function checkNotNullNumber(arg: number | null): number {
        if(arg == null) {
            throw new Error('not valid number!');
        }
        return arg;
    }


    // 💩 any를 쓰게되면 타입 보장이 되지 않아서 좋지 않다. 
    function checkNotNullAny(arg: any | null): number {
        if(arg == null) {
            throw new Error('not valid number!');
        }
        return arg;
    }

    // ✨ 제네릭을 사용하면, 사용하는 사람이 어떤 타입인지 결정할 수 있다. 
    // 유연하고 타입을 보장 받을 수 있다. 
    function checkNotNull<T>(arg: T | null): T {
        if(arg == null) {
            throw new Error('not valid number!');
        }
        return arg;
    }
    const number: number = checkNotNull(123); 
    const boal: boolean = checkNotNull(true); // type을 정해준다. 


}