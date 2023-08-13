const lyrics = 'Ami ekta kala pakhi, amr kew nai. boshonto kal e bondhu, bolte pari nai';

const searchString = 'Pakhi';

// const doesExist = lyrics.includes(searchString);
// const doesExist = lyrics.includes('pakhi');

const lyricsLowerCase = lyrics.toLocaleLowerCase();
const searchStringLower = searchString.toLocaleLowerCase();

const doesExist = lyricsLowerCase.includes(searchStringLower);

const doesExistInOneLine = lyrics.toLocaleLowerCase().includes(searchString.toLocaleLowerCase());

// console.log(doesExist);
// console.log(doesExistInOneLine);


// -----------------------------------------------------------------------------------
// indexOf

console.log(lyrics.indexOf('kala'));

if(lyrics.indexOf('Boshonto') !== -1){

    console.log("exists inside the string");

}

else{
    console.log('not exists inside the string');
}

// startsWith

console.log(lyrics.startsWith('ami'));

// endsWith

const fileName = 'myBash.pdf';
const otherFile = 'boroBash.png';

console.log(fileName.endsWith('png'));


