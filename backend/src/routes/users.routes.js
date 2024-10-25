import { Router } from 'express';
const router = Router();
import usersCtrl from '../controllers/user.controller.js';

router.route('/')
  .get(usersCtrl.getUsers)
  .post(usersCtrl.createUsers);


export default router;
