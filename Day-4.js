// ✅ Expected Output:
// ['INV-1001', 'INV-1002', 'INV-1003', 'INV-1004']


let invoices = [1001, 1002, 1003, 1004];
let afterPrefix = invoices.map(x => "INV-"+ x)
console.log(afterPrefix)