// ✅ Output:

// {
//   indianNumbers: ["+919876543210", "+918888777666", "+917654321098"],
//   usNumbers: ["+14085551234", "+12345678901"]
// }


// const phoneNumbers = [
//   "+919876543210",
//   "+14085551234",
//   "+918888777666",
//   "+12345678901",
//   "+917654321098"
// ];
// let objectNumbers ={}
// let filteredIndianNumbers = phoneNumbers.filter(function(x){
//   if(x.startsWith("+91")){
//     return  true;
//   }
// })
// let filteredUSNumbers = phoneNumbers.filter(function(x){
//   if(x.startsWith("+1")){
//     return  true;
//   }
// })
// objectNumbers.IndianNumbers = filteredIndianNumbers;
// objectNumbers.UsNumbers = filteredUSNumbers;

// console.log(objectNumbers);


// ✅ Output:
// [101, 103, 102, 104]


let cart = [101, 102, 104];
let newProduct = 103;
cart.splice(2,0,newProduct)
console.log(cart);


// ✅ Output:

// ["Ali", "John", "Sara", "Aarav"]



let waitingList = ["Ali", "John", "Sara"];
let newStudent = "Aarav";

waitingList.push(newStudent)
console.log(waitingList);












