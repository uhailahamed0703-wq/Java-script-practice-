let products = [
    {name:"Bed",price:300000,stock:10},
    {name:"Pillow",price:50000,stock:3},
    {name:"table",price:250000,stock:4},
    {name:"chair",price:19000,stock:8},
];

let totalValue = 0;
let lowStock = [];

for (let i = 0; i < products.length; i++) {
    totalValue = totalValue + (products[i].price * products[i].stock);

    if (products[i].stock < 5) {
        lowStock.push(products[i].name);
    }
}

console.log("Total Inventory Value:", totalValue);
console.log("Low Stock Products:", lowStock);