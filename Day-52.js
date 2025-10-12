class Node{
    constructor(data){
        this.data=data;
        this.next=null;
        this.prev=null;
    }
}
class doubleLinkedList{
    constructor(){
        this.head=null;
        this.tail=null;
    }
    insert(data){
        const newNode=new Node(data);
        if(!this.head){
            this.head=this.tail=newNode;
        }else{
            this.tail.next=newNode;
            newNode.prev=this.tail;
            this.tail=newNode;

        }
    }
     forward() {
        let result = [];
        let current = this.head;
        while (current) {
            result.push(current.data);
            current = current.next;
        }
        console.log("Forward Traversal:", result.join(" -> "));
    }
        backward() {
        let result = [];
        let current = this.tail;
        while (current) {
            result.push(current.data);
            current = current.prev;
        }
        console.log("Backward Traversal:", result.join(" -> "));
    }
}

let list = new doubleLinkedList();
let name = "SHIVA";

for (let char of name) {
    list.insert(char);
}
list.forward();   
list.backward();