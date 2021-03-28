
// interface : stack의 API 규격을 정의한다. 
// stack을 사용하는 사람들이 내부가 어떤게 변경되었는지 몰라도 인터페이스만 보고 사용하기 쉽다. 
interface Stack {
    readonly size: number; //외부에서 size를 바꿀 수 없고 내부에서 정해지기 때문에 readonly를 붙여준다. 
    push(vale: string): void;
    pop(): string;
}

/* 연결리스트 
* 노드가 다음 노드를 가리키고 있다. 흐름이 하나 (단일 연결 리스트)
* 양방향일 경우 양방향 연결 리스트 
*/
// 단일 연결 리스트 노드 타입 선언
type StackNode = {
    readonly value: string; //불변성을 유지하기 위해 readonly사용
    readonly next?: StackNode; 
}

class StackImpl implements Stack {
    private _size: number = 0; //readonly면 내부에서도 변경이 불가하니 private 사용, 내부에서만 쓰이는 변수는 앞에 언더바(_)를 사용하여 명시해준다.
    private head?: StackNode;

    get size() { //외부에서 접근이 가능한 getter 사용 (외부에서는 읽기만 가능하게)
        return this._size;
    } 
    push(value: string): void {
        const node: StackNode = { value, next: this.head };
        this.head = node; //head는 새로 만든 노드를 가리키도록 한다. 
        this._size++; 
        
    }
    pop(): string { // null == undefied, null !== undefined 
        if(this.head == null) {
            throw new Error('Stack is empty');
        }
        const node = this.head; 
        this.head = node.next; 
        this._size--;
        return node.value;
    }
}

const stack = new StackImpl();
stack.push('may 1');
stack.push('brian 2');
stack.push('Steve 3'); 
while(stack.size !== 0) {
    console.log(stack.pop());
}