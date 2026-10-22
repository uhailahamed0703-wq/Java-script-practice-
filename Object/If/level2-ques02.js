const totalPurchase = 1200000;
let discount;

if (totalPurchase >= 1000000) {
    discount = 0.20;
} else if (totalPurchase >= 500000) {
    discount = 0.10;
} else if (totalPurchase >= 250000) {
    discount = 0.05;
} else {
    discount = 0;
}

const discountAmount = totalPurchase * discount;
const finalPrice = totalPurchase - discountAmount;

console.log("Total Purchase: Rp" + totalPurchase);
console.log("Discount: " + (discount * 100) + "%");
console.log("Discount Amount: Rp" + discountAmount);
console.log("Final Price: Rp" + finalPrice);