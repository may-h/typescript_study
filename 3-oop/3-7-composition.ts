/**
 * 상속의 문제점 (?)
 *  : 상속의 깊이가 길어질 수록 서로간의 관계가 점점 복잡해진다.
 *  : 타입스크립트에서는 한가지 이상의 부모클래스를 상속 받을 수 없다.
 * -> 이러한 상속의 문제점으로 Composition을 사용해야 한다!
 *
 *
 * * Composition
 *  필요한 것만 가져와서 조립하여 사용하는 것?
 *  코드의 재사용을 높여주는 아이. 
 *  Favor Composition over inheritance : 상속 대신 컴포지션을 더 선호하라!
 *  불필요한 상속 대신에 컴포지션을 이용해보자.
 *
 *  
 */

{
  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7;
    private coffeeBeans: number = 0;

    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMachine {
      return new CoffeeMachine(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error("value for beans should be greater than 0");
      }
      this.coffeeBeans += beans; //커피콩 채워주기.
    }

    clean() {
      console.log("cleaning the machine...✨");
    }

    //얼마나 많은 샷을 갈것인지.
    private grindBeans(shots: number) {
      console.log(`grinding beans for ${shots}`);
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
        throw new Error("Not enough coffee beans!");
      }
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
    }

    private preHeat(): void {
      console.log("heaing up ...🔥");
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
    }
  }


  // 각각의 기능별로 클래스를 분리하여 생성함으로써 필요한 곳에서 가져다 쓰는 것이 컴포지션한 것이다.  
  // 싸구려 우유 거품기
  class CheapMilkSteamer {
    private steamMilk(): void {
      // 아주 복잡한 코드라면?
      console.log("Steaming some milk... 🥛");
    }

    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return {
        ...cup,
        hasMilk: true,
      };
    }
  }

  // 설탕 제조기
  class AutomaticSugarMixer {
    private getSugar() {
      console.log("Getting some sugar from candy 🍭");
      return true;
    }

    addSugar(cup: CoffeeCup): CoffeeCup {
      const sugar = this.getSugar();
      return {
        ...cup,
        hasSugar: sugar,
      };
    }
  }

  class CaffeLatteMachine extends CoffeeMachine {
    // Dependency Injection : 필요한 아이들를 외부에서 주입 받아 사용 하는 것 (milkFother)
    constructor(
      beans: number,
      public readonly serialNumber: string,
      private milkFother: CheapMilkSteamer //private을 사용하여 클래스 맴버 변수로 만든다.
    ) {
      super(beans);
    }

    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      //   this.steamMilk();
      //   return { ...coffee, hasMilk: true };
      return this.milkFother.makeMilk(coffee);
    }
  }

  class SweetCoffeeMaker extends CoffeeMachine {
    constructor(
      private beans: number,
      private sugarMixer: AutomaticSugarMixer
    ) {
      super(beans);
    }

    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      //   this.getSugar();
      //   return { ...coffee, hasSugar: true };
      return this.sugarMixer.addSugar(coffee);
    }
  }

  class SweetCoffeLatteMachine extends CoffeeMachine {
      constructor(private beans: number, private milkFother: CheapMilkSteamer, private sugar: AutomaticSugarMixer) {
          super(beans);
      }

      makeCoffee(shots: number): CoffeeCup {
          const coffee = this.makeCoffee(shots);
          const sweetCoffee = this.sugar.addSugar(coffee);
          return this.milkFother.makeMilk(sweetCoffee);
      }
  }

}
