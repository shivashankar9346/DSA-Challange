
// ✅ Q1. Remove Duplicate Emails (Like Gmail cleanup)
// 📧 Problem:
// You're building an email cleanup feature. Given a sorted list of email IDs, remove all duplicates in-place and return the list of unique emails.


// MEthod-1

// let emails = ["ali@gmail.com", "ali@gmail.com", 
//     "sara@gmail.com", "sara@gmail.com", "zayn@gmail.com"]

// let filtered = emails.filter((item, index, arr) => {
//   return item.toLowerCase() !== arr[index - 1]?.toLowerCase();
// });

// console.log(filtered);



// MEthod-2



// let emails = ["ali@gmail.com", "ali@gmail.com", 
//     "sara@gmail.com", "sara@gmail.com", "zayn@gmail.com"]

// function filter(arr){
//     let i=0;
    
//     for(let j=1;j<arr.length;j++){
//         if(arr[j].toLowerCase()!==arr[i].toLowerCase()){

//             i++;
//             arr[i]=arr[j]
//         }
//     }
//     return arr.slice(0,i+1);
    

// }
// console.log(filter(emails));



// Method-3



let emails = ["ali@gmail.com", "ali@gmail.com", 
   "sara@gmail.com", "sara@gmail.com", "zayn@gmail.com"]

   function filter(arr){

    let left=0;
    let right=0;

    while(right<arr.length){
        if(arr[left].toLowerCase()!== arr[right].toLowerCase()){
            left++;
            arr[left]=arr[right]
        
        }
        right++
    }
    return arr.slice(0,left+1)
   }
console.log(filter(emails));



// MEthod-4



// function filterEmails(emails) {
//   const seen = new Set();
//   const result = [];

//   for (let email of emails) {
//     const lower = email.toLowerCase();
//     if (!seen.has(lower)) {
//       seen.add(lower);
//       result.push(email);
//     }
//   }

//   return result;
// }

// let emails = ["ali@gmail.com", "ali@gmail.com", 
//     "sara@gmail.com", "sara@gmail.com", "zayn@gmail.com"]
// console.log(filterEmails(emails));



// ✅ Q2. Playlist Duration Matcher (Music App Feature)
// 🎵 Problem:
// You’re building a music app. Users want to create a 2-song playlist that exactly matches their commute time.

// You're given an array of song durations (in minutes), and a targetDuration.
// Find one pair of songs (different songs) that exactly add up to the target.

    

let songs = [3, 5, 8, 2, 7, 4]  
 let target = 10

 function targetDurationofMusic(arr){

     arr.sort((a, b) => a - b); 
    left =0;
    right=arr.length-1;

    while(left<right){

      let sum = arr[left]+arr[right]
      if(sum===target){
         return [arr[left],arr[right]]
      }else if(sum<target){
         left++
      }else{
         right--;
      }
    }
    return null;
 }
console.log(targetDurationofMusic(songs,target));

