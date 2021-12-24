import { getDb } from '../helpers/db';

const getAll = (_, res) => {
  const DB = getDb();

  DB
    .collection('users')
    .find({})
    .toArray((err, result) => {
      if (err) {
        res.status(400).send('Error fetching listings!');
      }
      res.json(result);
    });
};

const register = (req, res) => {
  const DB = getDb();
  const {
    email, password, name, phone,
  } = req.body;

  const matchDocument = {
    email, password, name, phone,
  };

  DB
    .collection('users')
    .insertOne(matchDocument, (err, result) => {
      if (err) {
        res.status(400).send('Error inserting matches!');
      }

      // eslint-disable-next-line no-console
      console.log(`Added a new match with id ${result.insertedId}`);
      delete req.body.password;
      res.json({
        id: result.insertedId,
        ...req.body,
      });
    });
};

export { register, getAll };
