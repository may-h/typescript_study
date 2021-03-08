{
    //JavaScript  💩 
    function jsAdd(num1, num2) {
        return num1 + num2;
    }

    //TypeScript ✨
    function add(num1: number, num2: number): number {
        return num1 + num2; 
    }


    //JavaScript  💩  
    function jsFetchNum(id) {
        //code ...
        //code ...
        //code ...
        return new Promise((reslove, reject) => {
            reslove(100);
        });
    }

    //TypeScript ✨    
    function fetchNum(id: string): Promise<number> {
        //code ...
        //code ...
        //code ...
        return new Promise((reslove, reject) => {
            reslove(100);
        });
    }

    // JavaScript ✨ => TypeScript
    // Optional parameter : 인자를 전달해도 되고 안해도 되고, 타입이 string이거나 아니어도 된다. 
    function printName(firstName: string, lastName?: string) {
        console.log(firstName);
        console.log(lastName); // 전달하지 않으면 undefied 
    }

    printName('May', 'Han');
    printName('May'); //?가 없으면 정해진 인자 수, 타입에 맞추지 않으면 에러 발생. 
    printName('May', undefined);


    //Default parameter 
    function printMessage(message: string = 'default message') {
        console.log(message); //전달하지 않으면 default (Optional parameter와 차이)
    }
    printMessage();


    //Rest parameter
    function addNumber(...numbers: number[]): number {
        return numbers.reduce((a, b) => a + b);
    }


    console.log(addNumber(1, 2)); 
    console.log(addNumber(1, 2, 3, 4));
    console.log(addNumber(1, 2, 3, 4, 5, 0));



}