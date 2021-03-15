{
  /**
   * Print Loading State
   */
  type LoadingState = {
    state: 'loading';
  };

  type SuccessState = {
    state: 'success';
    response: {
      body: string;
    };
  };

  type FailState = {
    state: 'fail';
    reason: string;
  };

  // union type 
  type ResourceLoadState = LoadingState | SuccessState | FailState;

  // state라는 공통 프로퍼티를 사용하여 함수를 작성한다. 
  const printLoginState = (loginState: ResourceLoadState): void => {
    switch(loginState.state) {
      case "loading": console.log(`👀 ${loginState.state}...`); break;
      case "success": console.log(`😃 ${loginState.response.body}`); break;
      case "fail": console.log(`😱 ${loginState.reason}`); break;
      default: throw new Error('unknown State Type');
    }
  }

  printLoginState({ state: 'loading' }); // 👀 loading...
  printLoginState({ state: 'success', response: { body: 'loaded' } }); // 😃 loaded
  printLoginState({ state: 'fail', reason: 'no network' }); // 😱 no network
}
