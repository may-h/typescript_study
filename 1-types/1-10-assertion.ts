{
    /**
     * 
     *  Type Assertions π© (νμ κ°μ)
     * 
     */

    function jsStrFunc(): any {
        return 'hello';
    }

    const result = jsStrFunc();
    console.log((result as string).length); //νμμ΄ λ€λ₯΄λλΌλ μλ¬λ₯Ό λ±μ§λ μμ§λ§, λ°λμ μ λ§ μ₯λ΄ν  μ μλ νμμΌλλ§ μ¬μ©ν΄μΌ νλ€. 
    console.log(<string>result.length);

    const wrong: any = 5;
    console.log((wrong as Array<number>).push(1)); // ERROR -> νλ‘μΈμ€ μ£½μ!!!π±


    function findNumbers(): number[] | undefined {
        return undefined; 
    }
    const numbers = findNumbers();
    //numbers.push(2); //ERROR π± : undefiedμΌ μλ μκΈ° λλ¬Έμ, μλ¬κ° λ°μνλ€. 
    numbers!.push(2); // λλ¬΄λλ¬΄ μ₯λ΄ν λλ '!'λ₯Ό λΆμ¬μ€λ€. 

    const button = document.querySelector('class')!; //μ₯λ΄ν  λ λ€μ '!'λ₯Ό λ£μ΄μ€λ€. 
    button.nodeValue; //ERROR : nullμΌ μ μμ. 
}