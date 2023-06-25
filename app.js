
const countDown = () => {
    const endDate = new Date("jun 29, 2023 00:00:00").getTime()
    const nowDate = new Date().getTime()

    const difference = endDate - nowDate;

    const seconds = 1000
    const minuts = seconds * 60
    const hours = minuts * 60
    const day = hours * 24

    let timeDays = Math.floor(difference / day)
    let timeHours = Math.floor((difference % day) / hours)
    let timeMinuts = Math.floor((difference % hours) / minuts)
    let timeSeconds = Math.floor((difference % minuts) / seconds)

    timeDays = timeDays < 10 ? "0 " + timeDays : timeDays
    timeHours = timeHours < 10 ? "0 " + timeHours : timeHours
    timeMinuts = timeMinuts < 10 ? "0 " + timeMinuts : timeMinuts
    timeSeconds = timeSeconds < 10 ? "0 " + timeSeconds : timeSeconds

    document.getElementById("days").innerHTML = timeDays;
    document.getElementById("hours").innerHTML = timeHours;
    document.getElementById("minuts").innerHTML = timeMinuts;
    document.getElementById("seconds").innerHTML = timeSeconds;
}

setInterval(countDown, 1000)