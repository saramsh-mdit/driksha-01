import { Router } from 'express';

import logger from '../../utils/logger/index';
import { addUser, deleteUser, getUsers } from './users.service';

const UserController = Router();

UserController.get('/', async (_, res) => {
  try {
    const data = await getUsers();
    res.status(200).send(data);
  } catch (err) {
    logger.error(err);
    res.status(404).send(err);

  }
});


UserController.post('/', async (req, res) => {
  try {
    const { userName, password, email } = req.body;
    const data = await addUser({ userName, password, email, isAdmin: false });
    res.status(200).send(data);
  } catch (err) {
    logger.error(err);
    res.status(404).send(err);
    
  }
});

// UserController.get('/:name', async (req, res) => {
//   try {
//     const { name } = req.params;

//     const data = await getUser(name);
//     res.status(200).send(data);
//   } catch (err) {
//     logger.error(err);
//     res.sendStatus(404);
//   }
// });

UserController.delete('/', async (req, res) => {
  try {
    const { id } = req.body;
    const data = await deleteUser(id);
    res.status(200).send(data);
  } catch (err) {
    logger.error(err);
    res.status(404).send(err);
    
  }
});

export default UserController;
