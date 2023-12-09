import {Client, Status} from "@googlemaps/google-maps-services-js";

if (!process.env.MAPS_API_KEY) {
    console.warn("no MAPS API key provided")
}

const key = process.env.MAPS_API_KEY
const client = new Client({});

const no_key_data = { // data for france, looks kinda neutral 
    northeast: { lat: 51.1241999, lng: 9.6624999 },
    southwest: { lat: 10.2676819, lng: -109.2967524 }
}

export async function get_country_bounds(country_name) {
    if (key === "") {
        return no_key_data
    }

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
    console.log(res.data.results[0])
    console.log(res.data.results[0].geometry)
    return res.data.results[0].geometry.bounds
}