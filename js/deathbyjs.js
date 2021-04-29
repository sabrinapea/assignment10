//STEP 1
// let dataString = prompt('input a word');
// function alphabetizeMe(inputString) {
//     return inputString.split('').sort().join('');  
// }
// console.log(alphabetizeMe(dataString));

//STEP 2
// let userInput = prompt('Input a phrase');
// function firstToUpperCase(phrase) {
//     return phrase.replace(/\b[a-zA-Z]/g, function(letter) {
//         return letter.toUpperCase();
//     });
// }
// console.log(firstToUpperCase(userInput));

//STEP 3
// let userInput = prompt('Input your phrase here:');
// function vowelFinder (phrase) {
//     return phrase.match(/[aeiou]/g).length;   
// }
// console.log(vowelFinder(userInput));

//STEP 4
// function makeid(l) {
// let text = "";
// let dataList = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
// for (let i = 0; i < l; i++ ) { 
//     text += dataList.charAt(Math.floor(Math.random() * dataList.length));
// }
// return text;
// }
// console.log(makeid(8)); 

//STEP 5
let userInput = prompt("Enter country names separated by commas:");
function getLongest(inputString) {
    let countryNames = inputString.split(',');
    let longestName = countryNames[0];
    for(let countryName of countryNames) {
        if (countryName.length > longestName.length) {
            longestName = countryName;
        }
    }
    return longestName;
}
console.log(getLongest(userInput));