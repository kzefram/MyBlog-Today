import express from 'express';
import routes from './routes/index.js';
import open from 'open';
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;


app.use(express.static('public'));
app.use(routes);

// sync sequelize models to the database, then turn on the server
sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
    open(`http://localhost:${PORT}`);
  });
});

