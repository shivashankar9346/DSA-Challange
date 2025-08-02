// ✅ Q1. Count Pairs with Given Sum

// 🧮 Problem:
// You're given a sorted array of integers and a target sum.
// Find how many unique pairs exist such that the sum of the pair equals the target.

// let arr = [1, 2, 3, 4, 5, 6, 7]  
// let target = 8

// function counter(arr,target){
//     let  left=0;
//     let  right=arr.length-1;
//     let  count=0
//     while(left<right){
//        let  sum= arr[left]+arr[right]
//        if(sum === target){
//         count ++;
//         left++;
//         right--;
//        }else if(sum<target){
//           left++;
//        }else{
//         right--
//        }

//     }
//     return count;

// }
// console.log(counter(arr,target));

// ✅ Q2. Move Zeroes to End

// 📦 Problem:
// You're given an array. Move all 0s to the end while maintaining the order of non-zero elements.
// Do it in-place, using two pointers.


// let arr = [0, 1, 0, 3, 0,12,33,45]

// function MoveZerosEnd(arr){
//     let NonZero=0;
//     for( let i=0; i<arr.length;i++){
//         if(arr[i]!==0){
//             arr[NonZero]=arr[i];
//             NonZero++;
//         }

//     }
//     while(NonZero<arr.length){
//         arr[NonZero]=0;
//         NonZero++;
//     }
//     return arr
// }
// console.log(MoveZerosEnd(arr));




//  let arr = [0, 1, 0, 3, 0,12,33,45]
//  let left=0;
//  let right=0;
//   while(right<arr.length){
//    if(arr[right]!== 0){
//       let temp=arr[left]
//       arr[left]=arr[right]
//       arr[right]=temp;
//       left++
//    }else{
//       right++;

//    }
//   }
//   console.log(arr);
  



// sorting method

  let arr = [0, 1, 0, 3, 0,12,33,45]
  for(let j=0;j<arr.length;j++){

     for(let i=0;i<arr.length;i++){
      if(arr[i]>arr[i+1]){
         let temp= arr[i]
         arr[i]=arr[i+1]
         arr[i+1]=temp
      }
     }
  }
  console.log(arr);
  