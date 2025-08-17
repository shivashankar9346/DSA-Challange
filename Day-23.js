// let deliveries = ["tomato", "onion", "bread", "lettuce", "tomato", "cheese", "onion"]  
// let required = ["tomato", "cheese", "onion"] 

// function ingredients (deliveries,required){

//     let start =0;
//     let minLength=Infinity;
//     let tomatoCount =0, cheeseCount =0, onionCount=0;
//     for( i=0;i<deliveries.length ;i++){
//         if(deliveries[i]==="tomato") tomatoCount++;
//         if(deliveries[i]==="cheese") cheeseCount++;
//         if(deliveries[i]==="onion") onionCount++;

//         while(tomatoCount>=1 && cheeseCount>=1 && onionCount>=1){
//             minLength= Math.min( minLength , i-start+1)

//             if(deliveries[start]==="tomato") tomatoCount--;
//             if(deliveries[start]==="cheese") cheeseCount--;
//             if(deliveries[start]==="onion") onionCount--;

//             start++
//         }
//     }
//     return minLength === Infinity ? -1 : minLength;

// }
// console.log(ingredients(deliveries,required));



let deliveries = ["tomato", "onion", "bread", "lettuce", "tomato", "cheese", "onion"];
let required = ["tomato", "cheese", "onion"];

function minWindow(deliveries, required) {

    let need = new Set(required);
    let have = {};
    let formed = 0;
    let start = 0, minLength = Infinity;

    for (let i = 0; i < deliveries.length; i++) {
        let item = deliveries[i];

        if (need.has(item)) {
            have[item] = (have[item] || 0) + 1;
            if (have[item] === 1) formed++;
        }

        while (formed === need.size) {
            minLength = Math.min(minLength, i - start + 1);

            let firstItem = deliveries[start];
            if (need.has(firstItem)) {
                have[firstItem]--;
                if (have[firstItem] === 0) formed--;
            }
            start++;
        }
    }

    return minLength === Infinity ? -1 : minLength;
}

console.log(minWindow(deliveries, required)); 

