class Node{
    constructor(songName){
        this.songName=songName;
        this.next=null;
    }
}
class  playlist{
    constructor(){
        this.head = null;
    }
    addSongAtEnd(songName){
        const newSong = new Node(songName);
        if(!this.head){
            this.head =newSong;
        }else{
            let current =this.head;
            while(current.next){
                current =current.next;
            }
            current.next=newSong;
        }
        this.showplaylist();
    }
    addsongAtBeginning(songName){
        const newsong = new Node(songName);
        newsong.next=this.head;
        this.head =newsong;
        this.showplaylist();
    }
    
    deletesongByName(songName){
        if(!this.head){
            console.log("playlist is empty !");
            return;
            
        }
        if(this.head.songName === songName){
            this.head =this.head.next;
            this.showplaylist();
            return;
        }
        let current =this.head;
        while(current.next&& current.next.songName !== songName){
            current=current.next;
        }
        if(current.next){
            current.next =current.next.next;

        }else{
            console.log(`song"${songName}" not found .`);
            
        }
        this.showplaylist()
    }
    deletesongByPosition(position){
        if(!this.head){
            console.log("playlist is empty !");
            return;
            
        }
        if(position === 1){
            this.head=this.head.next;
            this.showplaylist();
            return;
        }
        let current =this.head;
        let count =1;
        while( current && count < position -1){
            current =current.next;
            count++
        }
        if(current && current.next){
            current.next =current.next.next;
        }else{
            console.log(`position ${position} is invalid .`)
        }
        this.showplaylist();
    }

    showplaylist(){
        if(!this.head){
            console.log("playlist is empty !");
            return;
            
        }
        let songs =[];
        let current =this.head;
        while(current){
            songs.push(current.songName);
            current=current.next;
        }
        console.log(songs.join("->"));
        
    }
}

const myplaylist =new playlist();

myplaylist.addSongAtEnd("shape of you");
myplaylist.addSongAtEnd("Beliver");
myplaylist.addsongAtBeginning("perfect");
myplaylist.deletesongByName("Beliver");
myplaylist.deletesongByPosition(2);
myplaylist.showplaylist()
