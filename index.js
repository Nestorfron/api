const express = require('express');
const oas3Tools = require('oas3-tools');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Configuración de Swagger
const options = {
    routing: {
        controllers: path.join(__dirname, './controllers')
    }
};

// Cargar configuración de OpenAPI
const expressAppConfig = oas3Tools.expressAppConfig(path.join(__dirname, 'api/openapi.yaml'), options);
const swaggerApp = expressAppConfig.getApp();

// Ruta para Swagger UI
app.use('/docs', swaggerApp);

// Ruta principal
app.get('/', (req, res) => {
  res.send('¡Hola, Mundo! API en funcionamiento.');
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
    console.log(`Swagger UI disponible en http://localhost:${port}/docs`);
});
