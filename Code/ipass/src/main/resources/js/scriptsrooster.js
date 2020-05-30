let today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();

let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

let monthAndYear = document.getElementById("monthAndYear");

const calendar = document.querySelector("#app-calendar");

setCalendar(currentMonth, currentYear);
setMonthYearText();
setAllEventListeners();

function previous() {
    currentYear = (currentMonth === 0) ? currentYear - 1 : currentYear;
    currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
    setCalendar(currentMonth, currentYear);
    setMonthYearText();
    setAllEventListeners();
}

function next() {
    currentYear = (currentMonth === 11) ? currentYear + 1 : currentYear;
    currentMonth = (currentMonth + 1) % 12;
    setCalendar(currentMonth, currentYear);
    setMonthYearText();
    setAllEventListeners();
}

function jumpToToday() {
    today = new Date();
    currentMonth = today.getMonth();
    currentYear = today.getFullYear();
    setCalendar(currentMonth, currentYear);
    setMonthYearText();
    setAllEventListeners();
}

function setMonthYearText() {
    let yearMonthText = document.createTextNode(months[currentMonth] + ", " + currentYear)
    monthAndYear.innerHTML = "";
    monthAndYear.appendChild(yearMonthText)
}

function setCalendar(month, year) {
    let firstDay = new Date(year, month);
    let daysInMonth = 32 - (new Date(year, month, 32)).getDate();

    calendar.innerHTML = "";

    let date = 1;
    let firstDayOfTheMonth = new Date(firstDay.getFullYear(), firstDay.getMonth(), 0).getDay();

    for (let row = 0; row < 6; row++) {

        for (let column = 0; column <= 6; column++) {
            let result = "";

            //add empty 'cells'
            if ((row === 0 && column < firstDayOfTheMonth) || date > daysInMonth) {
                result = `<div class="day gray">
                </div>`;
            } else {
                //add filled 'cells'
                result = `<div data-modal-target="#modal" class="day">
                    ${date}
                </div>`;
                date++;
            }

            //object is created
            calendar.insertAdjacentHTML("beforeend",
                result);
        }
    }
}

function setCurrentDates(){
    
}

function setAllEventListeners() {
    document.querySelectorAll("#app-calendar .day").forEach(
        day => {
            day.addEventListener('click', () => {
                console.log(event.currentTarget)
                const modal = document.querySelector(day.dataset.modalTarget)
                openModal(modal)
            })
        })

    document.querySelectorAll("[data-close-button]").forEach(button => {
        button.addEventListener('click', () => {
            const modal = button.closest('.modal')
            closeModal(modal)
        })
    })

    document.getElementById("overlay").addEventListener('click', () => {
        document.querySelectorAll('.modal.active').forEach(modal => {
            closeModal(modal)
        })
    })
}

function openModal(modal) {
    if (modal == null) return

    modal.classList.add('active')
    overlay.classList.add('active')

}

function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
}

