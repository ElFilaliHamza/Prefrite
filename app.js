const dotenv = require('dotenv');

// Load the correct .env file based on NODE_ENV
const envFile = process.env.NODE_ENV === 'production' ? '.env.production' : '.env.development';
dotenv.config({ path: envFile });
// Parse the ORIGIN environment variable
const env_origins = process.env.ORIGIN ? process.env.ORIGIN.split(',') : [];


const http = require('http');
const express = require('express');
const expressSession = require('express-session')
const MongoStore = require('connect-mongo')(expressSession);
const adminRouter = require('./modules/admin/adminRouter');
const { MONGO_URL } = require('./modules/ServerConfig');
const sellerRouter = require('./modules/seller/sellerRouter');
const serve = require('./modules/serve');
const superRouter = require('./modules/superadmin/superRouter');
const magasinRouter = require('./modules/magasin/magasinRouter');
const checkSession = require('./modules/global/checkSession');
const login = require('./modules/global/login');
const WS_Server = require('./websockets/ws_server');
const cors = require('cors'); // Import cors

const app = express();

app.use(express.static('./build'));
app.use(express.static('./public'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/serve/img/:name', serve.serveImage);

//404 fallback
app.get("*", (req, res) => {
    res.sendFile(__dirname + '/build/index.html');
});

const session = expressSession({
    name: "uid",
    secret: "secret",
    saveUninitialized: false,
    resave: false,
    store: new MongoStore({
        url: MONGO_URL,
        stringify: false,
    }),
    cookie: {
        secure: "auto",
        //sameSite: "none",
        httpOnly: true,
        maxAge: (1000 * 60 * 60 * 24 * 365), //one year
    }
});

app.use(session);


// const corsOptions = {
//     origin: /localhost/,    // reqexp will match all prefixes
//     methods: "GET,HEAD,POST,PATCH,DELETE,OPTIONS",
//     credentials: true,                // required to pass
//     allowedHeaders: "Content-Type, Authorization, X-Requested-With",
// }


const corsOptions = {
    origin: env_origins, // Adjust according to your front-end URL
    methods: "GET,HEAD,POST,PATCH,DELETE,OPTIONS",
    credentials: true, // Allow credentials (cookies, authorization headers, etc.)
    allowedHeaders: "Content-Type, Authorization, X-Requested-With",
};
// intercept pre-flight check for all routes
app.use(cors(corsOptions))
// new line
app.options('*', cors(corsOptions));

app.post('/session', checkSession);

app.post('/login', login);

app.use('/admin', adminRouter);

app.use('/seller', sellerRouter);

app.use('/superadmin', superRouter);

app.use('/magasin', magasinRouter);

const server = http.createServer(app);

server.listen(process.env.PORT || 80, () => {

    console.log(`Server Started at PORT: ${server.address().port}`);
});

const ws_server = new WS_Server(session);
ws_server.listen(server);
