// 절차지향으로 커피기계 만들기 
{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean; 
    }
    const BEANS_GRAMM_PER_SHOT: number = 7;
    let coffeeBeans: number = 30; 

    function makeCoffee(shots: number): CoffeeCup {
        if(coffeeBeans < shots * BEANS_GRAMM_PER_SHOT) {
            throw new Error('Not enough coffee beans!'); 
        }

        coffeeBeans -= shots * BEANS_GRAMM_PER_SHOT; //사용한 만큼 커피콩을 줄여준다. 
        return {
            shots, 
            hasMilk: false,
        }
    }

    const coffee = makeCoffee(2);
    console.log(coffee);
}