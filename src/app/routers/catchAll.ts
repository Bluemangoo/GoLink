import router from "../router";
import CONTENT_TYPE from "../../static/const/CONTENT_TYPE";
import mongodb from "../../utils/mongodb/mongodb";
import { ResponseContext } from "vclight-router";
import { MongoClient } from "mongodb";

function err(response: ResponseContext) {
    response.status = 404;
    response.contentType = CONTENT_TYPE.JSON;
    response.response = {
        code: 404,
        msg: "The short link is not registered yet."
    };
}

router.on("/404/", async function(data, response) {
    const client: MongoClient = mongodb.client;
    const url = data.url.toString().endsWith("/") ? data.url.toString() : data.url.toString() + "/";
    try {
        await client.connect();
        const record = await client.db("go-link").collection("links").findOne({ alias: url });
        if (record == undefined) {
            err(response);
        } else {
            response.redirectUrl = record.to;
            response.redirect = true;
            response.status = 302;
        }
        await client.close();
        return;
    } catch {
        await client.close();
        err(response);
        return;
    }
});