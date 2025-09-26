import 'reflect-metadata';
import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

import { AppDataSource } from './models/data-source';
import routes from './routes';

const app = express();
app.use(express.json());
app.use('/api', routes);

const PORT = process.env.PORT || 3000;

AppDataSource.initialize()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => console.error('DB connection error:', error));
