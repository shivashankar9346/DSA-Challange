class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}
class linkedList{
    constructor(){
        this.head=null;
        this.tail=null;
    }
    insertAtHead(data){
        let newNode = new Node(data);
        if(!this.head){
            this.head=newNode;
            this.tail=newNode;
        }else{
            newNode.next=newNode;
            this.head=newNode;
        }  
    }
    getLength(){
        let count =0, current =this.head;
        while(current){
            count++;
            current=current.next;
        }
        return count;
    }
    insertAtPosition(data,pos){
        let newNode=new Node(data);
        let current=this.head;
        let length =this.getLength();
         let count =1;

         if( pos <1 || pos > length + 1){
            console.log("invalid insertion");
            return;
         }
         if(pos === 1) return this.insertAtHead(data);
         while(current !== null && count < pos - 1){
            current =current.next;
            count++
         }
         newNode.next = current.next;
         current.next=newNode;
         if(newNode.next == null){
            this.tail = newNode;
         }
    }
    deleteAtPosition(pos){
        let length = this.getLength();
        if(pos < 1 || pos > length){
            console.log("invalid deletion");
            return;
        }
        if(pos === 1){
            this.head=this.head.next;
            if(!this.head) return this.tail =null;
            return;
        }
        let current =this.head;
        let count=1;
        while(count < pos -1 && current){
            current = current.next;
            count++
        }
        let deleteNode =current.next;
        current.next= deleteNode.next;
        if(current.next == null){
            this.tail =current;
        }
    }
    printList(data){
        let current =this.head;
        let result="";
        while(current){
            result +=current.data;
            if(current.next) result +="->";
            current=current.next;
        }
        console.log(result);
    }
}

let list =new linkedList();
list.insertAtPosition(10,1);
list.insertAtPosition(20,2);
list.insertAtPosition(30,3);
list.insertAtPosition(40,4);
list.insertAtPosition(50,5);
list.insertAtPosition(60,6);


list.deleteAtPosition(1);
list.deleteAtPosition(6)

list.printList()
