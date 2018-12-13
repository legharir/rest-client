import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import Promise from 'bluebird';
import auth from './routes/auth';
import users from './routes/users';

dotenv.config();
const app = express();
app.use(bodyParser.json());
mongoose.Promise = Promise;
mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
});

mongoose.connection.on('error', err => {
  console.error('MongoDB error: %s', err);
});

app.use('/api/auth', auth);

app.use('/api/users', users);

app.listen(8080, () => console.log('Running on localhost:8080'));
