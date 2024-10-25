import { Schema, model } from 'mongoose';
const userSchema = new Schema({
  name: { type: String, required: true, trim: true },
  age: { type: Number, required: true, min: 0 },
  email: { type: String, required: true, unique: true }
});

export default model('User', userSchema);