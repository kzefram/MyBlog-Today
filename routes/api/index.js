const router = require('express').Router();
const categoryRoutes = require('./category-routes');
const postRoutes = require('./product-routes');
const usersRoutes = require('./users-routes');

router.use('/categories', categoryRoutes);
router.use('/posts', postRoutes);
router.use('/users', usersRoutes);

module.exports = router;
