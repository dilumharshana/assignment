import express from 'express';
import routes from './regitser.js';
import cors from 'cors';

const app = express();

app.use(cors());

app.use('/user', routes);

app.listen(5050);
