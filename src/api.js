const express = require('express');
const loginRoute = require('./router/loginRoute');

// ...

const app = express();

app.use(express.json());

app.use('/login', loginRoute);
// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
