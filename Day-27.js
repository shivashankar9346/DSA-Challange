class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}
class LinkedList{
    constructor(data){
        this.head=null;
        this.tail =null;
    }
    insertAtHead(data){
        let newNode = new Node (data);
        if( !this.head){
            this.head=newNode;
            this.tail=newNode;
        }else{
            newNode.next = this.head;
            this.head =newNode;
        }

    }
    insertAtTail(data){
        let newNode= new Node (data);
        if( !this.tail){
            this.tail =newNode;
            this.head=newNode;
        }else{
            this.tail.next =newNode;
            this.tail=newNode;
        }
    }
    getLength(){
        let count =0 , current =this.head;
        while(current){
            count++;
            current = current.next;
        }
        return count;
    }
    insertAtPosition(data,pos){
        let newNode =new Node(data);
        let current = this.head;
        let count =0;
        let length =this.getLength();
        if(pos === 1){
            return this.insertAtHead(data);
        }

        if(pos < 1 || pos > length +1) return console.log("invalid position ");
        if(pos == length + 1) return this.insertAtTail(data);
        while(current && count < pos - 1){
            current  = current.next;
            count++
        }
        newNode.next =current.next;
        current.next=newNode;
        if(current === null) return console.log("position out of reach");
        if(newNode.next == null){
            this.tail = newNode;
        }
        
    }
    printList(data){
        let current =this.head;
        let result ="";
        while(current){
            result +=current.data + "->";
            current =current.next;
        }
        console.log(result + "null");
        
    }
}
let list = new LinkedList();
list.insertAtHead(10);
list.insertAtTail(20);
list.insertAtPosition(30,3);
list.insertAtPosition(15,30)
list.printList()