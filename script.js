let modeBtn=document.querySelector(".mode")
let body=document.querySelector("body")
let currmode="light";

modeBtn.addEventListener("click",()=>{
    if(currmode==="light"){
        currmode="dark"
        body.classList.add("dark")
        body.classList.remove("light")
    }
    else{
        currmode="light"
        body.classList.add("light")
        body.classList.remove("dark")
    }
})
const months=[
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
    "December",
]

const weekdays=[
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",

]

document.addEventListener('DOMContentLoaded', () => {
    const deadline = new Date('May 27, 2024 11:30:00').getTime();

    const daysElement = document.querySelector('.DAYS');
    const hoursElement = document.querySelector('.HOURS');
    const minutesElement = document.querySelector('.MIN');
    const secondsElement = document.querySelector('.SECS');

    function updateCountdown() {
        const now = new Date().getTime();
        const timeLeft = deadline - now;

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        daysElement.textContent = days;
        hoursElement.textContent = hours;
        minutesElement.textContent = minutes;
        secondsElement.textContent = seconds;

        if (timeLeft < 0) {
            clearInterval(countdownInterval);
            document.querySelector('.giveaway').textContent = "The giveaway has ended!";
            daysElement.textContent = "0";
            hoursElement.textContent = "0";
            minutesElement.textContent = "0";
            secondsElement.textContent = "0";
        }
    }

    const countdownInterval = setInterval(updateCountdown, 1000);
    updateCountdown();
});
