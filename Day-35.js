class Node{
    constructor(data){
        this.data=data;
        this.next=null;
        this.prev=null;

    }
}
class gallary{
    constructor(){
        this.head=null;
        this.tail=null;

    }
    insertAtStart(data){
        const newNode = new Node(data)

        if(!this.head){
            this.tail=this.head=newNode;
        }else{
            newNode.next = this.head;
            this.head.prev=newNode;
            this.head=newNode
        }
        
    }
    insertAtEnd(data){
         const newNode = new Node(data)

        if(!this.head){
            this.tail=this.head=newNode;

    }else{
        this.tail.next= newNode;
        newNode.prev=this.tail;
        this.tail=newNode;
    }
  }
  viewForward(){
    let current =this.head;
    let result ="";
    while(current){
        result+= current.data +(current.next?"->":"");
        current=current.next;
    }
    console.log("Forward :"+ result);
    
  }
  viewBackward(){
    let current =this.tail;
    let result='';
    while(current){
        result+=current.data+(current.prev?"->":"");
        current=current.prev;
    }
    console.log("Backward :"+result);
    
  }
}

let photoGallary= new gallary();

photoGallary.insertAtStart("p1")
photoGallary.insertAtEnd("p2")
photoGallary.viewForward();  
photoGallary.viewBackward(); 