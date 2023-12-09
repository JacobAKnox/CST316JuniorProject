import { get_country_bounds } from "@/lib/geocoding"

export async function GET(req) {
    const name = req.nextUrl.searchParams.get("name")
    return Response.json({bounds: await get_country_bounds(name)})
}