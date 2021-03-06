{
    //JavaScript  ๐ฉ 
    function jsAdd(num1, num2) {
        return num1 + num2;
    }

    //TypeScript โจ
    function add(num1: number, num2: number): number {
        return num1 + num2; 
    }


    //JavaScript  ๐ฉ  
    function jsFetchNum(id) {
        //code ...
        //code ...
        //code ...
        return new Promise((reslove, reject) => {
            reslove(100);
        });
    }

    //TypeScript โจ    
    function fetchNum(id: string): Promise<number> {
        //code ...
        //code ...
        //code ...
        return new Promise((reslove, reject) => {
            reslove(100);
        });
    }

    // JavaScript โจ => TypeScript
    // Optional parameter : ์ธ์๋ฅผ ์ ๋ฌํด๋ ๋๊ณ  ์ํด๋ ๋๊ณ , ํ์์ด string์ด๊ฑฐ๋ ์๋์ด๋ ๋๋ค. 
    function printName(firstName: string, lastName?: string) {
        console.log(firstName);
        console.log(lastName); // ์ ๋ฌํ์ง ์์ผ๋ฉด undefied 
    }

    printName('May', 'Han');
    printName('May'); //?๊ฐ ์์ผ๋ฉด ์ ํด์ง ์ธ์ ์, ํ์์ ๋ง์ถ์ง ์์ผ๋ฉด ์๋ฌ ๋ฐ์. 
    printName('May', undefined);


    //Default parameter 
    function printMessage(message: string = 'default message') {
        console.log(message); //์ ๋ฌํ์ง ์์ผ๋ฉด default (Optional parameter์ ์ฐจ์ด)
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