class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}

class LinkedList{
    constructor(){
        this.head=null;
        this.tail=null;
    }
    addTaskEnd(task){
        const newNode = new Node(task);
        if(!this.head){
            this.head=newNode;
            this.tail=newNode;
        }else{
            this.tail.next=newNode;
            this.tail=newNode;
        }
        this.showTasks()
    }
    addTaskAtStart(task){
        const newNode =new Node(task);

        if(!this.head){
            this.head = this. tail = newNode;
        }else{
            newNode.next = this.head;
            this.head = newNode;
        }
        this.showTasks();
    }
    deleteTaskByName(task){
        if(!this.head)
            return;
        if(this.head.task===task){
            this.head =this.head.next;
            if(!this.head){
                this.tail=null;
            }
            this.showTasks();
            return;
        }

        let prev =this.head, current =this.head.next;
        while(current){
            if(current.task === task){
                prev.next =current.next;
                if(!current.next){
                    this.tail=prev
                }
                this.showTasks();
                return;
            }
            prev=current;
            current=current.next;
        }
        console.log(`Task"${task}" not found`);
        
    }

    deleteAtPosition(pos){
        if(pos<1){
            console.log("invalid position");
            return;
            
        }
        if(pos === 1 && this.head){
            this.head =this.head.next;
            if(!this.head) this.tail=null;
            this.showTasks();
            return;
        }
        let current = this.head;
           let count = 1;

        while (current && count < pos - 1) {
            current = current.next;
            count++;
        }

        if(!current || !current.next){
            console.log("Invalid Position");
            return;
            
        }
        current.next =current.next.next;
        if(!current.next) this.tail =current;
        this.showTasks()
    }
    showTasks(){
        let current =this.head;
        let result = "";
        while(current){
            result += current.task +"->";
            current =current.next;
        }
        console.log(result ? result + "null" :" Tasks");
        

    }
}

const list = new LinkedList()
list.addTaskEnd("finish Homework")
list.addTaskEnd("Buy Groceries"); 
list.addTaskAtStart("Morning Workout");
list.deleteTaskByName("Buy Groceries"); 
list.deleteAtPosition(2); 
list.showTasks();    
