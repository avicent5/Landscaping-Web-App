const months = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let dayCounter = 1;
// create getters and setters (read about javascript hoisting)
let fowardArrrow = document.querySelector('.calendar_toggle_buttons_foward');
let backwatdArrow = document.querySelector('.calendar_toggle_buttons_prev');
// didnt work cause it was a '.' instead of '='
let sanpleDiv = '<div class="month_days_row1">';
let x = document.querySelector('.month_days_row1');
let y = document.querySelector('.month_days_row2');
let parentElement = x.parentNode; // Store the parent node
let nextSibling = x.nextSibling; // Store the next sibling node

backwatdArrow.addEventListener('click', () => {
    parentElement.insertBefore(x, nextSibling);
})
fowardArrrow.addEventListener('click', () => {
   
     x.remove();
     //parentElement.insertBefore(x, nextSibling);
    createCalendar();
   
    
})
let getCurrentDay = (date) => {
    // function gets the actual day of the month; Ex: Jan 19, 2025 -> func returns 19
    let currentDate = new Date(date);
    let currentDay = currentDate.getDate();
    return currentDay;
}
let getCurrentDayNum = (date) => {
    // function return the # that corresponds to the day; 0-6 (Sun -> Mon ...)
    let currentDate = new Date(date);
    let currentDayNum = currentDate.getDay();
    return currentDayNum;
}
let getMonthAsString = (date) => {
    let currentMonth = new Date(date);
    let monthString = currentMonth.toLocaleString('default', {monthString : 'long'})
    return monthString
}

const createCalendar = () => {
    for(let i = 1; i <=5 ; i++){
  
        let tempDiv = document.createElement("div");
        tempDiv.style.width = "100%";
        tempDiv.style.height = "60px";
        tempDiv.style.backgroundColor = "beige";
        tempDiv.style.marginTop = "20px";
        tempDiv.style.display = "flex";
        tempDiv.style.alignItems = "center";
        tempDiv.style.justifyContent = "center";
        let newDiv = document.querySelector(`.month_days_row${i}`); // this is the parent class
        newDiv.appendChild(tempDiv);
        for(let j = 0; j < 7; j++){
            // check if day # match and that the counter does not exceed the max # of days for specific months
            //let x = "69";
            let date = `${months[0]} ${dayCounter}, 25`;
            
            let currentMonthDay = getCurrentDay(date);
            let dayNumID = getCurrentDayNum(date);
            if(dayNumID == j){
                let createdListItem = document.createElement("li");
                createdListItem.style.display = "inline-block";
                createdListItem.style.margin = "32px";
                createdListItem.style.fontSize = "1.1rem";
                createdListItem.innerHTML = `${currentMonthDay}`;
                tempDiv.appendChild(createdListItem);
                dayCounter = dayCounter + 1;
            }
            else{
                // take the dayNUmID of the current date and subtract it by the counter 
                // initialize var to func and compare using if statement 
                let tempDate = new Date(date);
                let month = tempDate.toLocaleString('default', {month: 'long'});
                if(month == "January"){
                    let tempDate = new Date();
                    tempDate.setFullYear(2024, 1, 0);
                    let prevMonthlastDay = tempDate.getDate();
                    let dateCalc = (dayNumID - 1) - j; // might cause problems
                    let prevMonthDay = prevMonthlastDay - dateCalc;
                    let createdListItem = document.createElement("li");
                    createdListItem.style.display = "inline-block";
                    createdListItem.style.margin = "32px";
                    createdListItem.style.fontSize = "1.1rem";
                    createdListItem.innerHTML = `${prevMonthDay}`;
                    tempDiv.appendChild(createdListItem);
                }
                else{
                    let createdListItem = document.createElement("li");
                    createdListItem.style.display = "inline-block";
                    createdListItem.style.margin = "32px";
                    createdListItem.style.fontSize = "1.1rem";
                    createdListItem.innerHTML = "5";
                    tempDiv.appendChild(createdListItem);
                }
               
            }
          
        }
        // call a function to replace contents for each month?
        // Remodify the inner html
        // use classlist.remove ??
        //Math to printing previous calendar dates => (tempVar - 1) - current j position
        // get position of day 1 of current month that your trying to print.
        // find out last day of previous month so you can subtract
        // focus on getting January first
        // figuring out January should give you a better idea on how to tackle the rest of the months
    }
}

let calendarDates = (monthString) => {
    let currentMonth = new Date('January 1, 25');
    let currentDay = currentMonth.getDate();
    let currenyDayWeekNum = currentMonth.getDay();
}
/*
let populateCalendar = () => {
    for(let i = 1; i <= 5; i++){
        for(let j = 0; j < 7; j++ ){
            let createdListItem = document.createElement("li");
            createdListItem.style.display = "inline-block";
            createdListItem.style.margin = "25px";
            createdListItem.style.fontSize = "1.1rem";
            // if statement can check if the current index is == to the weekday number (ex: j[3] = 3(wednesday))
            createdListItem.innerHTML = `${j}`;
            let currentDiv = document.querySelector(`.month_days_row${i}`);
            currentDiv.appendChild(createdListItem);
            document.querySelector('.calendar').appendChild(currentDiv);
        }
    }
}
*/
// figure out methods to get month # (Feb = 2) how many days in a month, when does each day land (Mon ??, Tues??)

createCalendar();
//populateCalendar();


/*
 let tempDiv = document.querySelector(`.month_days_row${i}`);
        tempDiv.setAttribute("style","height: 60px");
        tempDiv.setAttribute("style", "width: 100%");
        tempDiv.setAttribute("style", "background-color: beige");
        tempDiv.setAttribute("style", "margin-top: 20px");
    }
*/