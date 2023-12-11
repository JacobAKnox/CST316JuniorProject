// save_scores.js
import { ObjectId } from 'mongodb'

import clientPromise from '@/lib/database';

export async function POST(req) {
  const body = await req.json()

    try {
        const client = await clientPromise;
        const db = client.db("PlaceGuesser");

        const result = await db.collection("SaveGame").updateOne(
          { userid: body.userid },
          {
            $set: {
              userid: body.userid
            },
            $push: {
              userscores: {
                score: body.score,
                date: body.date
              }
            }
          },
          { upsert: true }
        )

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
