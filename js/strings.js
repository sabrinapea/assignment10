//STEP 1
// let userName = prompt('What is your name?');
// alert(userName.length);

//STEP 2
// let userName = prompt('What is your name?');
// let numValue = prompt('pick a number from 0 to the length of your name:');
// alert(userName.charAt(numValue));

//STEP 3
// let firstName = prompt('What is your first name?');
// let lastName = prompt('What is your last name?');
// alert(`Your full name is: ${firstName.concat(lastName)}`);

//STEP 4
// let phrase = 'The quick brown fox jumps over the lazy dog';
// alert(phrase.indexOf('fox'));

//STEP 5
// let phrase = 'The quick brown fox jumps over the lazy fox';
// alert(phrase.lastIndexOf('fox'));

//STEP 6
// let phrase = 'The quick brown fox jumps over the lazy dog';
// let userName = prompt('What is your first and last name?');
// alert(phrase.replace('the lazy dog', userName));

//STEP 7
// let phrase = 'The quick brown fox jumps over the lazy dog';
// let userWord = prompt('Pick a word from the phrase:');
// alert(phrase.match(userWord));

//STEP 8
// let oldString = 'The quick brown fox jumps over the lazy dog';
// console.log(oldString.indexOf('the lazy dog'));
// let newString = oldString.slice(0, 30)
// alert(newString.toUpperCase());

//STEP 9
// let phrase = '     THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG     ';
// alert(phrase.trim().toLowerCase());

//STEP 10
let oldString = 'the quick brown fox jumps over the lazy dog';
let newString = (oldString.match(/^[A-Za-z]/));
alert(oldString.replace(newString, newString.toString().toUpperCase()));
