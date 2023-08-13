for (let i = 1; i <=50; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("Fuubar");
    }
    else if (i % 5===0) {
        console.log("Bar");
    }
    else if(i % 3 === 0 ){
        console.log("Fuu");
    }
    else{
        
        console.log(i); 
    }
}