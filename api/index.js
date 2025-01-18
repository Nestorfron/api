'use strict';

var path = require('path');
var oas3Tools = require('oas3-tools');
var express = require('express');
var app = express();

// Configuración de Swagger y OpenAPI
var options = {
    routing: {
        controllers: path.join(__dirname, './controllers')
    },
};

var expressAppConfig = oas3Tools.expressAppConfig(path.join(__dirname, 'api/openapi.yaml'), options);
var swaggerApp = expressAppConfig.getApp();

// Ruta para Swagger UI
app.use('/docs', swaggerApp);

// Función exportada para Vercel (función serverless)
module.exports = (req, res) => {
    // Si es una solicitud GET en la raíz, redirigimos a Swagger UI
    if (req.method === 'GET' && req.url === '/') {
        res.redirect('/docs');
    } else {
        // Pasar otras solicitudes al servidor de Swagger
        swaggerApp(req, res);
    }
};
