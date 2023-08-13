function findBadData(arr){

    if(!Array.isArray(arr)){

        return "Please Provide me a array with number";
    }else{
        let badData= 0;
        // for (let i = 0; i < arr.length; i++) {
        //     if(typeof arr[i]!=="number"){
        //         return "Please provide me an array of number";
        //     }else{
        //         if (arr[i] < 0) {
        //             badData++;
        //         }
        //     }
            
        // }

        for (let item of arr) {
            if (typeof item !=="number") {
                return "please provide an array of number"
            }else{
                if (item < 0) {

                    badData++;
                }
            }
            
        }
        return badData;
    }
}
const x =[1,2,3,4,5,-6,-7];
console.log(findBadData(x));