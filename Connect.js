import { MongoClient } from "mongodb";

const URI = process.env.MONGO_URI;

const client = new MongoClient(URI);

export const db = client.db("spotifyAula");
