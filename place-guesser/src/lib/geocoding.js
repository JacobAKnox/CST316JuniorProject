import {Client, Status} from "@googlemaps/google-maps-services-js";

if (!process.env.MAPS_API_KEY) {
    console.warn("no MAPS API key provided")
}

const key = process.env.MAPS_API_KEY
const client = new Client({});

export async function get_country_bounds(country_name) {
    const args = {
        params: {
            key: key,
            address: country_name,
            components: "country"
        }
    }
    const res = await client.geocode(args)
    if (res.status !== Status.OK) {
        //error here
    } 
    return res.data.results[0].geometry.bounds
}