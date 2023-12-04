import clientPromise from "@/lib/database";

export async function GET() {
    try{
        const client = await clientPromise;
        const db = client.db("PlaceGuesser");
        const countries = await db.collection("Countries").find({}).toArray();
        return Response.json(countries)
    } catch (e) {
        console.error(e)
        return Response.error(500)
    }
}