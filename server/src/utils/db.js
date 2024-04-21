import mongoose from 'mongoose';

const uri = process.env.MONGO_URI;

const connectMongoDb = async () => {
  try {
    await mongoose.connect(uri, {
      dbName: process.env.MONGO_DB_NAME,
    });
    console.log('db connected');
  } catch (e) {
    console.error('db connection error: ', e.message);
    process.exit();
  }
};

export default connectMongoDb;
