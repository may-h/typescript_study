/**
 *  Type aliase 와 Interface의 차이점을 알아보자! 
 *  인터페이스를 마구마구 쓰기보다는 각각의 특징을 이해하고 알맞은 곳에서 올바른 것을 사용하도록하자. 
 * 
 *  * Interface - 어떤 것의 규격 사항. 
 *  오브젝트와 오브젝트 간의 의사소통을 할 때 정해진 인터페이스를 토대로 서로간의 상호작용을 하도록 도와준다. 
 *  API는 계약서와 동일하다. 
 *  어떤 특정한 규격을 정의하고 규격을 통해서 구현된다면 인터페이스를 사용하는 것이 좋다. 
 * 
 *  * Types - 어떤 데이터를 담을 때, 데이터의 타입을 결정하는 것 
 *  구현 목적이 아니라 데이터를 담을 목적으로 만든다면 타입을 사용하는 것이 좋다. 
 * 
 */

type PositionType = {
    x: number;
    y: number;
}
interface PositionInterface {
    x: number;
    y: number;
}

// 공통1. 둘다 object 형태로 만들 수 있다. 
const obj1: PositionType = {
    x: 1,
    y: 2,
}
const obj2: PositionInterface = {
    x: 1,
    y: 1,
}

// 공통2. 둘다 class로 만들 수 있다. 
class Pos1 implements PositionType {
    x: number;
    y: number;
}
class Pos2 implements PositionInterface {
    x: number;
    y: number;
}

// 차이점 - Extends 
// 기존 인터페이스를 확장하여 Z가 포함된 포지션인터페이스를 만들 수 있다. 
interface ZPositionInterface extends PositionInterface {
    z: number;
}
/*
only interfaces can be merged. 
위의 extends 방법 말고도, 아래와 같이 해당 인터페이스에 z를 포함한 인터페이스를 한번더 정의해주면 x,y,z속성을 모두 가져야만 되게 확장된다.  
interface PositionInterface {
    z: number; 
}
*/
type ZPositionType = PositionType & {z: number}; 


// Type aliases can use computed properties 
type Person = {
    name: string;
    age: number;
}

type Name = Person['name']; 
type NumberType = number; 
type Direction = 'left' | 'right'
