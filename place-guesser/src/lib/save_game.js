import clientPromise from "./database";

export const get_scores = async () => {
    if (!retrived_scores) {
        await load_scores();
    }
}

let retrived_scores = false;
let scores = [];