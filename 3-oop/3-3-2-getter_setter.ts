    /**
     *  Setter / Getter 
     *  멤버 변수처럼 사용이 가능하지만, 어떠한 계산을 해야할 때 더 유용하게 쓸 수 있다. 
     * 
     * 
     */

     class User {
        // private firstName: string; 
        // private lastName: string; 
        
        // 호출 시점에 멤버변수에 접근함으로 변경된 이름을 넘겨준다. 
        // get을 선언함으로써 함수가 아니라 멤버변수에 접근 가능하다. 
        get fullName(): string {
            return `${this.firstName} ${this.lastName}`
        }

        private internalAge = 4; 
        get age(): number {
            return this.internalAge; 
        }
        set age(num: number) {
            if(num < 0) { //유효성 검사도 가능. 
                this.internalAge = num;
            }
        }

        //파라미터에 private, public, protected를 써주면 알아서 멤버변수로 선언해준다. 
        constructor(private firstName: string, private lastName: string) { 
            // this.firstName = firstName;
            // this.lastName = lastName;
            // this.fullName = `${firstName} ${lastName}`;
        }
    }

    const user = new User('May', 'Han');
    console.log(user.fullName);
    // user.firstName = 'Meseon';
    // get은 함수가 아니기 때문에 ()사용하지 않고 호출이 가능하다. 
    console.log(user.fullName); //getter가 없으면, fullName이 업데이트 되지 않기 때문에 'May Han'이 출력됨. 