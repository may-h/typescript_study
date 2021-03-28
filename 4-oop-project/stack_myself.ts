interface StackImpl {
    pop(): string;
    push(item: string): void;
    getStack(): string[]; 
    getSize(): number;
}

class Stack3 implements StackImpl {
    stack: string[];

    constructor() {
        this.stack = []
    }

    pop(): string {
        const last_item = this.stack[this.stack.length-1];
        this.stack = this.stack.slice(0, this.stack.length-1);
        return last_item;
    }

    push(item: string): void {
        this.stack.push(item);
    }

    getSize(): number {
        return this.stack.length;
    }

    getStack(): string[] {
        return this.stack;
    }
}


const s2 = new Stack3();
s.push('may');
s.push('bh');
console.log(s.getSize()); //2
console.log(s.getStack());
console.log(s.pop()); //bh
console.log(s.getSize()); //1
console.log(s.pop());
console.log(s.getStack());
