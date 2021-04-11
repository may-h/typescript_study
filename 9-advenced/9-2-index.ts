/*
    Index type을 이용하면 다른 타입에 있는 키에 접근해서 그 키의 value type을 선언해서 사용할 수 있다. 
*/

{
    const obj = {
        name: 'may'
    }
    obj.name; // 접근방법1. may 
    obj['name'];  // 접근방법2. may 

    //type도 인덱스를 기반으로 접근할 수 있다. 
    type Animal = {
        name: string;
        age: number;
        gender: 'male' | 'female';
    }

    type Name = Animal['name']; // 즉,string 타입 => Animal 타입의 name속성의 타입(sting)을 할당한다.
    const text: Name = 'hello';  // string만 할당할 수 있다. 

    type Gender = Animal['gender']; // 'male' | 'female' 
    type Keys = keyof Animal; // 'name' | 'age' | 'gender'
    const key: Keys = 'gender'; 

    type Person = {
        name: string;
        gender: Animal['gender']
    };
    const person: Person = {
        name: 'may',
        gender: 'male'
    }
}