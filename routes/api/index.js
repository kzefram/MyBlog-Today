const router = require('express').Router();
const usersRoutes = require('./users-routes');
const postRoutes = require('./posts-routes');
const categoryRoutes = require('./category-routes');

router.use('/categories', categoryRoutes);
router.use('/posts', postRoutes);
router.use('/users', usersRoutes);

module.exports = router;
