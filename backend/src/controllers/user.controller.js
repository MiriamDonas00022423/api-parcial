const usersCtrl = {};
import { now } from 'mongoose';
import userModel from '../models/user.model.js';

usersCtrl.getUsers = async (req, res) => {
  //find devuelve un arreglo de todos los users
  const users = await userModel.find();
  res.json(users);
}
usersCtrl.createUsers = async (req, res) => {
  const {name,age,email} = req.body;
  const newUser = new userModel({
    name: name,
    age: age,
    email: email
  });
  await newUser.save();
  res.json({ message: 'noted saved' });
}
export default usersCtrl;