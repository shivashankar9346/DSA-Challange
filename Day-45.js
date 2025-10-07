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
        const newNode=new Node(data);
        if(!this.head){
            this.head=this.tail=newNode;
            newNode.next=newNode;
        }else{
            this.tail.next=newNode;
            newNode.next=this.head;
            this.tail=newNode
        }
    }

    display(){
        if(!this.head){
            console.log("Empty");
            return   
        }
        let result=[];
        let current=this.head;
        do{
            result.push(current.data)
            current=current.next;

        }while(current !==this.head)
            console.log(result.join("->"))
    }

    showPrinters(k){

        if(this.head == null){
            console.log("NO printers");
            return;
        }

        let current=this.head;

        for(let i=0;i<k;i++){
             console.log(`Job Assgined to: ${current.data}`);
             current = current.next; 

        }

    }

}

let list = new circularLinkedList();
list.insertAtEnd("printer-1")
list.insertAtEnd("printer-2")
list.insertAtEnd("printer-3")
list.display()
list.showPrinters(5)