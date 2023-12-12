import clientPromise from "@/lib/database";

export const dynamic = 'force-dynamic' // defaults to auto

export async function GET() {
    try{
        const client = await clientPromise;
        const db = client.db("PlaceGuesser");
        const collection = db.collection('Puzzles');
        return Response.json({puzzle:await collection.aggregate([{ $sample: { size: 1 } }]).toArray()})
    } catch (e) {
        console.error(e)
        return Response.error(500)
    }
}
