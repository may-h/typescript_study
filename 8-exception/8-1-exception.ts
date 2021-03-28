/**
 * * Exception 
 * : 예상하지 못한 에러가 발생하는 것을 말한다. 
 * 
 * * Error State 
 * : 코딩할 때 예상할 수 있는 에러를 말한다. 
 
 * 
 * Exception을 잘 처리하면, 안정성과 유지보수성을 높일 수 있다. 
 * 
 */

// Java: Exception 
// JavaScript: Error 
// const array = new Array(100000000000000000000); //runtime Error 발생 


// Error(Exception) Handling: try -> catch -> finally 
function readFile(fileName: string): string {
    // File이 없으면 에러 
    if(fileName === 'not exist!💩') {
        throw new Error(`file not exist! ${fileName}`);
    }
    return 'file contents 𝌞';
}

function closeFile(fileName: string) {
    console.log('finally !!!')
}


function run() {
    const fileName = 'goodfile';

    try {
        console.log(readFile(fileName));
    } catch (error) {
        console.log(`catched!!`);
        return; // return이 있어도 finally는 실행한다! 
    } finally {
        closeFile(fileName);
    }
}