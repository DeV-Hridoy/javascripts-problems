function factorial(number){
    let num = number;
    let result =1;
    while(num >= 1) {
        result= result * num;
        num--;

    }
    return result;

}

const fact = factorial(6);
console.log("The factorial will be", fact);