import RequestContext from "vclight-router/dist/types/requestContext";
import ResponseContext from "vclight-router/dist/types/responseContext";
import CONTENT_TYPE from "../../static/const/CONTENT_TYPE";
import router from "../router";

// noinspection SpellCheckingInspection
const urlList: string[] = [
    "/.bash_logout",
    "/.env-example",
    "/.env.dev.loca1",
    "/.env.production",
    "/WORDPRESS",
    "/WWW",
    "/ads.txt",
    "/cgi-bin/MT/",
    "/cgi-bin/printenv",
    "/connectionstrings.xml",
    "/credentials.yaml",
    "/global.xml",
    "/mtos",
    "/static/admin/javascript/hetong.js",
    "/wp-config.php_old"
];

async function liar(data: RequestContext, response: ResponseContext) {
    response.contentType = CONTENT_TYPE.JSON;
    response.status = 200;
    response.response = {
        statusCode: 404,
        msg: "Bad Request"
    };
}

for (const url of urlList) {
    router.on(url, liar);
}

router.pattern(/(?<=.php)$/, liar);
router.pattern(/(?<=.env)$/, liar);
router.pattern(/(?<=.dat)$/, liar);
router.pattern(/(?<=.bak)$/, liar);
router.pattern(/^(?=\/.git\/)/, liar);