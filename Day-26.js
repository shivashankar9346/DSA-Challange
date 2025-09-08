class Node{
    constructor(data){
        this.data=data,
        this.next=null;
    }
}
class LinkedList{
    constructor(){
        this.head=null;
    }
    insertAtHead(data){
        const newNode = new Node(data);
        newNode.next=this.head;
        this.head=newNode;
    }
    insertAtTail(data){
        const newNode=new Node(data);
        if(!this.head){
            this.head=newNode;
            return;
        }
        let curr = this.head;
        while(curr.next){
            curr=curr.next;
        }
        curr.next =newNode;
    }
    insertAtPosition(data,pos){
        if(pos<1){
            console.log("Invalid Position");
            return;
        }
        if(pos === 1){
            this.insertAtHead(data);
            return;
        }
        let newNode = new Node (data);
        let curr = this.head;
        let count=1;

        while (curr&& count<pos-1){
            curr= curr.next;
            count++
        }
        if(!curr){
            console.log("position out of Bounds");
            return; 
        }
        newNode.next =curr.next;
        curr.next =newNode;

    }
    printList(){
        let curr =this.head;
        let output ="";
        while(curr){
            output += curr.data + "->";
            curr =curr.next;

        }
        console.log(output +"null");
        
    }

}
const list =new LinkedList();


list.insertAtHead(10); 
list.insertAtTail(20); 
list.insertAtTail(30); 
list.insertAtPosition(15, 2); 
list.insertAtPosition(5, 1);  

list.printList();