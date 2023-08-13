let first =5;
let second =7;

console.log(first , second);

// approch 1------------------------------
const temp= first;

// console.log(temp);

// first = second;
// second = temp;

// console.log(first, second);


// approch 2 ----- Destructuring--------------------------

[first , second] = [second , first];

console.log(first , second);