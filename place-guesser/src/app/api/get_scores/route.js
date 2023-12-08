import clientPromise from '@/lib/database';

export async function GET(req) {
    try {
        const client = await clientPromise;
        const db = client.db("PlaceGuesser");
        const scores = await db.collection("SaveGame").find({}).toArray();
        return Response.json(scores);
    } catch (e) {
        console.error(e);
        Response.error(500).json({ error: 'Internal Server Error' });
    }
}
