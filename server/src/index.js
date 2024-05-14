import './config.js';
import express from 'express';
import 'express-async-errors';
import connectMongoDb from './utils/db.js';
import routes from './routes/index.js';
import cors from 'cors';

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cors());
app.use(
  express.urlencoded({
    extended: true,
  })
);

connectMongoDb();

app.use(routes);

app.listen(port, () => {
  console.log(`server is listening on ${port}`);
});
