let today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();

let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

let monthAndYear  = document.getElementById("monthAndYear");

let yearMonthText = document.createTextNode(months[currentMonth] + " " + currentYear)
monthAndYear.appendChild(yearMonthText)

const calendar = document.querySelector("#app-calendar");

const isWeekend = day =>{
    //0 when it's sunday, 6 when it's saturday
    return day % 7 === 0 || day % 7 === 6;
}

const getDayName = day =>{
    
    const date = new Date(2018, 0, day);

    return new Intl.DateTimeFormat("en-US", { weekday : "short" }).format(date);
}

showMonthAndYear(currentMonth, currentYear);

function showMonthAndYear(month, year){
    // let yearMonthtext = document.createTextNode(months[month] + " " + year);
    // currentMonthAndYear.appendChild(yearMonthtext)
}

for(let day = 1; day <= 31; day++){

    const weekend = isWeekend(day);    

    let name = "";

    if(day <= 7){
        let dayName = getDayName(day);
        name = `<div class="name">${dayName}</div>`;
    }

    calendar.insertAdjacentHTML("beforeend", 
    `<div class="day ${weekend? "weekend" : ""}">
        ${name}
        ${day}
    </div>`);
}

document.querySelectorAll("#app-calendar .day").forEach(
    day =>{
        day.addEventListener("click", event =>{
            console.log(event.currentTarget)
            event.currentTarget.classList.toggle("selected");
        })
    }
)