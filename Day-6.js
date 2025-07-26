
// 1.✅ Expected Output:
// [101, 102, 103, 104, 105]

// let cart = [101, 102, 103, 104];

// let addId= cart.push(105)
// console.log(cart)


// 2.✅ Expected Output:
// [101, 102, 104]

// let carts = [101, 102, 103, 104];
// let removeId= carts.filter(item=>item!=103)
// console.log(removeId)

// let cart=[101,102,103,104];
// let index = cart.indexOf(103);
// if(index !== -1){
//     cart.splice(index,1)
// }
// console.log(cart);


// ✅ Expected Output:
// ["apple", "orange", "banana", "grapes"]


// let fruits = ["apple", "orange", "grapes"];
// let index = fruits.indexOf("grapes")
// let AddIten = fruits.splice(index,0 ,"banana")
// console.log(fruits);


// ✅ Expected Output:
// Hello, Ali!
// Hello, Zara!
// Hello, John!


// let students = ["Ali", "Zara", "John"];
// let traverse = students.forEach(function(x){
    
//     console.log(`Hello,${x}!`);
// })


// ✅ Expected Output:
// ["order2", "order3"]

let orders = ["order1", "order2", "order3"];
let deleteItem= orders.shift("order1")
console.log(orders);



