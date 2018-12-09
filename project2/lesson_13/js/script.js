window.addEventListener('DOMContentLoaded',  () => {

    'use strict';
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    let hideTabContent = a => {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    };
    hideTabContent(1);

    let showTabContent = b => {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    };

    info.addEventListener('click', (e) => {
        let target = e.target;
        if (target && target.classList.contains('info-header-tab')) {
            for(let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });

    //Timer 

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
        }
        let timeInterval = setInterval(updateClock, 1000);
    }

    setClock('timer', deadLine);

    // Modal

    let container = document.querySelector('body'),
        more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay');
        
    container.addEventListener('click', (e) => {
        if(
            e.target && e.target.classList.contains('more') || e.target.classList.contains('description-btn')) {
            overlay.style.display = 'block';
            more.classList.add('more-splash');
            document.body.style.overflow = 'hidden';
        }

        if(
            e.target && e.target.classList.contains('popup-close')) {
                overlay.style.display = 'none';
                more.classList.remove('more-splash');
                document.body.style.overflow = '';
        }
    });

    //Form

    let message = {
        loading: "Загрузка...",
        success: "Спасибо! Мы скоро свяжемся с Вами.",
        failure: "Что-то пошло не так"
    };

    let mainForm = document.querySelector('.main-form'),
        form = document.querySelector('#form'),
        input = mainForm.getElementsByTagName('input'),
        inp = form.getElementsByTagName('input'),
        
        statusMessage = document.createElement('div');

        statusMessage.classList.add('status');
        
        input[0].addEventListener('input', function() {
            this.value = this.value.replace (/[^0-9+]/g, '');
        });

        inp[1].addEventListener('input', function() {
            this.value = this.value.replace (/[^0-9+]/g, '');
        });

    function sendForm(elem) {
        elem.addEventListener('submit', function(event) {
            event.preventDefault();
            elem.appendChild(statusMessage);
                let formData = new FormData(elem);

                let obj = {};
                formData.forEach(function(value, key) {
                    obj[key] = value;
                });
                let json = JSON.stringify(obj);

            function postData(data) {

                return new Promise(function(resolve,reject) {
                    let request = new XMLHttpRequest();

                    request.open('POST', 'server.php');

                    request.setRequestHeader ('Content-Type', 'application/json; charset=utf-8');

                    request.addEventListener('readystatechange', function() {
                        if (request.readyState < 4) {
                            resolve()
                        } else if(request.readyState === 4 && request.status == 200) {
                            resolve()
                        } else {
                            reject()
                        }
                    });
                    
                    request.send(json);
                
                });
            } //End postData

            function clerInput() {
                for (let i = 0; i < input.length; i++) {
                    input[i].value = '';
                }
            }

            postData(formData)
                .then(() => statusMessage.innerHTML = message.loading)
                .then(() => statusMessage.innerHTML = message.success)
                .catch(() => statusMessage.innerHTML = message.failure)
                .then(clerInput);
        });
    }

    sendForm(mainForm);
    sendForm(form);

    // Slider

    let slideIndex = 1,
         slides = document.querySelectorAll('.slider-item'),
         prev = document.querySelector('.prev'),
         next = document.querySelector('.next'),
         dotsWrap = document.querySelector('.slider-dots'),
         dots = document.querySelectorAll('.dot');

    showSlides(slideIndex);

    function showSlides(n) {

        if (n > slides.length) {
            slideIndex = 1;
        } 
        if (n < 1) {
            slideIndex = slides.length;
        }

        slides.forEach((item) => item.style.display = 'none');

         dots.forEach((item) => item.classList.remove('dot-active'));

         slides[slideIndex - 1].style.display = 'block';
         dots[slideIndex - 1].classList.add('dot-active');
    }

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }
    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    prev.addEventListener('click', function() {
        plusSlides(-1);
    });

    next.addEventListener('click', function() {
        plusSlides(1);
    });

    dotsWrap.addEventListener('click', function(event) {
        for (let i = 0; i < dots.length + 1; i++) {
            if (event.target.classList.contains('dot') && event.target == dots[i-1]) {
                currentSlide(i);
            }
        }
    });

    // Calc

    let persons = document.querySelectorAll('.counter-block-input')[0],
        restDays = document.querySelectorAll('.counter-block-input')[1],
        place = document.getElementById('select'),
        totalValue = document.getElementById('total'),
        personsSum = 0,
        daysSum = 0,
        total = 0;

        totalValue.innerHTML = 0;

        persons.addEventListener('input', function() {
            persons.value = persons.value.replace(/[^0-9]/g, '');
        });

        restDays.addEventListener('input', function() {
            restDays.value = restDays.value.replace(/[^0-9]/g, '');
        });

        const totalFun = () => {
            daysSum = +restDays.value;
            personsSum = +persons.value;
            total = daysSum * personsSum * 4000;

            if(persons.value == '') {
                totalValue.innerHTML = 0;
            } else {
                totalValue.innerHTML = total;
            }
            if (restDays.value == '' || persons.value == '') {
                totalValue.innerHTML = 0;
            } else {
                totalValue.innerHTML = total * place.options[place.selectedIndex].value;
            }
        };

        persons.addEventListener('input', totalFun);
        restDays.addEventListener('input', totalFun);
        place.addEventListener('change', totalFun);
});
