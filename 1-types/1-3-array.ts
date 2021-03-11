{
    // Array : 한가지 타입
    // 배열을 선언하는 방법 2가지 
    const fruits: string[] = ['apple', 'banana'];
    const socres: Array<number> = [1, 2, 3];

    // readonly -> 데이터를 변경할 수 없다. (객체의 불변성을 유지하는 것)
    // readonly를 사용할 때는 string[] 선언 방식만 가능하다! 
    function printArray(fruits: readonly string[]) {
        // fruits.push() -> ERROR 발생
    }


    // Tuple  
    // 가독성이 떨어지기 때문에 👎🏻 권장하지 않음. 
    // -> interface, type alias, class로 대체해서 사용하는 것이 좋음. 
    //서로 다른 타입을 가질 수 있는 배열 
    let student: [string, number]; 
    student = ['name', 123];
    student[0] // name 
    student[1] // 123

    //튜플을 사용하는 예시 (React의 useState)
    const [name, age] = student; 

}      