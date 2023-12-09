// save_scores.js
import clientPromise from '@/lib/database';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const client = await clientPromise;
            const db = client.db("PlaceGuesser");

            const { sessionID, guessCount } = req.body;
            await db.collection("SaveGame").insertOne({ sessionID, guessCount });

            res.status(201).json({ message: 'Score saved' });
        } catch (e) {
            console.error(e);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    } else {
        res.status(405).json({ error: 'Method Not Allowed' });
    }
}


//Added a route.js and make sure to check the all the servers