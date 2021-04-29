//STEP 1
// let days = function(month, year) {
//     return new Date(year, month, 0).getDate();
// };
// console.log(`there are ${days(4, 2021)} days in this month`);

//STEP 2
// const today = new Date();
// console.log(today.toLocaleString('default', {month: 'long'}))

//STEP 3
// let date1 = prompt('Enter date in this format (Month xx, 2021):');
// let wkEnd = function(date1) {
//     let dt = new Date(date1);
//     if (dt.getDay()  == 6 || dt.getDay() == 0) {
//         return 'It is the weekend';
//     } else {
//         return 'It is not the weekend';
//     }
// }
// console.log(wkEnd(date1));

//STEP 4
// const today = new Date()
// const yesterday = new Date(today);
// yesterday.setDate(yesterday.getDate() - 1);
// console.log(`Today is ${today.toDateString()}`);
// console.log(`Yesterday was ${yesterday.toDateString()}`);

//STEP 5
// let today = new Date;
// day = today.getDay();
// console.log(`Today is ${today.toDateString()}`);
// let letterOfDate = today.toDateString().charAt(0);
// console.log(`This is the first letter of the today's date: ${letterOfDate}`);

