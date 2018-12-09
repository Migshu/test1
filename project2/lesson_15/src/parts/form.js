function form() {
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
}

module.exports = form;