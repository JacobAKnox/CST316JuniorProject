const { MongoClient } = require('mongodb');


async function retrievePuzzle() {

  const connectionString = 'mongodb://127.0.0.1:27017';
  const databaseName = 'PlaceGuesser';
  const collectionName = 'Puzzles';

  const client = new MongoClient(connectionString);
  try {
    await client.connect();
    console.log('Connected to MongoDB');
    const db = client.db(databaseName);

    const collection = db.collection(collectionName);

    const pz = await collection.aggregate([{ $sample: { size: 1 } }]).toArray();
    return pz;

  } finally {
    await client.close();
    console.log('Connection closed');
  }
}

const item = retrievePuzzle()
  .then(item => {
    console.log(item);
  })
  .catch(error => {
    console.error('Error:', error);
  });

  console.log(item)