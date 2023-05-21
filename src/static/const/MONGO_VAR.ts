function getOrRaise(key: string): string {
    if (process.env[key] == null) {
        throw new Error(`No env ${key}`);
    } else {
        return <string>process.env[key];
    }
}

export default class MONGO_VAR {
    public static readonly URI = getOrRaise("MONGODB_URI").toString();
    public static readonly API_URI = getOrRaise("DATA_API_URL").toString();
    public static readonly API_KEY = getOrRaise("DATA_API_KEY").toString();
}