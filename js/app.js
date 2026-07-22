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

// const studentList = [
//     {id:"001",name:"saman"},
//     {id:"002",name:"kamal"},
//     {id:"003",name:"wimal"},
//     {id:"004",name:"ranil"}
// ];


// let student = studentList.find(student=>student.id==="003");

// console.log(student);

fetch("https://fakestoreapi.com/products").then(res=>res.json()).then(data=>{

    let output = "";

    data.forEach(product => {

        output += `
                <div class="col-md-4 col-lg-3 mb-4">
                    <div class="card h-100 shadow">

                        <img src="${product.im}"
                             class="card-img-top p-3"
                             style="height:250px; object-fit:contain;"
                             alt="${product.title}">

                        <div class="card-body d-flex flex-column">

                            <h5 class="card-title">${product.title}</h5>

                            <p class="card-text">
                                <strong>Category:</strong> ${product.category}
                            </p>

                            <p class="card-text">
                                <strong>Price:</strong> $${product.price}
                            </p>

                            <p class="card-text text-warning">
                                ⭐ ${product.rating.rate}
                                (${product.rating.count} Reviews)
                            </p>

                            <button class="btn btn-primary mt-auto">
                                Buy Now
                            </button>

                        </div>

                    </div>
                </div>
            `;
        
    });

    document.getElementById("products").innerHTML = output;
})
.catch(error => {
    console.log(error);
})