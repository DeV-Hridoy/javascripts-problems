const country ="Bangladesh";
const age =52;
const isIndependent =true;
const student={id :12 , class:12 , name: "agun"};
const friends=[13,14,15,16,17,18,25,21];
function add(num1, num2) {
    return num1+num2;
    
}

console.log(typeof country);
console.log(typeof age);
console.log(typeof isIndependent);
console.log(typeof student);
console.log(typeof friends);  // we cannot get array by this method. so we need to do "Array.isArray(var name)"
console.log(Array.isArray(friends));
// check array using this "console.log(Array.isArray(friends))" 
console.log(typeof add);

console.log(friends.includes(15));

if (friends.indexOf(25) !== -1) {
    
}

// concat ---------- adding with other array

const newFriendsAge =[12,14,16,15];

const allFriends = newFriendsAge.concat(friends);

console.log(allFriends);