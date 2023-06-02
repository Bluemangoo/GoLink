import VCLightRouter from "vclight-router";

const router = new VCLightRouter({
    buildInRouters:{
        _404: false
    }
});
export default router;
import "./routers/favicon";
import "./routers/api"
import "./routers/catchAll"
import "./routers/liar"
