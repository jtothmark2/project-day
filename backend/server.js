const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');
const DB = require('./db')
const MovieController = require('./movies')
const Request = require('./request')

dotenv.config();
const db = new DB()
const movies = new MovieController(db)

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Server is running')
});

// app.post('/api/register', (req, res) => fgv(req, res));
// app.post('/api/login', (req, res) => fgv(req, res));

app.get('/api/movies', (req, res) => getMovies(new Request(db, req, res)));
app.get('/api/movies/:id', (req, res) => listMovieInfo(new Request(db, req, res))); 
app.get('/api/products', (req, res) => getProducts(new Request(db, req, res)));

// app.post('/api/order', (req, res) => fgv(req, res); mentes az order tablaba amit rendelt
// app.get('/api/order', (req, res) => fgv(req, res)); a "jegyek" lekérése

async function getMovies(request){
   const allMovies = await movies.getAll();
   return request.respondJson(allMovies);
}

async function listMovieInfo(request){
    const movieInfo = await movies.getById(request.params.id);
    return request.respondJson(movieInfo);
}

async function getProducts(request){
    const allProducts = await load_products();
    return request.respondJson(allProducts);
 }

async function load_products(){
    let sql = "SELECT * FROM products"
    let result = await db.query(sql)
    
    return result
}  

app.listen(process.env.PORT);