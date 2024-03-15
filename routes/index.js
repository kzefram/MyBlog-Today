const router = require('express').Router();
const apiRoutes = require('./routes/index.js');

router.use('/api', apiRoutes);

router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

module.exports = router;