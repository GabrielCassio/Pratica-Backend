import {Router} from 'express';
import ControllerUser from './controllers/user.controller';

const userController = new ControllerUser();
const router = Router();

// User routes to regist
router.post('/users', userController.createUser);
router.get('/users/:userId', userController.getUser);
router.put('/users/:userId', userController.putUser);
router.delete('/users/:userId', userController.deleteUser);

// User routes to regist
// router.post('/character', charController.createCharacter);
// router.get('/character/:name', charController.getCharacter);
// router.put('/character/:name', charController.putCharacter);
// router.delete('/character/:name', charController.deleteCharacter);

export default router;