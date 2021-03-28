/**
 * Constrains 
 * 
 */

interface Employee {
    pay(): void; 
}

class FullTimeEmployee implements Employee {
    pay() {
        console.log('full time!!');
    }

    workFullTime() {

    }
}

class PartTimeEmployee implements Employee {
    pay() {
        console.log('part time!!');
    }

    workPartTime() {

    }
}

// 💩 자동으로 월급을 지불하는 함수 (유용해보이지만 똥!)
// 세부적인 타입을 인자로 받아서 정말 추상적인 타입으로 다시 리턴하는 함수는 💩이다! -> 제네릭을 사용하자! 
function payBad(employee: Employee): Employee {
    employee.pay();
    return employee; // Fulltime이었는지 PartTime인지 정보를 잃어버리고 Employee로 반환해버린다..
}

// 아무타입인 <T>를 넣어주면, pay() 함수가 있는지 알 수 없다. 
// 제네릭에 조건(extends)을 추가해줘야지 pay()를 사용할 수 있다. 
function pay<T extends Employee>(employee: T): T {
    employee.pay();
    return employee;
}

const may = new FullTimeEmployee();
const bob = new PartTimeEmployee();
may.workFullTime();
bob.workPartTime();

const mayAfterPay = payBad(may);
const bobAfterPay = payBad(bob);
// mayAfterPay.workFullTime(); // Full Time 정보를 잃어버림 ㅠㅠ 




// Generic 조건 예제 
const obj = {
    name: 'may',
    age: 20
}

const obj2 = {
    animal: '🐩'
}

// keyof Obj = Obj 안에 들어있는 keys중 하나 
// T[K] = Obj <T>에 있는 속정 Key를 반환한당. 
function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

console.log(getValue(obj, 'name'));
console.log(getValue(obj, 'age'));
console.log(getValue(obj2, 'animal'));
// console.log(getValue(obj2, 'score')); //score은 없는 key이기 때문에 에러 
