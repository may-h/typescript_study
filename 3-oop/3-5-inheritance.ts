/**
 *  Inheritance (상속)
 * 
 */

 {
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean; 
    }


    interface CoffeeMaker {
        makeCoffee(shots: number): CoffeeCup; 
    }


    class CoffeeMachine implements CoffeeMaker { //CoffeeMachine은 CoffeeMaker 인터페이스를 구현하는 것 
        // 만약 외부에서 BEANS_GRAMM_PER_SHOT이 얼마인지 보여지지 않게 만들려면, public 대신 private을 써준다. 
        private static BEANS_GRAMM_PER_SHOT: number = 7; 
        private coffeeBeans: number = 0;  

        constructor (coffeeBeans: number) { 
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

    class CaffeLatteMachine extends CoffeeMachine {
        constructor(beans: number, public readonly serialNumber: string) {
            super(beans); //자식의 constructor에는 반드시 어미의 constructor를 불러와야한다. super()사용 
        }
    
        private steamMilk(): void {
            console.log('Steaming some milk... 🥛');
        }

        makeCoffee(shots: number): CoffeeCup {
            const coffee = super.makeCoffee(shots);
            this.steamMilk();
            return {...coffee, hasMilk: true};
        } 
    }

    const machine = new CoffeeMachine(23);
    const latteeMachine = new CaffeLatteMachine(23, 'SSA1');
    const coffee = latteeMachine.makeCoffee(2);
    console.log(coffee)

}