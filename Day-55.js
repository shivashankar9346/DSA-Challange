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


function findGreater(arr){
    let newStack=new Stack();

    let result= new Array(arr.length).fill(-1);

    for(let i=0;i<arr.length;i++){
        while(!newStack.isEmpty() && arr[i] > arr[newStack.peek()] ){
            let topIndex=newStack.pop();
            result[topIndex]=arr[i]
        }
        newStack.push(i);  
    }
      return result;
}
console.log(findGreater([4, 5, 2, 25]));
