window.addEventListener('DOMContentLoaded',  () => {

    'use strict';
    let tabs = require('./parts/tabs'),
        timer = require('./parts/timer'),
        modal = require('./parts/modal'),
        form = require('./parts/form'),
        slider = require('./parts/slider'),
        calc = require('./parts/calc');

    
    calc();
    form();
    modal();
    slider();
    tabs();
    timer();
});
