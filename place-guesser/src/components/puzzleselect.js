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

    const puzzles = await collection.find().toArray();

    randomPuzzle = generateRandomPuzzle(puzzles)
    return randomPuzzle;

  } finally {
    await client.close();
    console.log('Connection closed');
  }
}

function generateRandomPuzzle(puzzles) {
  if (puzzles.length === 0) {
      console.log('No puzzles available.');
      return;
  }

  // Randomly select a puzzle from the array
  const randomIndex = Math.floor(Math.random() * puzzles.length);
  const randomPuzzle = puzzles[randomIndex];
  return randomPuzzle;
}


const item = retrievePuzzle()
  .then(item => {
    console.log(item);
  })
  .catch(error => {
    console.error('Error:', error);
  });

  console.log(item)