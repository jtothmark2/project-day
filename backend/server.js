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
app.post('/api/orderInfo', (req, res) => getOrderInfo(new Request(db, req, res)));

app.post('/api/register', (req, res) => postRegister(new Request(db, req, res)));
app.post('/api/login', (req, res) => postLogin(new Request(db, req, res)));
app.get('/api/user', (req, res) => getUser(new Request(db, req, res)));

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

async function getOrderInfo(request){
    let sql = "SELECT movies.title, screenings.date, orders.products_json, orders.tickets FROM orders INNER JOIN screenings ON orders.screening_id = screenings.id INNER JOIN movies ON screenings.movie_id = movies.id WHERE orders.id = ?"
    let result = await db.query(sql, request.post.orderId);

    const products = JSON.parse(result[0].products_json).products
    delete result[0]['products_json'];

    result[0].tickets *= 2000;
    let responseRes = {...result[0]};

    sql = "SELECT `name`, `price` FROM `products`";
    result = await db.query(sql);

    O
    
    request.respondJson(responseRes)
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
    if (!request.validateFields(["email", "password"])){
        console.log(request.post)
        return request.respondMissing()
    } 

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
    

    let sql = "SELECT * FROM orders INNER JOIN screenings ON orders.screening_id=screenings.id WHERE screenings.movie_id=? AND orders.user_id=?"
    let result = await db.query(sql, [request.post.movie_id, request.id])
    if (result.length == 0) request.respondJson({reason: "You can only rate movies that you watched!"}, 400)

    sql = "SELECT id FROM ratings WHERE user_id=? AND movie_id=?"
    result = await db.query(sql, [request.id, request.post.movie_id], true)
    if (result) {
        sql = "DELETE FROM ratings WHERE id=?"
        db.query(sql, result.id)
    }
    sql = "INSERT INTO ratings (movie_id, user_id, points, comment) VALUES (?, ?, ?, ?)"
    await db.query(sql, [request.post.movie_id, request.id, request.post.points, request.post.comment])

    sql = "SELECT AVG(Cast(points as Float)) as average FROM ratings WHERE movie_id=?"
    result = await db.query(sql, [request.post.movie_id], true)
    const averageRating = result.average

    sql = "UPDATE movies SET rating=? WHERE id=?"
    db.query(sql, [averageRating, request.post.movie_id])

    request.respondJson({success: true})
}

async function getUser(request){
    if (!(await request.isLoggedIn)) return request.respond401()
    let sql = "SELECT username, email FROM users WHERE id=?"
    let result = await db.query(sql, request.id, true)
    request.respondJson({username: result.username, email: result.email})
}




app.listen(process.env.PORT);