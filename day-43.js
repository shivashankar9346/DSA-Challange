class Node{
    constructor(data){
        this.data=data;
        this.next=null;
        this.prev=null;
    }
}
class circularLinkedList{
    constructor(){
        this.head=null;
        this.tail=null
    }
    insertAtStart(data){
        const newNode = new Node(data);

        if(!this.head){
            this.head=newNode;
            newNode.next=this.head;
        }else{
            let tail=this.head
            while(tail.next !== this.head){
                tail=tail.next;
            }
            newNode.next=this.head;
            this.head.next=newNode;
            this.head=newNode;
        }

    }
    insertAtEnd(data){

        const newNode=new Node(data);

        if(!this.head){
            this.head=newNode;
            newNode.next=this.tail;
        }else{
            let tail=this.head;

            while(tail.next !==this.head){
                tail=tail.next;
            }
            tail.next=newNode;
            newNode.next=this.head
        }

    }
    display(){
        if(!this.head){
            console.log("Scheduler empty");
            return;
        }
            let result=[];
            let current=this.head;
            do{
                result.push(current.data);
                current=current.next;
            }while(current !== this.head);
        console.log(result.join("->"));
        
    }

    simulateRound(){
        if(!this.head){
            console.log("No tasks to execute");
            return
            
        }
        let current=this.head;

        do{
            console.log(`Executing : ${current.data}`);
            current=current.next;
            
        }while(current !==this.head)
    }
}

let list = new circularLinkedList();
list.insertAtStart("Task-1")
list.insertAtStart("Task-2")
list.insertAtEnd("Task-3");
list.insertAtEnd("Task-4");

list.display()

list.simulateRound();