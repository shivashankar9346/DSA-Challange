// Expected Output:
// [
//   { id: 101, name: 'Laptop' },
//   { id: 102, name: 'Mobile' },
//   { id: 104, name: 'Tablet' },
//   { id: 106, name: 'Camera' }
// ]


// let inventory = [
//   { id: 101, name: 'Laptop' },
//   { id: 102, name: 'Mobile' },
//   { id: 103, name: 'laptop' },
//   { id: 104, name: 'Tablet' },
//   { id: 105, name: 'MOBILE' },
//   { id: 106, name: 'Camera' }
// ];

// let filterDuplicate = inventory.filter((item,index,arr)=>{
//   let currentName = item.name.toLowerCase();
//   let beforeItems = arr.slice(0,index).map(obj=>obj.name.toLowerCase())
//   return !beforeItems.includes(currentName)

// })
// console.log(filterDuplicate)


// let store = new Set();

// let filter = inventory.filter(({name})=>{
// let lower = name.toLowerCase();
// if(store.has(lower))return false;
// store.add(lower)
// return true;
// })
// console.log(filter)



// Expected Output:

// {
//   Food: 200,
//   Transport: 120,
//   Shopping: 300
// }


let transactions = [
  { category: 'Food', amount: 120 },
  { category: 'Transport', amount: 50 },
  { category: 'Food', amount: 80 },
  { category: 'Shopping', amount: 300 },
  { category: 'Transport', amount: 70 },
];

let totalAmount = transactions.reduce((acc,{category,amount})=>{
  acc[category]=(acc[category]||0)+amount;
  return acc;
},{})
console.log(totalAmount);





