import express from "express";
import { util } from "../Util";

export class Router {
    readonly router = express.Router();

    impl(): void {
        this.router.get("/user/daftar", (req: express.Request, resp: express.Response) => {
            try {

                // entl.cont.renderDaftarUser().then(() => {
                //     render(halDaftar(session(req)), req, resp);
                // }).catch((e) => {
                //     util.respError(req, resp, e);
                // });
            }
            catch (e) {
                util.respError(req, resp, e);
            }
        })
    }
}
