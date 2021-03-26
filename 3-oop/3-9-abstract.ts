/**
 *  Abstract class(추상)
 *  Abstract 클래스는 인스턴스를 생성 할 수 없다. 
 *  공통 기능을 구현할 수 있다. 이것을 구현하는 클래스마다 달라져야하는 기능이 있다면 abstract 메소드를 정의해줄 수 있다. 
 *  우리가 인터페이스에서 함수의 규격을 정해준 것 처럼, 추상 메소드는 어떤 인자를 받는지 어떤 메서드 이름을 가질건지 정의해줄 수 있다. 
 *  -> 더 안전하게 의도한대로 공통적인 기능을 구현할 수 있다. 
 * */

 {
    type CoffeeCup = {
        shots: number;
        hasMilk?: boolean; 
        hasSugar?: boolean;
    }


    interface CoffeeMaker {
        makeCoffee(shots: number): CoffeeCup; 
    }


    // abstract 클래스 - abstract 클래스의 인스턴스는 만들 수 없다. 
    // 만들어 지는 것이 아니라, 필요한 것을 정의해두는 것 
    abstract class CoffeeMachine implements CoffeeMaker { 
        private static BEANS_GRAMM_PER_SHOT: number = 7; 
        private coffeeBeans: number = 0;  

        constructor (coffeeBeans: number) { 
            this.coffeeBeans = coffeeBeans;
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

        // 자식 클래스마다 다르게 구현해야하기 때문에 private이 아닌 protect를 사용해준다. 
        // abstract에서 구현하지 않는다. 
       protected abstract extract(shots: number): CoffeeCup; 

    
        makeCoffee(shots: number): CoffeeCup {
            this.grindBeans(shots); 
            this.preHeat(); 
            return this.extract(shots);
        }
    }

    class CaffeLatteMachine extends CoffeeMachine {
        constructor(beans: number, public readonly serialNumber: string) {
            super(beans); //자식의 constructor에는 반드시 어미의 constructor를 불러와야한다. super()사용 
        }
    
        private steamMilk(): void {
            console.log('Steaming some milk... 🥛');
        }

        // 자식에서 추상 함수를 구현해준다. 
        protected extract(shots: number): CoffeeCup {
            this.steamMilk();
            return {
                shots,
                hasMilk: true
            }
        }
    }

    class SweetCoffeeMaker extends CoffeeMachine {
        // super를 호출하지 않아도, 추상 메소드를 사용해서 구현할 수 있다. 
        protected extract(shots: number): CoffeeCup {
            return {
                shots,
                hasSugar: true
            }
        }

    }

    // 다형성의 장점 
    const machines: CoffeeMaker[] = [
        new CaffeLatteMachine(16, 'A11'),
        new SweetCoffeeMaker(16),
        new CaffeLatteMachine(16, 'A11'),
        new SweetCoffeeMaker(16)
    ]; 

    machines.forEach(machine => {
        console.log('-------------------------');
        machine.makeCoffee(1);
    })

}