class Node{
    constructor(data){
        this.data=data;
        this.prev=null;
        this.next=null
    }
}
class DoubleLinkedList{
    constructor(){
        this.head=null;
        this.tail-null
    }
    insertAtHead(data){
        const newNode= new Node(data)
        if(!this.head){
            this.head=this.tail=newNode
        }else{
            this.head.next=newNode;
            newNode.next=this.head;
            this.head=newNode;
        }

    }
    insertAtTail(data){
            const newNode= new Node(data)
        if(!this.head){
            this.head=this.tail=newNode
        }else{
            this.tail.next=newNode;
            newNode.prev=this.tail;
            this.tail=newNode
        }

    }
    getLength(){
        let current=this.head;
        let count=0;
        while( current){
            current= current.next;
            count++

        }
        return count;

    }
    insertAtIndex(data,index){
        if(index==0){
            this.insertAtHead(data);
            return
        }
        if(index==this.getLength()){
            this.insertAtTail(data);
            return
        }
        let newNode=new Node(data)
        let count=0;
        let current =this.head;
        if(index < 0 || index > this.getLength()){
            console.log("Invalid Insertion");
            return
            
        }
        while(count < index-1){
            current=current.index;
            count++
        }
        let temp=current.next;
        current.next=newNode;
        newNode.prev=current;
        newNode.next=temp;
        temp.prev=newNode;

    }
    deleteAtHead(){
        if(!this.head) return;
        if(this.head ==this.tail){
            this.head =this.tail =null;
        }else{
            this.head=this.head.next;
            this.head.prev=null
        }
    }
    deleteAtTail(){
        if(!this.tail) return
        if(this.head == this.tail){
            this.head =this.tail =null
        }else{
            this.tail=this.tail.prev;
            this.tail.next=null;
        }

    }
    
    deleteAtIndex(index){
        let length =this.getLength();
        if(index < 0 || index >=length)return;
        if(index === 0){
            this.deleteAtHead();
            return
        }
        if(index === length-1){
            this.deleteAtTail();
            return
        }
        let current= this.head;
        let count =0;
        while( count < index){
            current=current.next;
            count++
        }
        current.prev.next=current.prev;
        current.next.prev=current.prev;

    }
    forward(){
        let result="";
        let current=this.head;
        while(current){
            result += current.data+(current.next ? "->":"")
            current=current.next;
        }
        console.log("Forward :" + result);
        
    }
    backward(){
        let result="";
        let current=this.tail;
         while(current){
            result += current.data+(current.prev ? "->":"")
            current=current.prev;
        }
        console.log("Backward :" + result);

    }
}


let playlist = new DoubleLinkedList();

playlist.insertAtHead("Song-A")
playlist.insertAtTail("Song-B")
playlist.insertAtIndex("Song-X",2)

playlist.deleteAtHead()
playlist.deleteAtTail()

playlist.forward();
playlist.backward();