const shoppingCart = [
  { name: "shoe", price: 1200, quantity: 2 },
  { name: "Shirt", price: 2200, quantity: 5 },
  { name: "Pant", price: 3200, quantity: 4 },
  { name: "belt", price: 600, quantity: 3 },
];

function totalCost(products) {
  let sum = 0;
  for (let i = 0; i < products.length; i++) {
    const product = products[i];

    const productTotal = product.price * product.quantity;

    sum = sum + productTotal;

    // console.log(product);
  }
  return sum;
}

const expence = totalCost(shoppingCart);

console.log("Total Cost: ", expence);
