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

app.get('/api/movies', (req, res) => getMovies(new Request(db, req, res)));
app.get('/api/movies/:id', (req, res) => listMovieInfo(new Request(db, req, res)));
app.get('/api/products', (req, res) => getProducts(new Request(db, req, res)));
app.get('/api/orders', (req, res) => getOrders(new Request(db, req, res)));
app.post('/api/order', (req, res) => postOrders(new Request(db, req, res)));

app.post('/api/register', (req, res) => postRegister(new Request(db, req, res)))
app.post('/api/login', (req, res) => postLogin(new Request(db, req, res)))

app.post('/api/rate', (req, res) => postRate(new Request(db, req, res)));

async function getMovies(request){
   const allMovies = await movies.getAll();
   return request.respondJson(allMovies);
}

async function listMovieInfo(request){
    const movieInfo = await movies.getById(request.params.id);
    let sql = "SELECT id AS screening_id, date, tickets_left FROM screenings WHERE movie_id = ?"
    let result = await db.query(sql, request.params.id)
    return request.respondJson([movieInfo, result]);
}

async function getProducts(request){
    const allProducts = await load_products();
    return request.respondJson(allProducts);
 }

async function getOrders(request){
    if (!(await request.isLoggedIn)) return request.respond401()
    const allOrders = await load_orders(request.id);
    return request.respondJson(allOrders);
 }

async function load_products(){
    let sql = "SELECT * FROM products"
    let result = await db.query(sql)
    
    return result
}

async function load_orders(userId){
    let sql = "SELECT * FROM orders WHERE user_id = ?"
    let result = await db.query(sql, userId)
    
    return result
}

async function postOrders(request){
    if (!request.validateFields(["screening_id", "tickets", "products_json", "user_id"])) return request.respondMissing()
    if (!(await request.isLoggedIn)) return request.respond401()

    let body = request.post;
    let sql = "UPDATE `screenings` SET `tickets_left`=((SELECT tickets_left FROM screenings WHERE id = ?) - ?) WHERE id = ?";
    let result = await db.query(sql, [body.screening_id, body.tickets, body.screening_id]);

    sql = "INSERT INTO `orders`(`id`, `screening_id`, `products_json`, `user_id`, `tickets`) VALUES ('0', ?, ?, ?, ?)";
    const stringifiedJSON = JSON.stringify(body.products_json)
    console.log(stringifiedJSON)
    result = await db.query(sql, [body.screening_id, stringifiedJSON, body.user_id, body.tickets]);
    request.respondJson({orderId: result.insertId});
}

async function postRegister(request){
    if (!request.validateFields(["username", "email", "password"])) return request.respondMissing()
    
    let sql = "SELECT * FROM users WHERE username=? OR email=?"
    let result = await db.query(sql, [request.post.username, request.post.email])
    if (result.length != 0) return request.respondJson({reason: 'Username or email already in use.'}, 400)
    
    let passwordHash = await request.generateHash(request.post.password)
    let token = await request.generateToken()
    sql = "INSERT INTO users (username, email, password, token) VALUES (?, ?, ?, ?)"
    db.query(sql, [request.post.username, request.post.email, passwordHash, token])
    request.respondJson({token: token})
}

async function postLogin(request){
    if (!request.validateFields(["email", "password"])) return request.respondMissing()

    let sql = "SELECT id, password FROM users WHERE email=?"
    let result = await db.query(sql, request.post.email, true)
    if (!result) return request.respondJson({reason: 'Invalid username or password.'}, 400)
    const userId = result.id

    const paswordIsCorrect = request.compareHash(request.post.password, result.password)
    if (!paswordIsCorrect) return request.respondJson({reason: 'Invalid username or password.'}, 400)

    const token = await request.generateToken()
    sql = "UPDATE users SET `token`= ? WHERE id = ?"
    db.query(sql, [token, userId])
    request.respondJson({token: token})
}

async function postRate(request){
    if (!request.validateFields(["points", "movie_id"])) return request.respondMissing()
    if (!(await request.isLoggedIn)) return request.respond401()
    request.defaultFields(["comment"])
    
    const sql = "SELECT id FROM rating WHERE user_id=?"
}



app.listen(process.env.PORT);