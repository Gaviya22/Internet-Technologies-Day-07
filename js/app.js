// const customerList = [];

// customerList.push(1);
// customerList.push(2);
// customerList.push(3);

// let revAr = customerList.reverse();

// console.log(revAr);

// let inStockItems = products.filter(
//     function (product) {
//         return productFilter(product)
//     }
// )

// let inStockItems = product.filter(product => product.inStock == false);

// function getSum(num1, num2){
//     return num1+num2;
// }

// getSum(10,20);

// let getSum = function (num1,num2){
//     return num1+num2;
// }

// console.log(getSum(10,20));

// let getSum = (num1, num2) => {
//     return num1+num2;
// }

// console.log(getSum(10,20));

// let sample = txtValue => {
//     return txtValue;
// }

// console.log(sample("Hi saman"));

// let getSum = (num1, num2) => num1+num2;

// console.log(getSum(10,20));

// let sample = txtValue => txtValue;

// console.log(sample("Hi saman"));

// const productsList = [
//     { name: "bun", inStock: true },
//     { name: "car", inStock: false },
//     { name: "bat", inStock: true },
//     { name: "van", inStock: false },
// ];

// productsList.forEach(product => console.log(product));

// const letterList = ["B", "A", "D", "C"];

// let sortAr = letterList.toSorted();

// console.log(sortAr);

// const employeeSalary = [75000, 25000, 45000, 55000];

// let newSalaryArray = employeeSalary.map(salary=>salary*2);

// console.log(newSalaryArray);

const studentList = [
    {id:"001",name:"saman"},
    {id:"002",name:"kamal"},
    {id:"003",name:"wimal"},
    {id:"004",name:"ranil"}
];


let student = studentList.find(student=>student.id==="003");

console.log(student);