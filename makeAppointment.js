const months = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// create getters and setters (read about javascript hoisting)
let fowardArrrow = document.querySelector('.calendar_toggle_buttons_foward');
let backwatdArrow = document.querySelector('.calendar_toggle_buttons_prev');
// didnt work cause it was a '.' instead of '='
let sanpleDiv = '<div class="month_days_row1">';
let x = document.querySelector('.month_days_row1');
let y = document.querySelector('.month_days_row2');
let parentElement = x.parentNode; // Store the parent node
let nextSibling = x.nextSibling; // Store the next sibling node
let monthCounter = 0;

// dropdown menu code below
let dropDowns = document.querySelector('.dropdownMenu');
// calendar doesnt print since JS is bad below

    let select = document.querySelector('.select');
    let caret = document.querySelector('.caret');
    let menu = document.querySelector('.dropdownOptions');
    let options = document.querySelectorAll('.dropdownOptions li'); // remember to use querySELECTORALL when dealing muliple 
    let selected = document.querySelector('.selectedElement');
    
    select.addEventListener('click', () => {
        select.classList.toggle('select-clicked');
        caret.classList.toggle('caret-rotate');
        menu.classList.toggle('dropdownOptions-open');
    });
    // calendar doesnt print since JS is bad below

    options.forEach(option => {
        option.addEventListener('click', ()=>{
            selected.innerText = option.innerText;
            select.classList.remove('select-clicked');
            caret.classList.remove('caret-rotate');
            menu.classList.remove('dropdownOptions-open');
            options.forEach(option => {
                option.classList.remove('active');
            });
            option.classList.add('active');
        })
    });

backwatdArrow.addEventListener('click', () => {
    monthCounter--;
    modifyCalendar(months[monthCounter], monthCounter);
   
})
fowardArrrow.addEventListener('click', () => {
    monthCounter++;
   modifyCalendar(months[monthCounter], monthCounter);
   
    
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
    let dayCounter = 1;
    for(let i = 1; i <=5 ; i++){
  // #50C878 will be hover color for calendar
        let tempDiv = document.createElement("div");
        tempDiv.style.width = "100%";
        tempDiv.style.height = "60px";
        tempDiv.style.backgroundColor = "#b5e2ff";
        tempDiv.style.marginTop = "20px";
        tempDiv.style.display = "flex";
        tempDiv.style.alignItems = "center";
        tempDiv.style.justifyContent = "center";
        let newDiv = document.querySelector(`.month_days_row${i}`); // this is the parent class
        newDiv.appendChild(tempDiv);
        for(let j = 0; j < 7; j++){
            // check if day # match and that the counter does not exceed the max # of days for specific months
            //let x = "69";
            // use add event listner in if statements when the number is clicked to highlight
            let date = `${months[0]} ${dayCounter}, 25`;
            let newSelectedDate = document.querySelector(`.listElement${j}Row${i}`);
            let currentMonthDay = getCurrentDay(date);
            let dayNumID = getCurrentDayNum(date);
            if(dayNumID == j){
                
               
                let createdListItem = document.querySelector(`.listElement${j}Row${i}`);
                createdListItem.style.display = "inline-block";
                createdListItem.style.margin = "32px";
                createdListItem.style.fontSize = "1.1rem";
                createdListItem.style.cursor = "pointer";
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
                    let createdListItem = document.querySelector(`.listElement${j}Row${i}`);
                    createdListItem.style.display = "inline-block";
                    createdListItem.style.margin = "32px";
                    createdListItem.style.fontSize = "1.1rem";
                    createdListItem.innerHTML = `${prevMonthDay}`;
                    tempDiv.appendChild(createdListItem);
                }
                else{
                    let createdListItem = document.querySelector(`.listElement${j}Row${i}`);
                    createdListItem.style.display = "inline-block";
                    createdListItem.style.margin = "32px";
                    createdListItem.style.fontSize = "1.1rem";
                    createdListItem.innerHTML = "NA";
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


let currentSelectedDate = document.querySelectorAll(`.calendarList li`);
    currentSelectedDate.forEach(selectedDate => {
    selectedDate.addEventListener('click', () => {
        currentSelectedDate.forEach(selectedDate => {
         selectedDate.classList.remove('calendar_active');
        });
    selectedDate.classList.add('calendar_active');
    });
})


let calendarDates = (monthString) => {
    let currentMonth = new Date('January 1, 25');
    let currentDay = currentMonth.getDate();
    let currenyDayWeekNum = currentMonth.getDay();
}
let modifyCalendar = (month, monthsArrayIndex) => {
    let dayCounter = 1;
    let currentMonth = document.querySelector('.monthYear');
    currentMonth.innerHTML = month + " 2025";
for(let i = 1; i <= 5; i++){


    for(let j = 0; j < 7; j++){
            let date = `${months[monthsArrayIndex]} ${dayCounter}, 25`;
            let currentMonthDay = getCurrentDay(date);
            let dayNumID = getCurrentDayNum(date);
            if(dayNumID == j){
                let createdListItem = document.querySelector(`.listElement${j}Row${i}`);
                createdListItem.innerHTML = `${currentMonthDay}`;
                dayCounter = dayCounter + 1;
            }
            else{
                let tempDate = new Date(date);
                let month = tempDate.toLocaleString('default', {month: 'long'});
                if(month == "January"){
                    let tempDate = new Date();
                    tempDate.setFullYear(2024, 1, 0);
                    let prevMonthlastDay = tempDate.getDate();
                    let dateCalc = (dayNumID - 1) - j; // might cause problems
                    let prevMonthDay = prevMonthlastDay - dateCalc;
                    let createdListItem = document.querySelector(`.listElement${j}Row${i}`);
                    createdListItem.innerHTML = `${prevMonthDay}`;
                }
                else{
                    let createdListItem = document.querySelector(`.listElement${j}Row${i}`);
                    createdListItem.style.margin = "29px"
                    createdListItem.innerHTML = "NA";
                   
                }
               
            }
    }
}
}
document.querySelector('.appointmentConfirmationDiv').style.display = "none";

let appointmentConfirmation = () => {
    let temp = document.querySelector('.inputBox');
    let data = temp.value;
    document.querySelector('.appointmentConfirmationDiv').style.display = "block";
    let name = document.querySelector('.customerName');
    let newText = document.createTextNode(data + "!");
    name.appendChild(newText);    
    var disableBackgroundd = document.createElement('div');
    disableBackgroundd.setAttribute('class', 'overlay');
    document.body.appendChild(disableBackgroundd);
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