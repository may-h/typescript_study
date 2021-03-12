{

    /**
     * Type Aliases
     * 새로운 타입을 내가 정의할 수 있다. 
     * 원시 타입 뿐만 아니라 Object 타입도 내가 원하는 대로 만들 수 있다. 
     */

    type Text = string; 
    const name: string = 'may';
    const nickname: Text = 'may';

    type Num = number;
    // Object도 타입으로 만들 수 있다. 
    type Student = {
        name: string; 
        age: number;
    }
    // const student: Student = {
    //     animal: 'dog', 
    //     age: 10
    // }; //ERROR 발생 

    const student2: Student = {
        name: 'may', 
        age: 20
    };

    /**
     * String Literal Types
     * 실제 값 자체를 타입으로 지정할 수 있다. 
     */

    type Name = 'name';
    let mayName: Name; 
    // mayName = 'may'; //ERROR -> Name 타입에는 반드시 'name' 값만 할당 할 수 있다. 
    type JSON = 'json';
    let json: JSON = 'json'; 


}