'use strict';

let money = +prompt("Ваш бюджет на месяц?", ""),
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

// for (let i = 0; i < 2; i++) {
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
//         b = +prompt("Во сколько обойдется?", "");

//         if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
//              && a != '' && b != '' && a.length < 50) {
//             console.log("done");
//             appData.expenses[a] = b;
//         } else {
//             i--;
//             alert("Введено неверное значение! Будьте внимательны. Попробуйте еще раз)")
//         };
// };

//     let i = 0;  
//         while (i < 2) {
//             i++;
//             let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
//                 b = +prompt("Во сколько обойдется?", "");
//             if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
//              && a != '' && b != '' && a.length < 50) {
//             console.log("done");
//             appData.expenses[a] = b;
//         } else {
//             alert("Введено неверное значение! Будьте внимательны. Попробуйте еще раз)");
//             i = 0;
//         }
// };

let i = 0;  
do {
    i++;
    let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
        b = prompt("Во сколько обойдется?", "");
    if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
     && a != '' && b != '' && a.length < 50) {
    console.log("done");
    appData.expenses[a] = b;
} else {
    alert("Введено неверное значение! Будьте внимательны. Попробуйте еще раз)");
    i = 0;
}
}
while (i < 2); 

appData.daylyBudget = appData.budget / 30;

alert("Ваш бюджет на 1 день:" + " "  + appData.daylyBudget + " рублей");

if(appData.daylyBudget <= 100) {
    console.log("Минимальный уровень достатка");
} else if (appData.daylyBudget > 100 && appData.daylyBudget < 2000) {
    console.log("Средний уровень достатка");
} else if (appData.daylyBudget >= 2000) {
    console.log("Высокий уровень достатка");
} else {
    console.log("Произошла ошибка");
}

console.log(appData);