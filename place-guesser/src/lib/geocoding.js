import {Client, Status} from "@googlemaps/google-maps-services-js";

if (!process.env.MAPS_API_KEY) {
    console.warn("no MAPS API key provided")
}

const key = process.env.MAPS_API_KEY
const client = new Client({});

const no_key_bounds = { // data for france, looks kinda neutral 
    northeast: { lat: 51.1241999, lng: 9.6624999 },
    southwest: { lat: 10.2676819, lng: -109.2967524 }
}

export async function get_bounds(name) {
    if (key === "") {
        return no_key_bounds
    }

    const args = {
        params: {
            key: key,
            address: name
        }
    }
    const res = await client.geocode(args)
    if (res.status !== Status.OK) {
        //error here
    } 
    return res.data.results[0].geometry.bounds
}

export async function get_lat_long(place) {
    if (key === "") {
        return { lat: 51.1241999, lng: 9.6624999 }
    }

    const args = {
        params: {
            key: key,
            address: place
        }
    }
    const res = await client.geocode(args)
    if (res.status !== Status.OK) {
        //error here
    } 
    return res.data.results[0].geometry.location
}