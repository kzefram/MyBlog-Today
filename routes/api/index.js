import { Router } from 'express';
import usersRoutes from './users-routes';
import postRoutes from './posts-routes';
import categoryRoutes from './category-routes';

const router = Router();

router.use('/categories', categoryRoutes);
router.use('/posts', postRoutes);
router.use('/users', usersRoutes);

export default router;

