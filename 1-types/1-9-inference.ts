{
    /**
     *  Type Inference (타입 추론)
     *  타입 추론을 사용하는 것보다 직접 타입을 명시하는 것이 좋다. 특히 함수에서는 반드시 명시하도록 하자! 
     */

    let text = 'hello';  // 선언함과 동시에 string 타입을 할당했기 때문에 
    // text = 1;   //ERROR -> number type으로 바꿀 수 없다.(TS가 자동으로 타입을 string으로 추론함)

    function print(message) { // 따로 message의 타입을 정의하지 않으면, any로 자동할당 됨. (but any타입은 👎🏻 ) 
        console.log(message);
    }


    function add (x: number, y: number) { //return type을 선언하지 않았지만, 자동으로 number을 반환할지 추론하여 반환타입을 number로 선언한다! 
        return x + y; 
    }
    const result = add(1, 2);
 }