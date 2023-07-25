const express = require('express');
const app = express();

const setRoutes = require('./Router');

setRoutes(app);

app.listen(3001, () => {
    console.log('Server is running');
});