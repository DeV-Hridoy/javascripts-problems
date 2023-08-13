const names =["Babul","abul", "cabul", "gabul", "rabul", "abul","Babul","abul", "cabul", "gabul", "rabul", "abul","cabul" ];

function removeDuplicate(names){
    const unique =[];
    for (let i = 0; i < names.length; i++) {
        const name = names[i];
        if (unique.includes(name) === false) {
            unique.push(name);
            
        }
        
    }
    return unique;

}

const uniqueNames = removeDuplicate(names);
console.log(uniqueNames);