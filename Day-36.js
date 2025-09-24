class Node{
    constructor(data){
        this.data=data;
        this.next=null
        this.prev=null

    }
}
class DoubleLinkedList{
    constructor(data){
        this.head=null;
        this.tail=null
    }
    insertAtHead(data){
        const newNode = new Node(data)
        if(!this.head){
            this.head=this.tail=newNode

        }else{
            newNode.next=this.head;
            this.head.prev= newNode;
            this.head=newNode

        }
    }
    insertAtTail(data){
        const newNode = new Node(data)
        if(!this.head){
            this.head=this.tail=newNode
        }else{
            this.tail.next=newNode;
            newNode.prev=this.tail;
            this.tail=newNode;

        }
    }
    getLength(){
        let current =this.head;
        let count =0;
        while(current){
            current=current.next;
            count++
        }
        return count;
    }

    InsertAtIndex(index,data){
        let newNode=new Node(data);
        let length =this.getLength();
        if(index < 0 || index > length){
            console.log("Invalid Insertions");
            return;
            
        }
        if(index === 0){
            this.insertAtHead(data);
            return;
        }else if(index === length){
            this.insertAtTail(data);
            return;
        }else{
            let current=this.head;
            let count=0;
            while( count < index -1){
                current=current.next;
                count++
            }
            let nextNode= current.next;
            current.next=newNode;
            newNode.prev=current;
            newNode.next=nextNode
            nextNode.prev=newNode
        }
    }

    forward(){
        let result ='';
        let current =this.head;
        while(current){
            result += current.data + (current.next ? "->":"");
            current=current.next;
        }
        console.log("Forward :" + result) ;
    }

    backward(){
        let result='';
        let current =this.tail;
        while(current){
            result += current.data +(current.prev ? "->":"")
            current=current.prev
        }
        console.log("Backward :" + result);
        
    }

}

let playList =new DoubleLinkedList();
playList.insertAtHead("Song A")
playList.insertAtTail("Song B")
playList.InsertAtIndex(1,"Song X")
playList.forward();
playList.backward();