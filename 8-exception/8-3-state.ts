/**
 * 
 *  예상할 수 있는 에러의 상태를 타입으로 정의하여 사용하는 것이 좋다. 
 */

{
    type NetworkErrorState = {
        result: 'fail',
        reason: 'offline' | 'down' | 'timeout';
    }

    type SuccessState = {
        result: 'success';
    }

    type ResultState = SuccessState | NetworkErrorState; 


    class NetworkClinet {
        tryConnect(): ResultState {
            return {result: 'fail', reason: 'offline'};
        }
    }
    
    class UserService {
        constructor(private clinet: NetworkClinet) {}
    
        login() {
            this.clinet.tryConnect(); 
            // login logic...
        }
    }
    
    class App {
        constructor(private userService: UserService) {}
        run() {
            try { // error handling은 의미 있는 처리를 해줄 수 있는 곳에서 작성해주는 것이 좋다. 
                this.userService.login();
            } catch (error) {
                // show dialog to user 
            }
        }
    }
    
    const clinet = new NetworkClinet();
    const service = new UserService(clinet);
    const app = new App(service);
    app.run()
}