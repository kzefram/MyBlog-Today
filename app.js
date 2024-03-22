const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection');
const session = require('express-session');
const path = require('path');
//const morgan = require('morgan');

const app = express();
// Session middleware setup
app.use(session({
  secret: process.env.SECRET_KEY,
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: 'auto',
    httpOnly: true,
    maxAge: 3600000 // Example: expires in 1 hour
  }
}));

const PORT = process.env.PORT || 3001;

//editor
app.use('/quill', express.static(path.join(__dirname, 'node_modules/quill/dist')));

//app.use(morgan('tiny')); // Log every request to the console

// middleware function mwLogger
const mwLogger = (req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  next();
};
app.use(mwLogger);

app.use(express.static('public'));
app.use(routes);

// sync sequelize models to the database, then turn on the server
sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
    //open(`http://localhost:${PORT}`);
  });
});
