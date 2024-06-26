const daysTag = document.querySelector(".days"),
currentDate = document.querySelector(".current-date"),
prevNextIcon = document.querySelectorAll(".icons span");

let date = new Date(),

currMonth = date.getMonth(),

currYear = date.getFullYear();

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];
    const renderCalendar = () =>{
        let firstDaysofMonth = new Date(currYear , currMonth, 1).getDate(),
        lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(),
        lastDaysofMonth = new Date(currYear, currMonth, lastDateofMonth).getDate(),
        lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate();
        let liTag = "";
        for(let i = firstDaysofMonth; i > 0; i--){
            liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
        }
        for(let i = 1; i <= lastDateofMonth; i++){

            let isToday = i ===date.getDate() && currMonth === new Date().getMonth() && currYear === new Date().getFullYear() ? "active": "";
            liTag += `<li class="${isToday}">${i}</li>`;
        }
        for(let i = lastDaysofMonth; i<6; i++){
            liTag += `<li class="inactive">${i - lastDateofLastMonth + 1}</li>`;
        }
        currentDate.innerText = `${months[currMonth]} ${currYear}`;
        daysTag.innerHTML = liTag;
    }

    renderCalendar();

    prevNextIcon.forEach(icon =>{
        icon.addEventListener("click", () => {
            currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;
            if(currMonth < 0 || currMonth > 11){
                date = new Date(currYear, currMonth, new Date().getDate());
                currYear = date.getFullYear();
                currMonth = date.getMonth();
            }
            else{
                date = new Date();
            }
            renderCalendar();
        });
    });
