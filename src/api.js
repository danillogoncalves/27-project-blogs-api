const express = require('express');
const loginRoute = require('./router/loginRoute');
const usersRoute = require('./router/usersRoute');
const categoryRoute = require('./router/categoryRoute');
const postsRoute = require('./router/postsRoute');

// ...

const app = express();

app.use(express.json());

app.use('/login', loginRoute);
app.use('/user', usersRoute);
app.use('/categories', categoryRoute);
app.use('/post', postsRoute);
// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
