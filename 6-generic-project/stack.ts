{
/**
 *  모든 타입을 담을 수 있는 Stack 만들기 
 * 
 */
interface Stack<T> {
    readonly size: number; 
    push(vale: T): void;
    pop(): T;
}


type StackNode<T> = {
    readonly value: T; 
    readonly next?: StackNode<T>; 
}

class StackImpl<T> implements Stack<T> {
    private _size: number = 0; 
    private head?: StackNode<T>;

    get size() { 
        return this._size;
    } 
    push(value: T): void {
        const node = { value, next: this.head };
        this.head = node; 
        this._size++; 
        
    }
    pop(): T { 
        if(this.head == null) {
            throw new Error('Stack is empty');
        }
        const node = this.head; 
        this.head = node.next; 
        this._size--;
        return node.value;
    }
}

// string 타입의 스택 
const stack = new StackImpl<string>();
stack.push('may 1');
stack.push('bh 2');
stack.push('ms 3'); 
while(stack.size !== 0) {
    console.log(stack.pop());
}

// number 타입의 스택 
const stack2 = new StackImpl<number>();
stack2.push(1);
stack2.push(2);
stack2.push(3); 
while(stack.size !== 0) {
    console.log(stack.pop());
}
}