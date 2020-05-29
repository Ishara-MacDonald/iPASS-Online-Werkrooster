let today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();

let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

let monthAndYear  = document.getElementById("monthAndYear");

const calendar = document.querySelector("#app-calendar");

const isWeekend = day =>{
    //0 when it's sunday, 6 when it's saturday
    return day % 7 === 0 || day % 7 === 6;
}

showMonthAndYear(currentMonth, currentYear);
setMonthYearText();

function previous(){
    currentYear = (currentMonth === 0) ? currentYear - 1 : currentYear;
    currentMonth = (currentMonth === 0)? 11 : currentMonth - 1;
    showMonthAndYear(currentMonth, currentYear);
    setMonthYearText();
}

function next(){
    currentYear = (currentMonth === 11) ? currentYear + 1 : currentYear;
    currentMonth = (currentMonth + 1) % 12;
    showMonthAndYear(currentMonth, currentYear);
    setMonthYearText();
}

function jumpToToday(){
    today = new Date();
    currentMonth = today.getMonth();
    currentYear = today.getFullYear();
    showMonthAndYear(currentMonth, currentYear);
    setMonthYearText();
}

function setMonthYearText(){
    let yearMonthText = document.createTextNode(months[currentMonth] + ", " + currentYear)
    monthAndYear.innerHTML = "";
    monthAndYear.appendChild(yearMonthText)
}


function showMonthAndYear(month, year){
    let firstDay = new Date(year, month);
    let daysInMonth = 32 - (new Date(year, month, 32)).getDate();

    calendar.innerHTML = "";

    let date = 1;
    let firstDayOfTheMonth = new Date(firstDay.getFullYear(), firstDay.getMonth(), 0).getDay();

    for(let row = 0; row < 6; row++){

        for(let column = 0; column <= 6; column++){
            const weekend = isWeekend(date);
            let result = "";

            //add empty 'cells'
            if((row === 0 && column < firstDayOfTheMonth )|| date > daysInMonth){
                result = `<div class="day gray">
                </div>`;
            }else{
                //add filled 'cells'
                result = `<a href="voegwerktijdtoe.html"><div class="day ${weekend? "weekend" : ""}">
                    ${date}
                </div></a>`;
                date++;              
            }

            //object is created
            calendar.insertAdjacentHTML("beforeend",
                result);            
        }
    }

document.querySelectorAll("#app-calendar .day").forEach(
        day =>{
            day.addEventListener("click", event =>{
                console.log(event.currentTarget)
                event.currentTarget.classList.toggle("selected");
            })
        }
    )
}

