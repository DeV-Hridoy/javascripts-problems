// homework
function maxInArray(numbers){
    let lowest = numbers[0];

    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        
        // console.log(element);

        if (element < lowest) {
            lowest = element;
            
        }
        
        
    }
    return lowest;

}

const heights=[167 , 190 , 120, 96,  165 , 137, 265];

const smallest = maxInArray(heights);

console.log("The person is ",smallest ,"cm");