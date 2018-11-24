'use strict';

let money = prompt("Ваш бюджет на месяц?", ""),
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

let appData = {
    budget: money,
    timeData: time,
    expenses: {"answer1":"answer3", "answer2":"answer4"},
    optionalExpenses: {},
    income: [],
    savings: false
};
let answer1 = prompt("Введите обязательную статью расходов в этом месяце", ""),
    answer2 = prompt("Введите обязательную статью расходов в этом месяце", ""),
    answer3 = prompt("Во сколько обойдется?", ""),
    answer4 = prompt("Во сколько обойдется?", "");

let daylyBudget = money / 30;

alert("Ваш бюджет на 1 день:" + " "  + daylyBudget + " рублей");
