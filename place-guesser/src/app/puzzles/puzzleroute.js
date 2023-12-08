import clientPromise from "@/lib/database";

export async function GET() {
    try{
        const client = await clientPromise;
        const db = client.db("PlaceGuesser");
        const puzzles = await db.collection("Puzzles").find({}).toArray();
        return Response.json(puzzles)
    } catch (e) {
        console.error(e)
        return Response.error(500)
    }
}