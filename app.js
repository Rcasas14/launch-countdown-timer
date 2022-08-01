const days = document.getElementById('c-days');
const hours = document.getElementById('c-hours');
const minutes = document.getElementById('c-minutes'); 
const seconds = document.getElementById('c-seconds');


const defaultDate = "14 September 2022";

const countDown = () => {
    const endDate = new Date(defaultDate);
    const dateNow = new Date();

    const totalSecs = (endDate - dateNow) / 1000;

    const totalDays = Math.floor(totalSecs /3600 /24);
    const totalHours = Math.floor(totalSecs/3600 % 24);
    const totalMins = Math.floor(totalSecs /60 % 60);
    const totalSeconds = Math.floor((totalSecs) % 60);

    console.log(totalDays, totalHours, totalMins, totalSeconds);
    days.innerText = format(totalDays);
    hours.innerText = format(totalHours);
    minutes.innerText = format(totalMins);
    seconds.innerText = format(totalSeconds);
    
}

const format = (time) => {
    return time < 10 ? `0${time}` : time;
}

countDown();

setInterval(countDown, 1000);