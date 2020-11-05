const http = require('http');

http.createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'application/json' });
    let salida = {
        nombre: 'Juan Carlos',
        apellidos: 'Peña Ruiz',
        edad: 28,
        url: request.url
    }
    response.write(JSON.stringify(salida));
    response.end();

}).listen(8080);

console.log("Escuchando puerto 80");