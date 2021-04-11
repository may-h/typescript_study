/**
 * 
 * this ? 
 * 자바스크립트에서 this랄 누가 부르느냐에 따라 변경될 수 있음으로 
 * arrow function을 사용하거나 bind를 해줘야 한다. 
 */


console.log(this);  //global에서 this는 'Window' 객체다.(브라우저 환경) 

function simpleFunc() {
    console.log(this);
}

window.simpleFunc(); // global = 'Window' 객체가 생략되어 있음으로 window객체가 호출한 것. 

class Counter {
    count = 0; 
    // increase = () => {} 에러우함수로 선언해주면 this가 Counter 인것을 유지한다. (바인드 사용하지 않아도 됨) 
    increase = function() {
        console.log(this);
    };
}

const counter = new Counter();
counter.increase(); // Counter -> counter가 호출했기 때문에. 


/**
 * Tip 💡
 * 변수(const, let 선언)는 function과 다르게 global object(window object)에 선언되지 않는다. 
 *  window.caller는 없음. const이기 때문에 window에 선언되어 있지 않음. 
 */
const caller = counter.increase;
caller(); //undefined


class Bob {

}
const bob = new Bob();
bob.run = counter.increase;
bob.run(); // Bob -> bob이 increase를 호출했기 때문에 this 는 Bob이 된다...다른 곳으로 할당하는 순간 정보를 잃어버림 ㅠㅠ

// 정보를 잃어버리지 않으려면? 
// 1. 할당할 때 binding을 해줘야함. 
const caller_bind = counter.increase.bind(counter);
caller_bind(); // Counter 

// 2. 선언할 때 function() 대신 arrow function을 사용해주면 됨!! 