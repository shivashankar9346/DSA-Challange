// ✅ Expected Output:

// [
//   { name: "Pen", total: 30 },
//   { name: "Notebook", total: 100 },
//   { name: "Bag", total: 400 }
// ]

let items = [
  { name: "Pen", qty: 3, price: 10 },
  { name: "Notebook", qty: 2, price: 50 },
  { name: "Bag", qty: 1, price: 400 }
];

let totalAmount = items.map(function(x){
    return {    
    name: x.name,
    total: x.qty * x.price
  };

})
console.log(totalAmount)



// ✅ Expected Output:

// ['Ali', 'Sara']


let users = ['Ali', 'Sara', 'Zoya', 'Ali', 'Zara', 'Sara'];

let duplicate=users.filter((name,index,arr)=>{
    return arr.indexOf(name) !== arr.lastIndexOf(name) && arr.indexOf(name) === index;

})
console.log(duplicate)


// ✅ Expected Output:
// // 'Pen'

let orders = [
  { product: 'Pen', qty: 10 },
  { product: 'Notebook', qty: 5 },
  { product: 'Pen', qty: 15 },
  { product: 'Bag', qty: 1 },
  { product: 'Notebook', qty: 10 }
];
let total = orders.reduce((acc,{product,qty})=>{
    acc[product]=(acc[product]||0)+qty
    return acc
},{});
let soldMore = Object.entries(total).reduce((max,curr)=>{
    return curr[1]>max[1]?curr:max;
})[0];
console.log(soldMore)