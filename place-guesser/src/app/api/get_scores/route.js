import clientPromise from '@/lib/database';

export async function GET(req) {
    const url = new URL(req.url)
    const searchParams = new URLSearchParams(url.search)
    const userid_arg = searchParams.get('userid')

    try {
        const client = await clientPromise;
        const db = client.db("PlaceGuesser");
        const userData = await db.collection("SaveGame").findOne({ userid: userid_arg })

        if (!userData) {
          return Response.error(404).json({ error: 'Record not found' })
        }

        return Response.json(userData);
    } catch (e) {
        console.error(e);
        Response.error(500).json({ error: 'Internal Server Error' });
    }
}
