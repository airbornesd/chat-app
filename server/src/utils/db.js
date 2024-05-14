import mongoose from 'mongoose';

const uri = process.env.MONGO_URI;
const name = process.env.MONGO_DB_NAME;

const connectMongoDb = async () => {
  try {
    await mongoose.connect(uri, {
      dbName: name,
    });
    console.log('db connected');
  } catch (e) {
    console.error('db connection error: ', e);
    process.exit();
  }
};

export default connectMongoDb;
