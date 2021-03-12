{
    /**
     * Union Types: OR ✨
     * 발생할 수 있는 모든 케이스 중에 하나만 할당 할 수 있을 때 사용! 
     */

    type Direction = 'left' | 'right' | 'up' | 'down';
    function move(direction: Direction) {
        console.log(direction)
    }

    // move('below'); //ERROR 
    move('down'); // Direction 중에 하나를 사용 
    
    type TileSize = 8 | 16 | 32;  //정의된 것 중에 하나만 할당 할 수 있다. 
    const tile: TileSize = 16;
    

    // Union Type 사용 예제 
    // 로그인에 성공했을 때 success, 실패했을 때 fail 
    type SuccessState = {
        response: {
            body: string;
        }
    }
    type FailState = {
        reason: string;
    }
    type LoginState = SuccessState | FailState;

    const login = (id: string, password: string): LoginState => { //네트워크 통신을 비동기로 하니까 Promise<LoginState>를 쓰는게 맞다. 
        return {
            response: {
                body: 'logged in!',
            }
        }
    };


    // printLoginState (state: LoginState)
    // success -> body : 🎉
    // fail -> reason : 😭
    const printLoginState = (state: LoginState) => {
        if('response' in state) { // 👎🏻 권장하는 방식은 아님. 권장 방식은 1-6-discriminated 참조 
            console.log(`🎉 ${state.response}`);
        } else {
            console.log( `😭 ${state.reason}`);
        }
    }



}