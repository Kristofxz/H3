import express from 'express';
import { userController } from './user.controller';
export const router = express.Router();

router.get('/', userController.query); // Felhasználók lekérése
router.get('/:userId', userController.getUser);
router.put('/', userController.updateUser);
