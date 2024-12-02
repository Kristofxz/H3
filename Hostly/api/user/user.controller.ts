import { userService } from './user.service';
import { logger } from '../../services/logger.service';
import { Request, Response } from 'express';

async function query(req: Request, res: Response) {
    try {
      const users = await userService.query();
      res.send(users); // Felhasználók visszaküldése
    } catch (err) {
      logger.error('Failed to get users', err);
      res.status(500).send({ err: 'Failed to get users' });
    }
  }
  

async function getUser(req: Request, res: Response) {
    try {
        const user = await userService.getById(req.params['userId']);
        res.send(user);
    } catch (err) {
        logger.error('Failed to get user', err);
        res.status(500).send({ err: 'Failed to get user' });
    }
}

async function updateUser(req: Request, res: Response) {
    try {
        const user = req.body;
        const updatedUser = await userService.update(user);
        res.send(updatedUser);
    } catch (err) {
        logger.error('Failed to update user', err);
        res.status(500).send({ err: 'Failed to update user' });
    }
}

export const userController = {
    query,
    getUser,
    updateUser,
};
