class Node{
    constructor(data){
        this.data=data;
        this.next=null
    }
}
class linkedList{
    constructor(){
        this.head=null;
    }
    insertAtHead(data){
        const newNode=new Node(data);
        newNode.next =this.head;
        this.head=newNode;
        this.printList()

    }
    insertAtTail(data){
        const newNode=new Node(data);
        if(this.head===null){
            this.head= newNode;
        }else{
            let temp =this.head;
            while(temp.next !==null){
                temp =temp.next;
            }
            temp.next=newNode
        }
        this.printList();

    }
    insertAtPosition (data,position){
        const newNode= new Node(data);
        if(position===1){
            newNode.next=this.head;
            this.head=newNode;
            return;
        }
        let temp =this.head;
        let count=1;
        while(temp!==null&&count<position-1){
            temp =temp.next;
            count++
        }
        if(temp===null){
            console.log("position out of range");
            return;
            
        }
        newNode.next=temp.next;
        temp.next=newNode;
        this.printList();
    }
    printList(){
        let result ='';
        let temp =this.head;
        while(temp !== null){
            result+= temp.data+"->";
            temp= temp.next;
        }
        result += "null";
        console.log(result);
        
    }
}

let list =new linkedList();
list.insertAtHead(10);
list.insertAtTail(20)
list.insertAtPosition(15,2)