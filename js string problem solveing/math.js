const result = Math.pow(3 , 8);

// console.log(result);

const num1 = 25;
const num2 = 45;

const gap = Math.abs(num1-num2);

if (gap  < 5) 
{
    console.log("you guys can be friends");
    
}

else{
    console.log("you guys cann't together");
}


// ---------------------------------------------------------


const number = 2.4568;

const fullNumber = Math.round(number);

// console.log(fullNumber);

const result2 =Math.ceil(2.00001);
const result3 =Math.floor(452.5565);



console.log(result2);
console.log(result3);

// --------------------
// random

// console.log(Math.random()); 

// const random = Math.round(Math.random()*100);

for(let i= 0; i<20 ; i++){
    const random = Math.round(Math.random()*6);

    console.log(random);
}