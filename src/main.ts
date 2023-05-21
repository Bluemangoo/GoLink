import VCLight from "vclight";
import { VercelRequest, VercelResponse } from "@vercel/node";
import router from "./app/router";

module.exports = async function(request: VercelRequest, response: VercelResponse) {
    const app = new VCLight();
    app.use(router);
    await app.fetch(request, response);
};
