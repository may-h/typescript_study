{

    /**
     *  Discriminated Unions 
     *  - 고급 타입 
     *  - 문자열 리터럴 타입, Union 타입, 타입 가드 및 타입 Alias를 결합하여 Tagged union이라는 고급 패턴을 빌드 할 수 있다. 
     *  1. 일반적인 문자열 리터럴 프로퍼티가 있는 타입 - Discriminated
     *  2. 타입의 합집합을 취하는 타입 Alias - Union
     *  3. 공통 프로퍼티의 타입 가드.
     * 
     *  어떤 케이스든 공통된 프로퍼티스를 갖고 있음으로서 구분하기 쉽게 만드는 것이 포인트! 
     */


    // 1-5-unions 로그인 함수 예제를 변환해보자! 
    // function login -> success, fail 
    type SuccessState = {
        result: 'success';
        response: {
            body: string;
        };
    };
    type FailState = {
        result: 'faile';
        reason: string;
    };
    type LoginState = SuccessState | FailState;

    const login = (id: string, password: string): LoginState => { //네트워크 통신을 비동기로 하니까 Promise<LoginState>를 쓰는게 맞다. 
        return {
            result: 'success',
            response: {
                body: 'logged in!',
            }
        }
    };


    // printLoginState (state: LoginState)
    // success -> body : 🎉
    // fail -> reason : 😭
    const printLoginState = (state: LoginState) => {
        // if('response' in state) { // 👎🏻 권장하는 방식은 아님. 
        if(state.result === 'success') { //👍 result는 둘다 갖고 있는 속성이기 때문에 사용 가능하다. 
            console.log(`🎉 ${state.response}`);
        } else {
            console.log( `😭 ${state.reason}`);
        }
    }
}