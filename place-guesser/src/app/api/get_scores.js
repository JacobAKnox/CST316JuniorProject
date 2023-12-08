import clientPromise from '@/lib/database';

export default async function handler(req, res) {
    if (req.method === 'GET') {
        try {
            const client = await clientPromise;
            const db = client.db("PlaceGuesser");
            const scores = await db.collection("SaveGame").find({}).toArray();
            res.status(200).json(scores);
        } catch (e) {
            console.error(e);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    } else {
        res.status(405).json({ error: 'Method Not Allowed' });
    }
}
