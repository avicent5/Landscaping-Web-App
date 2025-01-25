const months = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
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
        let newDiv = document.querySelector(`.month_days_row${i}`);
        newDiv.appendChild(tempDiv);
        let createdListItem = document.createElement("li");
        createdListItem.style.display = "inline-block";
        createdListItem.style.margin = "25px";
        createdListItem.style.fontSize = "1.1rem";
        createdListItem.innerHTML = `5`;
        tempDiv.appendChild(createdListItem);
        // center using flex here
        // you can modify and use the nested for loops to create calendar
        // outer loop creates the div, inner loop creates list items
    }
}
let populateCalendar = () => {
    for(let i = 1; i <= 5; i++){
        for(let j = 0; j < 7; j++ ){
            let createdListItem = document.createElement("li");
            createdListItem.style.display = "inline-block";
            createdListItem.style.margin = "25px";
            createdListItem.style.fontSize = "1.1rem";
            createdListItem.innerHTML = `${j}`;
            let currentDiv = document.querySelector(`.month_days_row${i}`);
            currentDiv.appendChild(createdListItem);
            document.querySelector('.calendar').appendChild(currentDiv);
        }
    }
}

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