const shoppingCart=[
    {name: "shoe", price: 1200},
    {name: "Shirt", price: 2200},
    {name: "Pant", price: 3200},
    {name: "belt", price: 600}
]

function totalCost(products) {
    let sum =0;
    for (let i = 0; i < products.length; i++) {
        const product = products[i];

        sum= sum + product.price;

        console.log(product);
        
    }
    return sum;
    
}

const expence = totalCost(shoppingCart);

console.log("Total Cost: ",expence);