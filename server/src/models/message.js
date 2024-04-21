import { ObjectId } from 'mongodb';
import mongoose from 'mongoose';

const schema = new mongoose.Schema(
  {
    from: { type: ObjectId, ref: 'user' },
    to: { type: ObjectId, ref: 'user' },
    message: String,
  },
  { timestamps: true, id: false }
);

const Message = mongoose.model('message', schema);

export default Message;
