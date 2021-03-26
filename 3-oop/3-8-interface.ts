/**
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

    constructor(
      coffeeBeans: number,
      private milk: MilkFother,
      private sugar: SugarProvider
    ) {
      this.coffeeBeans = coffeeBeans;
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
      const coffee = this.extract(shots);
      const sugarAdded = this.sugar.addSugar(coffee);
      return this.milk.makeMilk(sugarAdded);
    }
  }

  interface MilkFother {
    makeMilk(cup: CoffeeCup): CoffeeCup;
  }

  interface SugarProvider {
    addSugar(cup: CoffeeCup): CoffeeCup;
  }

  // 각각의 기능별로 클래스를 분리하여 생성함으로써 필요한 곳에서 가져다 쓰는 것이 컴포지션한 것이다.
  // 싸구려 우유 거품기
  class CheapMilkSteamer implements MilkFother {
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

  // 비싼 우유 거품기
  class FancyMilkSteamer implements MilkFother {
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

  // 더 비싼 우유 거품기
  class ColdMilkSteamer implements MilkFother {
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

  class NoMilk implements MilkFother {
      makeMilk(cup: CoffeeCup): CoffeeCup {
          return cup
      }
  }

  // 설탕 제조기
  class AutomaticSugarMixer implements SugarProvider {
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

  // 설탕 제조기
  class SugarMixer implements SugarProvider {
    private getSugar() {
      console.log("Getting some sugar from jar !!!");
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

  class NoSugar implements SugarProvider {
      addSugar(cup: CoffeeCup): CoffeeCup {
          return cup;
      }
  }

  // Milk
  const cheapMilkMaker = new CheapMilkSteamer();
  const facyMilkMaker = new FancyMilkSteamer();
  const coldMilkMaker = new ColdMilkSteamer();
  const noMilk = new NoMilk(); 

  // Sugar
  const candySugar = new AutomaticSugarMixer();
  const sugar = new SugarMixer();
  const noSugar = new NoSugar();

  // decoupling
  const sweetCandyMachine = new CoffeeMachine(12, noMilk, candySugar); //캔디 사탕 첨가
  const sweetMachine = new CoffeeMachine(12, noMilk, sugar); // 비싼 설탕 첨가 -> 인자로 넘어간 설탕 제조기에 따라서 다른 커피를 얻을 수 있다.

  const latteeMachine = new CoffeeMachine(12, cheapMilkMaker, noSugar);
  const coldLatteeMachine = new CoffeeMachine(12, coldMilkMaker, noSugar);
  const sweetLatteeMachine = new CoffeeMachine(
    12,
    cheapMilkMaker,
    candySugar
  );
}
