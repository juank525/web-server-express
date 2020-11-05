const express = require('express')
const app = express()
const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'))


//Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');


app.get('/', (request, response) => {
    response.render('home', {
        nombre: "Juan Carlos",
        anio: new Date().getFullYear()
    });
})

app.get('/about', (request, response) => {
    response.render('about', {
        nombre: "juan carlos"
    })
})

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port} `);
});