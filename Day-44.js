class Node{
    constructor(data){
        this.data=data;
        this.next=null;
        this.prev=null
    }
}
class circularLinkedList{
    constructor(){
        this.head=null;
        this.tail=null
        
    }
    insertAtEnd(data){
        let newNode=new Node(data);

        if(!this.head){
            this.head=newNode;
            this.tail=newNode;
            newNode.next=newNode;
        }else{
            this.tail.next=newNode;
            newNode.next=this.head;
            this.tail=newNode;
        }

    }
    insertAtBeginning(data){
        const newNode=new Node(data);
        if(!this.head){
            this.head=newNode;
            this.tail=newNode
            newNode.next=newNode

        }else{
           newNode.next=this.head;
           this.head=newNode;
           this.tail.next = this.head;
        }
    }
    Display(){
        if(!this.head){
            console.log("Empty");
            return
        }

        let  result=[];
        let current=this.head;

        do{
            result.push(current.data);
            current=current.next;
        }while(current !==this.head)
            console.log(result.join("->"));
            
    }

    showPlaylist(k){
        if(this.head == null){
            console.log("No songs to Play");
            return
        }
        let current=this.head;

        for(let i=0;i<k;i++){
             console.log(`Playing: ${current.data}`);
             current = current.next; 

        }
    }
}

let list = new circularLinkedList();

list.insertAtEnd("Shape of You")
list.insertAtEnd("Believer")
list.insertAtBeginning("Senorita")
list.Display()
let k = 5;
list.showPlaylist(k)