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

// ๐ฉ ์๋์ผ๋ก ์๊ธ์ ์ง๋ถํ๋ ํจ์ (์ ์ฉํด๋ณด์ด์ง๋ง ๋ฅ!)
// ์ธ๋ถ์ ์ธ ํ์์ ์ธ์๋ก ๋ฐ์์ ์ ๋ง ์ถ์์ ์ธ ํ์์ผ๋ก ๋ค์ ๋ฆฌํดํ๋ ํจ์๋ ๐ฉ์ด๋ค! -> ์ ๋ค๋ฆญ์ ์ฌ์ฉํ์! 
function payBad(employee: Employee): Employee {
    employee.pay();
    return employee; // Fulltime์ด์๋์ง PartTime์ธ์ง ์ ๋ณด๋ฅผ ์์ด๋ฒ๋ฆฌ๊ณ  Employee๋ก ๋ฐํํด๋ฒ๋ฆฐ๋ค..
}

// ์๋ฌดํ์์ธ <T>๋ฅผ ๋ฃ์ด์ฃผ๋ฉด, pay() ํจ์๊ฐ ์๋์ง ์ ์ ์๋ค. 
// ์ ๋ค๋ฆญ์ ์กฐ๊ฑด(extends)์ ์ถ๊ฐํด์ค์ผ์ง pay()๋ฅผ ์ฌ์ฉํ  ์ ์๋ค. 
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
// mayAfterPay.workFullTime(); // Full Time ์ ๋ณด๋ฅผ ์์ด๋ฒ๋ฆผ ใ ใ  




// Generic ์กฐ๊ฑด ์์  
const obj = {
    name: 'may',
    age: 20
}

const obj2 = {
    animal: '๐ฉ'
}

// keyof Obj = Obj ์์ ๋ค์ด์๋ keys์ค ํ๋ 
// T[K] = Obj <T>์ ์๋ ์์  Key๋ฅผ ๋ฐํํ๋น. 
function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

console.log(getValue(obj, 'name'));
console.log(getValue(obj, 'age'));
console.log(getValue(obj2, 'animal'));
// console.log(getValue(obj2, 'score')); //score์ ์๋ key์ด๊ธฐ ๋๋ฌธ์ ์๋ฌ 
