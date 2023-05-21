import router from "../router";
import CONTENT_TYPE from "../../static/const/CONTENT_TYPE";

router.on("/404/", async function(data, response) {
    response.status = 404;
    response.contentType = CONTENT_TYPE.JSON;
    response.response = {
        code: 404,
        msg: "The short link is not registered yet."
    };
});