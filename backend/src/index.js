const express = require('express');
const app = express();
const port = 3002;
const routes = require('./api/Endpoints');
const cors = require('cors');


app.use(express.json());

app.use(express.urlencoded({ extended: true}));

app.use



app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))