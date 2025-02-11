const months = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let dayCounter = 1;
let dateInWords = `${months[0]} ${dayCounter}, 25`;
//console.log(dateInWords);
let xDate = new Date(dateInWords);
let dayID = xDate.getDay();
console.log(dayID);
let tempDate = new Date();
tempDate.setFullYear(2025, 2, 0);
console.log(tempDate.getDate());
let currDate  = "2009,1,25";


const date = new Date(dateInWords);  // 2009-11-10
const month = date.toLocaleString('default', { month: 'long' });
console.log(month)
if(month == "January"){
    console.log("It works!")
}