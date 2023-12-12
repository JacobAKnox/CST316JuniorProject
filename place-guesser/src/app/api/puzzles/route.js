import clientPromise from "@/lib/database";

export async function GET() {
    try{
        const client = await clientPromise;
        const db = client.db("PlaceGuesser");
        const collection = db.collection('Puzzles');
        const pz = await collection.aggregate([{ $sample: { size: 1 } }]).toArray();
        console.log("Puzzle API hit")
        return Response.json(pz)
    } catch (e) {
        console.error(e)
        return Response.error(500)
    }
}
