class Stack {
    constructor() {
        this.items = [];
    }
    push(element){
        this.items.push(element)

    }
    pop(){
        if(this.items.length === 0){
            return "Stack is empty"
        }
         return this.items.pop()
    }
    size(){
        return this.items.length;
    }
    isEmpty(){
        return this.items.length===0;
    }
    peek(){
        if(this.items.length===0){
            return "Stack is empty"
        }
        return this.items[this.items.length-1];
    }
    display(){
        let string='';
        for(let i=this.items.length-1;i>=0;i--){
            str+=this.items[i]+" "
        }
        console.log(string);
        
    }

}
function isValid(s){

    let stack = new Stack();

        const brackets = {
        '(': ')',
        '{': '}',
        '[': ']',
    };
    for(let i=0;i<s.length;i++){

        const char=s[i];

        if(brackets[char]){
            stack.push(char)
        }else{
            if(stack.isEmpty()) return "Invalid";
            const topElement=stack.pop();
            if(brackets[topElement] !== char){
                return "inValid";
            }
        }
    }
  if(! stack.isEmpty()) return "invalid";
  return "valid"
}

console.log(isValid("()[]{}"));   
console.log(isValid("(]"));      
console.log(isValid("{[()]}"));  
console.log(isValid("((("));  

