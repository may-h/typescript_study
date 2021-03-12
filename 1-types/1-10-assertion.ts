{
    /**
     * 
     *  Type Assertions 💩 (타입 강요)
     * 
     */

    function jsStrFunc(): any {
        return 'hello';
    }

    const result = jsStrFunc();
    console.log((result as string).length); //타입이 다르더라도 에러를 뱉지는 않지만, 반드시 정말 장담할 수 있는 타입일때만 사용해야 한다. 
    console.log(<string>result.length);

    const wrong: any = 5;
    console.log((wrong as Array<number>).push(1)); // ERROR -> 프로세스 죽음!!!😱


    function findNumbers(): number[] | undefined {
        return undefined; 
    }
    const numbers = findNumbers();
    //numbers.push(2); //ERROR 😱 : undefied일 수도 있기 때문에, 에러가 발생한다. 
    numbers!.push(2); // 너무너무 장담할때는 '!'를 붙여준다. 

    const button = document.querySelector('class')!; //장담할 때 뒤에 '!'를 넣어준다. 
    button.nodeValue; //ERROR : null일 수 있음. 
}