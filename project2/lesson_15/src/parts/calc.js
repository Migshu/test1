function calc() {
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
}

module.exports = calc;