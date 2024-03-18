import express from 'express';
import open from 'open';
import sequelize from './config/connection.js';
import apiRoutes from './routes/api/index.js';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static('public'));
app.use('/api', apiRoutes);

// sync sequelize models to the database, then turn on the server
sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
    open(`http://localhost:${PORT}`);
  });
});
