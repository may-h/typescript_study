/**
 *  Encapsulation (캡슐화, 정보은닉)
 *  : 외부에서 마음대로 설정하면 안되는 속성을 보호하자! 
 *  
 *  * 클래스 디자인 포인트 : 클래스를 만들 떄 외부에서 접근할 수 있는 것은 무엇인지, 내부적으로만 가지고 있어야하는 데이터는 무엇인지 결정하여 클래스를 디자인한느 것이 중요! 
 */

 {
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean; 
    }

    /**
     * public     : 외부 공개 (default)
     * private    : 외부에서 접근 불가 
     * protected  : 상속할 떄 외부에서 접근할 수 없으나, 자식 클래스에서만 접근 가능하다. 
     * 다양한 레벨의 정보를 은닉할 수 있다. 
     */

    class CoffeeMaker {
        // 만약 외부에서 BEANS_GRAMM_PER_SHOT이 얼마인지 보여지지 않게 만들려면, public 대신 private을 써준다. 
        private static BEANS_GRAMM_PER_SHOT: number = 7; 
        private coffeeBeans: number = 0;  

        private constructor (coffeeBeans: number) { 
            this.coffeeBeans = coffeeBeans;
        }

        //constructor를 바로 사용하지 않고, makeMachine() 함수로 커피머신 인스턴스를 생성하는 방법. 
        static makeMachine(coffeeBeans: number): CoffeeMaker { 
            return new CoffeeMaker(coffeeBeans); 
        }

        // 외부에서 직접적으로 변경하는게 아니라, 함수를 통해 Beans를 채워준다. 
        fillCoffeeBeans(beans: number) {
            if(beans < 0) { //전달받는 인자가 유효한지 아닌지 검사함으로써 안정성을 높혀서 코딩할 수 있다. 
                throw new Error('value for beans should be greater than 0');
            }
            this.coffeeBeans += beans; //커피콩 채워주기. 

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

    // const maker = new CoffeeMaker(32); //constructor가 private이라 생성 불가 
    const maker = CoffeeMaker.makeMachine(32); 

    // maker.coffeeBeans = -31; // 접근자를 통해서 쉽게 coffeeBeans의 개수를 수정할 수 있다. 만약 invalid(-)값이 들어가게 되면? -> 캡슐화가 필요한 이유
    maker.fillCoffeeBeans(40);

    // CoffeeMaker.BEANS_GRAMM_PER_SHOT; //레벨이 public이면 보이고, private이면 접근 불가.    
}