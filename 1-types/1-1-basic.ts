{
/* JavaScript 
    // old : var -> 호이스팅 등 여러 문제로 이제 사용하지 않는다.  
    var age = 5;
    age = 1; 

    // let : 재할당이 가능하다. (ES6에 도입)
    let name = 'hello';
    name = 'hi';
    
    // const : 재할당이 불가하다. 
    const age = 5;
    age = 2; //ERROR 
*/


    /**
     * JavaScript 
     * Primitive(원시타입) : numver, string, boolean, bigint, symbol, null, undefied 
     * Object(오브젝트 타입): function, array ....
     */

     //number 
     const num: number = -6;

     //string 
     const str: string = 'hello';

     //boolean 
     const boal: boolean = true; 

    // undefined : 비었는지 아닌지 아직 결정되지 않은 상태. 
    let name: undefined; //Never Used ALONE 💩 : 타입에 undefied만 단독으로 사용하지 않는다! 
    let age: number | undefined; //Optional 타입 선언. 
    age = undefined;
    age = 1;
    function find():number | undefined {
        return 1; //return undefied;
    }
 
    // null : 비었다고 결정되어 있는 상태 
    let person: null; //Never Used ALONE 💩
    let person2: string | null; //보통은 null보다 undefied를 써준다. 


    // unknown 💩 : 어떤 타입인지 모르는 상태..
    let notSure: unknown = 0; 
    notSure = 'hi';
    notSure = true 

    // any 💩 : 어떤 것이든 담을 수 있는 변수.  
    let anything: any = 0;
    anything = 'hello'; 

    // void : 함수에서 어떤 것도 반환하지 않을 때 사용하는 타입.(변수에서는 잘 사용하지 X)
    function print():void {
        console.log('hello'); 
    }
    let unusable: void = undefined; // 💩


    // never : 함수에서 절대절대 리턴할 일 없을 때 사용. 
    // function throwError(message: string): never {
        // throw new Error(message);
        // while(true) {}
    // }
    let neverEnding: never; // 💩


    //object : 원시타입을 제외한 모든 오브젝트 타입(=배열, 함수 등)
    let obj: object = []; // 💩 가능하면 더 디테일한 타입을 명시하는 것이 좋다.  
    function acceptSomeObject(obj: object){}
    acceptSomeObject({ name: 'may' });
    acceptSomeObject({ animal: 'dog'});

}