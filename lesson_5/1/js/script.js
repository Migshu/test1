let menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu .menu-item'),
    li = document.createElement('li'),
    bodyBg = document.getElementsByTagName('body')[0],
    column = document.querySelectorAll('.column'),
    title = document.getElementById('title'),
    div = document.querySelectorAll('.column div'),
    rompt = document.getElementById('prompt');
    
bodyBg.style.backgroundImage = "url(img/apple_true.jpg)";

li.classList.add('menu-item');
menu.insertBefore(menuItem[2], menuItem[1]);
menu.appendChild(li);

li.textContent = "Пятый пункт";

title.textContent = "Мы продаем только подлинную технику Apple";

column[1].removeChild(div[1]);


let question = prompt("Как Вы относитесь к технике Apple?", "");

rompt.textContent = question;

