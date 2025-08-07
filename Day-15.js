 
 
 
 let pages = ["home", "about", "products", "home", "cart", "checkout"]
 let k = 3

 function findUnique(pages,k){

    for(let i=0;i<=pages.length-k;i++){
        let  unique=[];
        for(let j=i;j<i+k;j++){
            if(unique.includes(pages[j])){
                break;
            }else{
                unique.push(pages[j])
            }
        }
        if(unique.length === k){
            return true;
        }
    }
    return false;

 }
 console.log(findUnique(pages,k));
 