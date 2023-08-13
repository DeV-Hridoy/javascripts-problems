function findPrimeNumbers(arr) {
    if (!Array.isArray(arr)) {
        return "please provide an array";
    }else{
        let primeNum=[];
        for(let item of arr){
            if (item >1) {
                let isPrime =true;

                for(let i = 2;i < item;i++){

                    if (item % i ===0) {

                        isPrime = false;
                        break;
                    }
                }
                if (isPrime === true) {
                    
                    primeNum.push(item);
                }
            }
        }
        return primeNum;
    }
}

const numbers = [4,7,5,8,11,9,2,10];

console.log(findPrimeNumbers(numbers));