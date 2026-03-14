import express from 'express';
import {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
} from '../controllers/userControllers.js';

const router = express.Router();

// Definindo as rotas
router.get('/get-by-title', getByTitle);
router.get('/get-by-date', getByDate);
// router.get('/get-by-date', getUserById);
// router.get('/get-by-date', getUserById);
router.get('/get-by-category', getByCategory);

export default router;