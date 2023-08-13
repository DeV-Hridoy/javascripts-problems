let sum =0;
function sumOfNumbers(numbers){
    for(let i=0; i<numbers ; i++){
        sum+=i;
        // console.log(sum);
    }
    return sum;
}

const sumofthis= sumOfNumbers(9);
console.log(sumofthis);