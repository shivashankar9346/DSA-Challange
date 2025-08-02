// 📦 Problem:
// You are managing a food delivery dashboard. Orders are stored in an array sorted by delivery time.
//  A new order comes in, and you need to insert it in the correct position to keep the array sorted by delivery time.


// let orders=[
//   { orderId: 1, deliveryTime: "12:00" },
//   { orderId: 2, deliveryTime: "12:30" }
// ]

// let newOrders={ orderId: 3, deliveryTime: "12:15" }

// function insertion(orders,newOrders){

// let left=0;
// let right=orders.length-1
// let intialIndex=orders.length;

// const changeToMintues =(time)=>{
//     let [h,m]=time.split(":").map(Number);
//     return h*60+m;
// };

// let newTime = changeToMintues(newOrders.deliveryTime)

// while(left<=right){
//     let midIndex= Math.floor((left+right)/2);
//     let midtime=changeToMintues(orders[midIndex].deliveryTime);

//     if(newTime<midtime){
//         intialIndex= midIndex;
//         right=midIndex-1;
//     }else{
//         left=midIndex+1
//     }
// }
// orders.splice(intialIndex,0,newOrders)
// return orders;

// }
// console.log(insertion(orders,newOrders));



let orders=[
  { orderId: 1, deliveryTime: "12:00" },
  { orderId: 2, deliveryTime: "12:30" }
]


let newOrders={ orderId: 3, deliveryTime: "12:15" }
let insert=false;
for(i=0;i<orders.length;i++){
  if(newOrders.deliveryTime<orders[i].deliveryTime){
    orders.splice(i,0,newOrders)
    insert=true;
    break;
  }
}
if(!insert){
  orders.push(newOrders)
}
console.log(orders);






// 🔹 2. Remove Inactive Users 
// 👥 Problem:
// You are building a social media cleanup tool.
//  Given an array of user accounts with an isActive boolean flag, remove all users who are inactive.


// let users=[
//   { username: "ali", isActive: true },
//   { username: "sara", isActive: false },
//   { username: "john", isActive: true }
// ]

// let check = users.filter(function(x){
    
//     return x.isActive === true;

// },[])
// console.log(check)



// let users=[
//   { username: "ali", isActive: true },
//   { username: "sara", isActive: true},
//   { username: "john", isActive: false }
// ]
// function filterActive(users){
//     let left=0;
//     let right=users.length-1;
//     let result=[]
//     while(left<=right){
//         if(users[left].isActive){
//            result.push(users[left])
//         }
//         if(left!==right && users[right].isActive ){
//           result.push(users[right]);
//         }
//         left++;
//         right--;
//       }
//       return result;
// }
// console.log(filterActive(users));

// 3. Movie Pair Watch Time 
// 🎬 Problem:
// You and your friend have exactly targetTime minutes to watch two movies. You're given an array of movie durations.
//  Find if there are two different movies you can watch back-to-back within the exact targetTim


// let movieDurations = [90, 85, 75, 60, 120, 150, 125]
// let targetTime = 250;

// movieDurations.sort((a, b) => a - b);

// function watchmovies(movieDurations,targetTime){
//   left=0;
//   right=movieDurations.length-1;

//   while(left<right){
//     let sum= movieDurations[left]+movieDurations[right]
//     if(sum === targetTime){
//       return [movieDurations[left],movieDurations[right]];
//     }else if(sum<targetTime){
//       left++
//     }else{
//       right--
//     }
//   }
//   return null;
// }
// console.log(watchmovies(movieDurations,targetTime))