// // Expected Output: ['Laptop', 'Mobile', 'Watch']

// let products = ['Laptop', 'Mobile', 'Tablet', 'Camera', 'Watch'];
// let result = products.splice(0,3)
// console.log(result)


// // Expected Output: ['Ali', 'Nina', 'Omar', 'Sara', 'Zoya']

// let students = ['Ali', 'Sara', 'Zoya'];
// let addStudents = students.splice(1,0,"Nina","Omar")
// console.log(students)


// // Expected Output: ['Zainab', 'Ali', 'Farhan']

// // let scores = ['Zainab', 'Ali', 'Farhan', 'Nida', 'Ayaan'];
// // let  topStudents= scores.splice(0,3)
// // console.log(topStudents)



// // Expected Output: [390, 310]

// let sales = [220, 300, 280, 150, 400, 390, 310];
// let lastTwoDays= sales.splice(-2)
// console.log(lastTwoDays)



// // Expected Output: [{name: 'Ahmed', active: true}, {name: 'John', active: true}]

// let users = [
//   {name: 'Ahmed', active: true},
//   {name: 'Mira', active: false},
//   {name: 'John', active: true},
// ];

// const activeUsers = users.filter(function(x){
//    if(x.active == true ){
//     return x;
//    }
// })
// console.log(activeUsers)


// // Expected Output: ['1234567890', '9876543210']

// let phoneNumbers = ['1234567890', '12345', '9876543210', '678901234'];
// let validateNumbers = phoneNumbers.filter(x=>x.length===10)
// console.log(validateNumbers)


// Expected Output: [118, 236, 354]

// let prices = [100, 200, 300];
// let gstPrices = prices.map(x=>x*1.18)

// console.log(gstPrices)

// // Expected Output: ['google.com', 'amazon.com', 'microsoft.com']

// let sites = ['google', 'amazon', 'microsoft'];
// let website=sites.map(x=>x + ".com")
// console.log(website)


// // Expected Output: 2896

// let cart = [499, 1299, 299, 799];
// let totalPrice= cart.reduce(function(acc,curr){
//     acc= acc+curr;
//     return acc;
// },0)
// console.log(totalPrice)


// // Expected Output: { A: 3, B: 2, C: 1 }

// let votes = ['A', 'B', 'A', 'C', 'B', 'A'];

// let count = votes.reduce(function(acc,curr){
//     if(acc[curr]){
//         acc[curr]++;
//     }else{
//         acc[curr]=1
//     }
//     return acc;
// },{})
// console.log(count);