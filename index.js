import express from 'express';
import dotenv from 'dotenv';

import Routes from './routes';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 4000;

app.use('/api/v1', Routes);
app.use('/', (_, res) => res.status(401).send('Unauthorized Access'));

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running at port ${PORT}`);
});
