function printDetails(person) {
  if (typeof person !== "object") {
    return "please send me an object";
  } else {
    const name = person.name || "nai";
    const age  = person.age  || "nai";
    const email= person.email|| "nai";
    const bou  = person.bou  || "nai";

    return "Amr nam "+name+". amr boyosh "+age+". amr email "+email+". amr Bou "+bou+".";
  }
}
const obj = {
  name: "Mehedi",
  age: 26,
  email: "simple@gmail.com",
//   bou :"2ta"
};

console.log(printDetails(obj));
