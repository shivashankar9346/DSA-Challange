class Node{
    constructor(url){
        this.url=url;
        this.next=null
    }
}
class LinkedList{
    constructor(){
        this.head=null;
        this.current=null;
    }
    visit(url){
        const newNode= new Node(url)
            if(this.head ===null){
                this.head=newNode;
                this.current=newNode;
            }else{
                let temp =this.head;
                while(temp.next !== null){
                    temp=temp.next;
                }
                temp.next=newNode;
                this.current=newNode;
            }
            console.log(this.current.url);
            
        }
        back(){
            if(this.current == this.head){
                console.log("cannot go back");
            }
            let temp =this.head;
            while(temp.next !== this.current){
                temp =temp.next;
            }
            this.current =temp;
            console.log(temp.url);
        }
        forward(){
            if(this.current === null || this.current.next === null){
                console.log("cant go forward");
                
            }else{
                this.current =this.current.next;
                console.log(this.current.url);
            }
        }
        current(){
            if(this.current){
                console.log(this.current.url);
            }
        }

    }

    let websites =new LinkedList();

    websites.visit("google.com");
    websites.visit("github.com");
    websites.visit("linkedin.com")
    websites.back();
    websites.forward();
    websites.visit("stackoverflow.com")
    websites.current;