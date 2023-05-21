import { MongoClient, ServerApiVersion } from "mongodb";
import MONGO_VAR from "../../static/const/MONGO_VAR";

class Mongodb {
    public readonly client = new MongoClient(MONGO_VAR.URI, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true
        }
    });

}

const mongodb: Mongodb = new Mongodb();

export default mongodb;