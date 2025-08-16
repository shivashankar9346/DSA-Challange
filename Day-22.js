// let  colors = ["blue", "orange", "white", "green", "blue", "orange"]  


// function  flagColours(colors){
//     let start =0;
//     let minLength = Infinity;
//     let orangeCount =0, greenCount =0,whiteCount =0;

//     for(let i=0;i<colors.length;i++){
//         if(colors[i]==="orange") orangeCount++;
//         if(colors[i]==="white") whiteCount++;
//         if(colors[i]==="green") greenCount++;

//         while(orangeCount>=1 && whiteCount>=1 && greenCount>=1){
//             minLength=Math.min(minLength,i-start+1)

//             if(colors[start]==="orange") orangeCount--;
//             if(colors[start]==="white") whiteCount--;
//             if(colors[start]==="green")greenCount--;

//             start++;
//         }

//     }
//      return minLength === Infinity ? -1 : minLength;

// }
// console.log(flagColours(colors));


let colors = ["blue", "orange", "white", "blue", "green", "orange"];

function flagColours(colors) {
    let counts = { orange: 0, white: 0, green: 0 };
    let left = 0;
    let minLength = Infinity;

    for (let i = 0; i < colors.length; i++) {
        if (counts.hasOwnProperty(colors[i])) {
            counts[colors[i]]++;
        }

        while (counts.orange > 0 && counts.white > 0 && counts.green > 0) {
            minLength = Math.min(minLength, i - left + 1);

            if (counts.hasOwnProperty(colors[left])) {
                counts[colors[left]]--;
            }
            left++;
        }
    }

    return minLength === Infinity ? -1 : minLength;
}

console.log(flagColours(colors)); 
