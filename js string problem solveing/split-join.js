const lyrics =
  "Ami ekta kala pakhi, amr kew nai. boshonto kal e bondhu . bolte pari nai";
const parts = lyrics.split(" ");
const sentences = lyrics.split(".");
const chars = lyrics.split("");

// console.log(parts);
// console.log(sentences);
// console.log(chars);

const partial = lyrics.slice(5, 12);
// console.log(partial);

const partial2 = lyrics.substring(5, 12);

// console.log(partial2);

const lines = [
  "Ami ekta kala pakhi",
  "amr kew nai",
  "boshonto kal e bondhu",
  "bolte pari nai",
];
const newSong = lines.join('+ ');
console.log(newSong);
