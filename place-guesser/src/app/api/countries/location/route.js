import { get_lat_long } from "@/lib/geocoding"

export async function GET(req) {
    const name = req.nextUrl.searchParams.get("name")
    return Response.json({location: await get_lat_long(name)})
}