const cart = [
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 500 },
  { name: "Headphones", price: 200 }
];

function calculateTotal(cartItems) {
  let total = 0;
  for (let i = 0; i < cartItems.length; i++) {
    total += cartItems[i].price;
  }
  return total;
}

function applyDiscount(total, discountRate) {
  if (typeof discountRate !== "number" || discountRate < 0 || discountRate > 1) {
    console.warn("applyDiscount: invalid discountRate", discountRate);
    return total;
  }
  return total - total * discountRate;
}

function generateReceipt(cartItems, total) {
  let receipt = "Items:\n";
  cartItems.forEach(item => {
    receipt += `${item.name}: $${item.price}\n`;
  });

  if (typeof total !== "number" || isNaN(total)) {
    console.error("generateReceipt: invalid total value", total);
    total = 0;
  }

  receipt += `Total: $${total.toFixed(2)}`;
  return receipt;  // ← Make sure you include this
}

// Debugging entry point
console.log("Starting shopping cart calculation...");
const total = calculateTotal(cart);
const discountedTotal = applyDiscount(total, 0.2); // 20% discount
const receipt = generateReceipt(cart, discountedTotal);

document.getElementById("total").textContent = `Total: $${discountedTotal}`;
document.getElementById("receipt").textContent = receipt;
