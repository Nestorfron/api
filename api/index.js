'use strict';

var path = require('path');
var http = require('http');
var oas3Tools = require('oas3-tools');

module.exports = (req, res) => {
    var serverPort = process.env.PORT || 8080;

    // swaggerRouter configuration
    var options = {
        routing: {
            controllers: path.join(__dirname, './controllers')
        },
    };

    var expressAppConfig = oas3Tools.expressAppConfig(path.join(__dirname, 'api/openapi.yaml'), options);
    var app = expressAppConfig.getApp();

    // Initialize the Swagger middleware
    http.createServer(app).listen(serverPort, function () {
        console.log('Your server is listening on port %d (http://localhost:%d)', serverPort, serverPort);
        console.log('Swagger-ui is available on http://localhost:%d/docs', serverPort);
    });

    // En lugar de usar http.createServer, delegamos a Vercel para manejar la solicitud
    res.status(200).send('Servidor funcionando');
};
