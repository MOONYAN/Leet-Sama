// https://leetcode.com/problems/valid-parentheses/
class Stack<T = any> {
    private list: T[] = [];
    private idx = -1;
    push(value: T) {
        this.list.push(value);
        this.idx++;
    }

    pop(): T | undefined {
        this.idx--;
        return this.list.pop();
    }

    peek(): T {
        return this.list[this.idx];
    }

    isEmpty(): boolean {
        return this.idx < 0;
    }
}

const matching: { [key: string]: string } = {
    ')': '(',
    ']': '[',
    '}': '{'
}

function isValid(s: string): boolean {
    let stack = new Stack<string>();
    for (let i = 0; i < s.length; i++) {
        let c = s[i];
        if (matching[c] === undefined) {
            stack.push(c);
            continue;
        }
        if (matching[c] === stack.peek()) {
            stack.pop();
        } else {
            return false;
        }        
    }
    return stack.isEmpty();
};