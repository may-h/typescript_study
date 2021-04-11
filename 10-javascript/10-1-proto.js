const x = {};
const y = {};

console.log(x); // 모든 object는 __proto__ Object를 갖고 있다. 
console.log(y);
console.log(x.toString());
console.log(x.__proto__ === y.__proto__);

const array = []; 
console.log(array); // 빈배열이지만 Array를 상속받고 있고 Array는 __proto__ Object를 상속받는다. 

function CoffeeMachine(beans) {
    this.beans = beans; 

    // Instance member level (만들어지는 인스턴스마다 갖고있다.)
    // this.makeCoffee = (shots) => {
    //     console.log('...making...')
    // };
}

// 만약 프로토의 하나의 멤버를 사용한다면?
// Prototype member level
CoffeeMachine.prototype.makeCoffee = (shots) => {
    console.log('making...')
}

const machine1 = new CoffeeMachine(10); 
const machine2 = new CoffeeMachine(20);

console.log(machine1);
console.log(machine2);

function LatteeMachine(milk) {
    this.milk = milk;
}

// LatteeMachine < CoffeeMachine < Object 순으로 상속
LatteeMachine.prototype = Object.create(CoffeeMachine.prototype);

const latteeMachine = new LatteeMachine(123); 
console.log(latteeMachine);
latteeMachine.makeCoffee(); // CoffeeMachine을 상속했기 때문에 makeCoffee를 사용할 수 있다. 