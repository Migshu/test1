'use strict';

let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", "");
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }
}

start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
        b = +prompt("Во сколько обойдется?", "");

        if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
             && a != '' && b != '' && a.length < 50) {
            console.log("done");
            appData.expenses[a] = b;
        } else {
            alert("Введено неверное значение! Будьте внимательны. Попробуйте еще раз)");
            i--;
        }
    }
}
chooseExpenses();

function chooseOptExpenses() {
    for (let i = 1; i < 4; i++) {
        let a = prompt("Статья необязательных расходов", "");
            if ( (typeof(a)) === 'string' && (typeof(a)) != null 
                 && a != '' && a.length < 50) {
                console.log("done");
                appData.optionalExpenses[i]  = a;
            } else {
                alert("Введено неверное значение! Будьте внимательны. Попробуйте еще раз)");
                i--;
            }
        }
}

chooseOptExpenses();

function detectDayBudget() {
    appData.daylyBudget = (appData.budget / 30).toFixed();
    alert("Ваш бюджет на 1 день:" + " "  + appData.daylyBudget + " рублей")
}

detectDayBudget()

function detectLevel() {
    if(appData.daylyBudget <= 100) {
    console.log("Минимальный уровень достатка");
    } else if (appData.daylyBudget > 100 && appData.daylyBudget < 2000) {
        console.log("Средний уровень достатка");
    } else if (appData.daylyBudget >= 2000) {
        console.log("Высокий уровень достатка");
    } else {
        console.log("Произошла ошибка");
    }
}


function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма Ваших накоплений?"),
            percent = +prompt("Под какой процент?");

        appData.monthIncome = (save/100/12*percent).toFixed(2);
        alert("Доход в меся с Вашего депозита: " + appData.monthIncome);
    }
}

checkSavings();
console.log(appData);