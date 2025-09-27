class Node{
    constructor(data){
        this.data=data;
        this.prev=null;
        this.next=null;
    }
}
class DoubleLinkedList{
    constructor(){
        this.head=null;
        this.tail=null;
        this.current=null
    }
    openTabAtEnd(data){
        const newNode=new Node(data)
        if(!this.head){
            this.head=this.tail=newNode
        }else{
            this.tail.next=newNode;
            newNode.prev=this.tail;
            this.tail=newNode;
        }
        this.current=newNode;
        return data
    }

    getLength(){
        let node=this.head;
        let count=0;
        while(node){
            node=node.next;
            count++
            
        }
        return count;
    }
    openTabAtPosition(index,data){
        let length =this.getLength();
        if(index < 0 || index > length){
            console.log("Invalid Insertion");
            
        }
        let newNode=new Node(data);
        if(index ===0){
            this.head =this.tail=newNode;

        }else{
            newNode.next=this.head;
            if(this.head)this.head.prev=newNode;
            this.head=newNode;
            if(!this.tail) this.tail=newNode;
            return
        }
        if(index=== length){
            return this.openTabAtEnd(data);
        }
        let target =this.head;
        let count=0;
        while(count < index){
            target=target.next;
            count++;
        }
        newNode.prev=target.prev;
        newNode.next=target;
        target.prev.next=newNode;
        target.prev=newNode

    }

    removeTabAtPosition(index){
        let length=this.getLength();
        if(!this.head)return;
        if(index < 0 || index >= length){
            console.log("Invalid Index");
            return;
            
        }
        if(index===0){
            let temp=this.head;
            this.head=this.head.next;
            if(this.head){
                this.head.prev=null;
            }else{
                this.tail=null
            }
            if(this.current===temp)this.current=this.head;
            return temp.tab;
        }
        if(index == length-1){
            let temp=this.tail;
            this.tail.prev=this.tail;
            if(!this.tail){
                this.tail=null;
            }else{
                this.head=null;
            }
            if(this.current===temp)return this.current=this.tail;
            return temp.tab;
        }
        let target =this.head;

        let count=0;
        while (count < index) {
            target=target.next;
            count++
            
        }
        target.prev.next= target.next;
        target.next.prev=target.prev;

        if(this.current ==target) return this.current =target.next;
        return target.data

    }

    undo(data){
        if(!this.head) return null;
        if(this.current.prev){
            this.current=this.current.prev;
            return this.current.data;
        }
        console.log("Already at first tab");
        return this.current.data;
        
    }
    redo(data){
        if(!this.tail) return null;
        if(this.current.next){
            this.current=this.current.next;
            return this.current.data;
        }
        console.log("Already at the last tab");
        return this.current.data;
        
    }
    showForward(){
        let result=[];
        let node=this.head;
        while(node){
            result.push(node.data);
            node=node.next;

        }
        console.log("Forward : " ,result.join (" -> "));
        return result;
    }
    showBackward(){
        let result=[];
        let node=this.tail;
        while(node){
            result.push(node.data);
            node=node.prev;
        }
        console.log("backward : " ,result.join("->"));
        return result;
    }
    
}

let web=new DoubleLinkedList();

web.openTabAtEnd("Google")
web.openTabAtEnd("YouTube")
web.openTabAtEnd("GitHub")
web.openTabAtPosition(1,"Linkedin")
web.showForward();
web.removeTabAtPosition(2);
web.showForward();
console.log(web.undo());
console.log(web.redo());
web.showBackward()

