'use strict';

let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", "");
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

    while (isNaN(money) || money == "" || money == null) {
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
    savings: true,
    chooseExpenses: function () {
        for (let i = 0; i < 2; i++) {
            let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
                b = +prompt("Во сколько обойдется?", "");

            if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null &&
                a != '' && b != '' && a.length < 50) {
                console.log("expanses done");
                appData.expenses[a] = b;
            } else {
                alert("Введено неверное значение! Будьте внимательны. Попробуйте еще раз)");
                i--;
            }
        }
    },
    chooseOptExpenses: function () {
        for (let i = 1; i < 4; i++) {
            let a = prompt("Статья необязательных расходов", "");
            if ((typeof (a)) === 'string' && (typeof (a)) != null &&
                a != '' && a.length < 50) {
                console.log("optExpenses done");
                appData.optionalExpenses[i] = a;
            } else {
                alert("Введено неверное значение! Будьте внимательны. Попробуйте еще раз)");
                i--;
            }
        }
    },
    detectDayBudget: function () {
        appData.daylyBudget = (appData.budget / 30).toFixed();
        alert("Ваш бюджет на 1 день:" + " " + appData.daylyBudget + " рублей")
    },
    detectLevel: function () {
        if (appData.daylyBudget <= 100) {
            console.log("Минимальный уровень достатка");
        } else if (appData.daylyBudget > 100 && appData.daylyBudget < 2000) {
            console.log("Средний уровень достатка");
        } else if (appData.daylyBudget >= 2000) {
            console.log("Высокий уровень достатка");
        } else {
            console.log("Произошла ошибка");
        }
    },
    checkSavings: function () {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма Ваших накоплений?"),
                percent = +prompt("Под какой процент?");

            appData.monthIncome = (save / 100 / 12 * percent).toFixed(2);
            alert("Доход в меся с Вашего депозита: " + appData.monthIncome);
        }
    },
    chooseIncome: function () {
        for (let i = 0; i < 1; i++) {
            let items = prompt("Что может принести Вам дополнительный доход? (Перечислите через запятую)", '');
            if ((typeof (items)) === 'string' && (typeof (items)) != null &&
                items != '' && items.length < 50) {
                console.log("Income done");
                appData.income = items.split(', ');
                appData.income.push(prompt('Может быть, что-то еще?', ''));
                appData.income.sort();
            } else {
                alert("Введено неверное значение! Будьте внимательны. Попробуйте еще раз)");
                i--;
            }

            appData.income.forEach(function (item, i) {
            console.log((i + 1) + ': ' + item);
            });
        }
    }
};

function contaneAppData() {
    for(let key in appData) {
        console.log("Наша программа включает в себя данные: " + key);
    }
}

contaneAppData();

console.log(appData);