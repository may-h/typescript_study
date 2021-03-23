/**
 *  Abstraction (추상화)
 *  : 외부에서 클래스를 바라봤을 떄, 인터페이스가 너무 복잡해 어떤 걸 이용할지 모를 때!
 *    추상화를 통해서 정말 필요한 인터페이스(메서드)만 노출시켜 사용하기 쉽게 만들어 주는 것! 
 * 
 *  1. 접근제어자(캡슐화)를 통한 추상화. 
 *  2. 인터페이스를 통한 추상화.  
 */

 {
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean; 
    }

    /**
     * Interface 
     *  : 계약서 
     *  - 인터페이스명 앞에 I에 붙이거나,실제 구현하는 클래스명 뒤에 Imple를 붙여주거나 한다.  
     *  - 인터페이스를 구현하는 클래스는 반드시 인터페이스의 모든 함수를 구현하여야 한다. 
     */

    interface CoffeeMaker {
        makeCoffee(shots: number): CoffeeCup; 
    }

    interface CommercialCoffeeMaker {
        makeCoffee(shots: number): CoffeeCup; 
        fillCoffeeBeans(beans: number): void; 
        clean(): void; 
    }

    class CoffeeMachine implements CoffeeMaker, CommercialCoffeeMaker { //CoffeeMachine은 CoffeeMaker 인터페이스를 구현하는 것 
        // 만약 외부에서 BEANS_GRAMM_PER_SHOT이 얼마인지 보여지지 않게 만들려면, public 대신 private을 써준다. 
        private static BEANS_GRAMM_PER_SHOT: number = 7; 
        private coffeeBeans: number = 0;  

        private constructor (coffeeBeans: number) { 
            this.coffeeBeans = coffeeBeans;
        }

        //constructor를 바로 사용하지 않고, makeMachine() 함수로 커피머신 인스턴스를 생성하는 방법. 
        static makeMachine(coffeeBeans: number): CoffeeMachine { 
            return new CoffeeMachine(coffeeBeans); 
        }

        // 외부에서 직접적으로 변경하는게 아니라, 함수를 통해 Beans를 채워준다. 
        fillCoffeeBeans(beans: number) {
            if(beans < 0) { //전달받는 인자가 유효한지 아닌지 검사함으로써 안정성을 높혀서 코딩할 수 있다. 
                throw new Error('value for beans should be greater than 0');
            }
            this.coffeeBeans += beans; //커피콩 채워주기. 

        }
        
        clean() {
            console.log('cleaning the machine...✨')
        }


        //얼마나 많은 샷을 갈것인지. 
        private grindBeans(shots: number) {
            console.log(`grinding beans for ${shots}`);
            if(this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
                throw new Error('Not enough coffee beans!');
            }
            this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
        }

        private preHeat(): void {
            console.log('heaing up ...🔥');
        }

       private extract(shots: number): CoffeeCup {
            console.log(`Pulling ${shots} shots... ☕️`);
            return {
                shots, 
                hasMilk: false,
            }; 
        }

    
        makeCoffee(shots: number): CoffeeCup {

            this.grindBeans(shots); 
            this.preHeat(); 
            return this.extract(shots);

           /* if(this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) { // static 변수는 클래스명으로 접근한다. 
                throw new Error('Not enough coffee beans!'); 
            }
    
            this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT; //사용한 만큼 커피콩을 줄여준다. 
            return {
                shots, 
                hasMilk: false,
            }; */
            
        }
    }

    /*
    const maker: CoffeeMachine = CoffeeMachine.makeMachine(32);
    maker.fillCoffeeBeans(32);
    maker.makeCoffee(2); 
    
    const maker2: CommercialCoffeeMaker = CoffeeMachine.makeMachine(32);
    // maker2.fillCoffeeBeans(32); // 인터페이스에 정의된 함수만 사용할 수 있다.  
    maker2.fillCoffeeBeans(32);
    maker2.makeCoffee(2);
    maker2.clean();
    */


    class AmateurUser {
        constructor(private machine: CoffeeMaker) {}
        makeCoffee() {
            const coffee = this.machine.makeCoffee(2);
            console.log(coffee);
        }
    }

    class ProBarista {
        constructor(private machine: CommercialCoffeeMaker) {}
        makeCoffee() {
            const coffee = this.machine.makeCoffee(2);
            console.log(coffee);
            this.machine.fillCoffeeBeans(45);
            this.machine.clean();
        }
    }


    const maker: CoffeeMachine = CoffeeMachine.makeMachine(32); 
    const amateur = new AmateurUser(maker);
    amateur.makeCoffee();
    const pro = new ProBarista(maker); 
    pro.makeCoffee();


}