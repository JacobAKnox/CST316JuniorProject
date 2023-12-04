// pull in country data here

import clientPromise from "./database";

export const get_countries = async () => {
    if (!retrived_countries) {
        await load_countries();
    }
}

let retrived_countries = false;
let countries = [];