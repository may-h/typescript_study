/**
 * 객체지향으로 커피머신 만들기! 
 * 
 * coffee machine class 
 * coffeeBeans properties
 * makeCoffee function 
 */

{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean; 
    }


    /**
     * Class? 
     * - 클래스는 관련된 속성과 함수들을 묶어서 어떤 모양의 데이터가 될 것인지 정의하는 것
     * - 정의된 클래스를 이용해서 실제로 데이터를 넣어서 오브젝트를 만들 수 있다. 
     * - 이때, 오브젝트마다 새로 만들어줘야하는 데이터가 있다면 멤버변수로 만들면 된다. 
     * - 클래스 레벨에서 함께 공유될 수 있는 것이라면 static을 사용한다. 
     * 
     * - 클래스 내부에 변수를 선언할 때는 const, let을 사용하지 않는다. 
     * - 함수도 function을 사용하지 않는다. 
     * - 클래스 내부에 있는 멤버 변수를 사용할 때는, 변수명 앞에 this.를 붙여준다. 
     * 
     * class level : 클래스와 연결이 되어 있기 때문에 오브젝트마다 만들어지거나 생성되지 않는다. (공통으로 사용할 수 있어 메모리를 효율적으로 사용할 수 있다.)
     *               this.으로 접근하지 않고 Class에 속해 있는 것이기 때문에 Class명으로 접근한다. 
     *               static을 붙여서 class level로 만든다. 
     */
    class CoffeeMaker {
        static BEANS_GRAMM_PER_SHOT: number = 7; // static을 붙이면, class level
        coffeeBeans: number = 0; // instance (object) level 

        /**
         *  constructor 
         *  클래스를 가지고 인스턴스를 만들 때 항상 호출되는 함수이다. 
         */
        constructor (coffeeBeans: number) {
            this.coffeeBeans = coffeeBeans;
        }
    
        makeCoffee(shots: number): CoffeeCup {
            if(this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) { // static 변수는 클래스명으로 접근한다. 
                throw new Error('Not enough coffee beans!'); 
            }
    
            this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT; //사용한 만큼 커피콩을 줄여준다. 
            return {
                shots, 
                hasMilk: false,
            };
        }
    }

    const maker = new CoffeeMaker(32); //생성자를 만드는 함수. constructor() 호출  
    console.log(maker);
}