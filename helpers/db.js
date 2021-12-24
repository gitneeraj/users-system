import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();
const connectionString = process.env.ATLAS_URI;

const client = new MongoClient(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let dbConnection;

export function connectToServer(callback) {
  client.connect((err, db) => {
    if (err || !db) {
      return callback(err);
    }

    dbConnection = db.db('users-system');
    // eslint-disable-next-line no-console
    console.log('Successfully connected to MongoDB.');

    return callback();
  });
}
export function getDb() {
  return dbConnection;
}
