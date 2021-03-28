interface Stack2 {
    readonly size;
    pop(): string; 
    push(value: string): void;
}

type StackNode2 = {
    value: string;
    next?: StackNode2;
}

class StackImpl2 implements Stack2 {
    private _size: number = 0; 
    private head?: StackNode2;

    get size() {
        return this._size;
    }

    pop(): string {
        if(this.head == null) {
            throw new Error('stack is empty');
        }
        const current_node = this.head; 
        this.head = current_node.next;
        this._size--;
        return current_node.value;
    }

    push(value: string): void {
        const node = {value, next: this.head};
        this.head = node; 
        this._size++; 
    }
} 

const stack2 = new StackImpl2();
stack2.push('may 1');
stack2.push('brian 2');
stack2.push('Steve 3'); 
while(stack2.size !== 0) {
    console.log(stack2.pop());
}