const express        = require('express');
const app            = express();
const bodyParser     = require('body-parser');
const cors           = require('cors');
const session        = require('express-session')

require('./db/db');


app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false
}));

// SET UP CORS AS MIDDLEWARE, SO any client can make a request to our server
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// CORS allows requests to come in from React
app.use(cors());

// REQUIRE the controller after the middleware

// const authController  = require('./controllers/authController');
const menuController = require('./controllers/menuController');
const dogController = require('./controllers/dogController');

// app.use('/auth', authController);
app.use('/api/menu', menuController);
app.use('/api/dog', dogController);

// SET UP app to listen to correct port
app.listen(process.env.PORT || 9000, () => {
  console.log('listening on port 9000');
});
