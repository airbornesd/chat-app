import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  email: { type: String, unique: true },
  username: { type: String, unique: true },
  password: String,
});

const User = mongoose.model('user', schema);

export default User;
