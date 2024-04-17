const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');
const dbModule = require('./db')

dotenv.config();
const db = new dbModule()

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Server is running')
});

// app.post('/api/register', (req, res) => fgv(req, res));
// app.post('/api/login', (req, res) => fgv(req, res));
// app.get('/api/movies', (req, res) => fgv(req, res)); összes film
// app.get('/api/movie/info', (req, res) => fgv(req, res)); film info
// app.get('/api/products', (req, res) => fgv(req, res)); products listazasa
// app.post('/api/order', (req, res) => fgv(req, res); mentes az order tablaba amit rendelt
// app.get('/api/order', (req, res) => fgv(req, res)); a "jegyek" lekérése

app.listen(process.env.PORT);