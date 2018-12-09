function timer() {
    let deadLine = '2019-01-01';

    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),
        seconds = Math.floor((t/1000) % 60),
        minutes = Math.floor((t/1000/60) % 60),
        hours = Math.floor((t/(1000*60*60)));
            if (seconds < 10) seconds = '0' + seconds;
            if (minutes < 10) minutes = '0' + minutes;
            if (hours < 10) hours = '0' + hours;  
        return {
            'total' : t,
            "hours" : hours,
            'minutes' : minutes,
            'seconds' : seconds
        };
          
    }

    let setClock = (id, endtime) => {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            
            updateClock = () => {
            let t = getTimeRemaining(endtime);
            hours.textContent = t.hours;
            minutes.textContent = t.minutes;
            seconds.textContent = t.seconds;
            if (t.total <= 0) {
                clearInterval(timeInterval);
                document.querySelector('.seconds').innerHTML = '00';
                document.querySelector('.minutes').innerHTML = '00';
                document.querySelector('.hours').innerHTML = '00';
            }
        };
        let timeInterval = setInterval(updateClock, 1000);
    };

    setClock('timer', deadLine);
}

module.exports = timer;