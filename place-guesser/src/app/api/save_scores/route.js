// save_scores.js
import clientPromise from '@/lib/database';

export default async function POST(req) {
    try {
        const client = await clientPromise;
        const db = client.db("PlaceGuesser");

        const { sessionID, guessCount } = req.body;
        await db.collection("SaveGame").insertOne({ sessionID, guessCount });

        return new Response(JSON.stringify({ message: 'Score saved' }), {
            status: 201,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    } catch (e) {
        console.error(e);
        Response.error(500).json({ error: 'Internal Server Error' });
    }
    }

//Added a route.js and make sure to check the all the servers