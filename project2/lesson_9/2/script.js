'use strict';


let age = document.getElementById('age'),
    valueAge = age.value;

let user = {
    value: valueAge
};

function showUser(surname, name) {
     alert("Пользователь: " + surname + " " + name + ", возраст: " + this.value);
}
 
showUser.apply(user, ['Муромцева', 'Ирина']);

// let user = {
//     name: "John"
// };

// function sayName(surname) {
//     console.log(this);
//     console.log(this.name + surname);
// }

// console.log(sayName.call(user, 'Smith'));
// console.log(sayName.apply(user, ['Snow']));