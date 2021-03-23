/**
 * 상속의 문제점 (?)
 *  : 상속의 깊이가 길어질 수록 서로간의 관계가 점점 복잡해진다. 
 *  : 타입스크립트에서는 한가지 이상의 부모클래스를 상속 받을 수 없다. 
 * -> 이러한 상속의 문제점으로 Composition을 사용해야 한다! 
 */

 {
    type CoffeeCup = {
        shots: number;
        hasMilk?: boolean; 
        hasSugar?: boolean;
    }


    interface CoffeeMaker {
        makeCoffee(shots: number): CoffeeCup; 
    }


    class CoffeeMachine implements CoffeeMaker { 
        private static BEANS_GRAMM_PER_SHOT: number = 7; 
        private coffeeBeans: number = 0;  

        constructor (coffeeBeans: number) { 
            this.coffeeBeans = coffeeBeans;
        }

        static makeMachine(coffeeBeans: number): CoffeeMachine { 
            return new CoffeeMachine(coffeeBeans); 
        }

        fillCoffeeBeans(beans: number) {
            if(beans < 0) { 
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
                hasMilk: false
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

    class SweetCoffeeMaker extends CoffeeMachine {
        
        constructor(beans: number) {
            super(beans);
        }

        makeCoffee(shots: number): CoffeeCup {
            const coffee = super.makeCoffee(shots);
            return {...coffee, hasSugar: true}
        } 

    }

    // 다형성의 장점 
    const machines = [
        new CoffeeMachine(16),
        new CaffeLatteMachine(16, 'A11'),
        new SweetCoffeeMaker(16),
        new CoffeeMachine(16),
        new CaffeLatteMachine(16, 'A11'),
        new SweetCoffeeMaker(16)
    ]; 

    machines.forEach(machine => {
        console.log('-------------------------');
        machine.makeCoffee(1);
    })
}