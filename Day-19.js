// 🧠 Problem Statement:
// You're analyzing user browsing behavior. You are given a list of webpages (as strings), 
// visited in order, and a window size k. 
// You need to determine if any window of k consecutive pages contains all unique pages (no repeats).

//  let pages = ["home", "about", "products", "home", "cart", "checkout"]  
//  let k = 3

//  function uniquePages(pages,k){

//     for( let i=0; i<= pages.length-k; i++){
//         let unique =[];
//         for ( let j=i; j<i+k; j++){
//             if( unique.includes(pages[j])){
//                 break;
//             }else{
//                 unique.push(pages[j])
//             }
//         }
//         if(unique.length === k){
//             return true
//         }
//     }
//     return false;

//  }
//  console.log(uniquePages(pages,k));
 

  let pages = ["home", "about", "products", "home", "cart", "checkout"]  
 let k = 3

function uniquePages(pages ,k ){
    let unique= new Map();

    for(let i=0;i<k;i++){
        unique.set(pages[i],(unique.get(pages[i])||0)+1)

    }
    if(unique.size === k){
        return true;
    }

    for(let i=k;i<pages.length ;i++){
        let out = pages[i-k];
        let inn = pages[i]
        unique.set(out,unique.get(out)-1);
        if(unique.get(out)===0) {
            unique.delete(out)
        }

          unique.set(inn, (unique.get(inn) || 0) + 1);

          if (unique.size === k) return true;

    }
      return false;
}
console.log(uniquePages(pages, k));