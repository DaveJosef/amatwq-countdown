const deadline = new Date('feb 17, 2023 15:00:00');

function getDaysFrom(ms) {
    return (Math.floor(ms / (1000 * 60 * 60 * 24)));
}

function getHoursFrom(ms) {
    return (Math.floor((ms % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
}

function getMinutesFrom(ms) {
    return (Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60)));
}

function getSecondsFrom(ms) {
    return (Math.floor((ms % (1000 * 60)) / (1000)));
}

function format(time) {
    return time < 10 ? `0${time}` : time;
}

function getDisplay() {
    
    return {
        days: document.getElementById('days'),
        hours: document.getElementById('hours'),
        minutes: document.getElementById('minutes'),
        seconds: document.getElementById('seconds'),
    };

}

function getDisplayB() {
    
    return {
        daysB: document.getElementById('days-b'),
        hoursB: document.getElementById('hours-b'),
        minutesB: document.getElementById('minutes-b'),
        secondsB: document.getElementById('seconds-b'),
    };

}

function writeCountdown(ms) {

    const { days, hours, minutes, seconds } = getDisplay();

    days.innerText = format(getDaysFrom(ms));
    hours.innerText = format(getHoursFrom(ms));
    minutes.innerText = format(getMinutesFrom(ms));
    seconds.innerText = format(getSecondsFrom(ms));

}

function writeCountdownB(ms) {

    const { daysB, hoursB, minutesB, secondsB } = getDisplayB();

    daysB.innerText = format(getDaysFrom(ms));
    hoursB.innerText = format(getHoursFrom(ms));
    minutesB.innerText = format(getMinutesFrom(ms));
    secondsB.innerText = format(getSecondsFrom(ms));

}

function scrollDown(digit) {
    digit.classList.remove = 'scroll-up';
}

function scrollUp(digit) {
    digit.classList.add = 'scroll-up';
}

function scrollDigits(ms) {

    const { days, hours, minutes, seconds } = getDisplay();

    const { daysB, hoursB, minutesB, secondsB } = getDisplayB();

    writeCountdownB(ms);

    scrollUp(days);
    scrollUp(daysB);
    scrollUp(hours);
    scrollUp(hoursB);
    scrollUp(minutes);
    scrollUp(minutesB);
    scrollUp(seconds);
    scrollUp(secondsB);

    const displays = document.getElementsByClassName('box-digits');
    displays[0].removeChild(days);
    displays[1].removeChild(hours);
    displays[2].removeChild(minutes);
    displays[3].removeChild(seconds);

    daysB.id = 'days';
    hoursB.id = 'hours';
    minutesB.id = 'minutes';
    secondsB.id = 'seconds';

    const { newDays, newHours, newMinutes, newSeconds } = createDisplayB();
    displays[0].appendChild(newDays);
    displays[1].appendChild(newHours);
    displays[2].appendChild(newMinutes);
    displays[3].appendChild(newSeconds);

}

function createDigitB(id) {

    const digit = document.createElement('p');
    digit.classList.add('box');
    digit.classList.add('time-unit__digits');
    digit.id = `${id}-b`;
    return digit;

}

function createDisplayB() {

    return {
        newDays: createDigitB('days'),
        newHours: createDigitB('hours'),
        newMinutes: createDigitB('minutes'),
        newSeconds: createDigitB('seconds'),
    };

}

setInterval(() => {
        
    const now = new Date().getTime();

    const timeRemaining = deadline - now;

    scrollDigits(timeRemaining);

}, 1000);
