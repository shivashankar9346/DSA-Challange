class Node{
    constructor(data){
        this.data=data;
        this.next=null;
        this.prev=null;
    }
}
class DoubleLinkedList{
    constructor(data){
        this.head=null;
        this.tail=null;
        this.current=null;
    }
    insertActionAtEnd(data){
        if(this.current && this.current !== this.tail){
            let node =this.current.next;
            while(node){
                let next =node.next;
                node.prev=node.next=null;
                node=next;
            }
            this.current.next=null;
            this.tail=this.current;
        }
        const newNode=new Node(data);
        if(!this.head){
            this.head=this.tail=newNode;

        }else{
            this.tail.next=newNode;
            newNode.prev=this.tail;
            this.tail=newNode
        }
        this.current=newNode;
        return data;
    }
    undo(){
        if(!this.head) return null;
        if(this.current.prev){
            this.current=this.current.prev;
            return this.current.data;
        }else{
            this.current=null;
            return null
        }
    }
    redo(){
        if(!this.head) return null;

        if(!this.current){
             this.current=this.head;
            return this.current.data;
        }
        if(this.current.next){
            this.current=this.current.next;
            return this.current.data;
        }
        return null;
        
    }
    deleteAtLast(){
        if(!this.tail) return null;
        const removed =this.tail;
        const removedAction =removed.data;

        if(this.head ==this.tail){
            this.head =this.tail=this.current=null;
            return removedAction;

        }
        const prev =removed.prev;
        prev.next=null;
        this.tail=prev;
        if(this.current==removed){
            this.current=prev;
        }
        return removedAction
    }
    showForward(){
        let result =[];
        let node=this.head;
        while(node){
            result.push(node.data);
            node=node.next
        }
        console.log("Forward : ", result.join("->"));
        return result;
    }
    showBackward(){
        let result =[];
        let node=this.tail;
        while(node){
            result.push(node.data);
            node=node.prev;
        }
        console.log("Backward : " , result.join("->"));
        return result
        
    }
    
}

let editor = new DoubleLinkedList();
editor.insertActionAtEnd("Type-A")
editor.insertActionAtEnd("Type-B")
editor.insertActionAtEnd("Type-C")
editor.showForward()

console.log(editor.undo());
console.log(editor.redo());


editor.deleteAtLast()
editor.showForward()
editor.showBackward()