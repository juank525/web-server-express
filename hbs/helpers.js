const hbs = require('hbs');

//helpers
hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear();
});


hbs.registerHelper('mayusculas', (texto) => {
    return texto.toUpperCase();
});