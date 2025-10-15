class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.isEmpty()) return null;
        return this.items.pop();
    }

    peek() {
        if (this.isEmpty()) return null;
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }
}

function decodeString(s) {
    let numStack = new Stack();  
    let strStack = new Stack();  
    let currStr = "";
    let currNum = 0;

    for (let ch of s) {
        if (!isNaN(ch)) {
            currNum = currNum * 10 + Number(ch);
        } 
        else if (ch === "[") {
            numStack.push(currNum);
            strStack.push(currStr);
            currNum = 0;
            currStr = "";
        } 
        else if (ch === "]") {
            let repeatTimes = numStack.pop();
            let prevStr = strStack.pop();
            currStr = prevStr + currStr.repeat(repeatTimes);
        } 
        else {
            currStr += ch;
        }
    }

    return currStr;
}


console.log(decodeString("3[a]2[bc]"));     
console.log(decodeString("3[a2[c]]"));      
console.log(decodeString("2[abc]3[cd]ef"));