import express from 'express';
import dotenv from 'dotenv';

import Routes from './routes';
import { connectToServer } from './helpers/db';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 4000;

// parse incoming params as json and into req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1', Routes);
app.use('/', (_, res) => res.status(401).send('Unauthorized Access'));

connectToServer((err) => {
  if (err) {
    // eslint-disable-next-line no-console
    console.error(err);
    process.exit();
  }

  // start the Express server
  app.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`Server is running on port: ${PORT}`);
  });
});
