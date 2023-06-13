import express from "express";
import { session } from "../SessionData";
import { render } from "../router";
import { entl } from "./entitlement";
import { util } from "../Util";
import { halDaftar } from "./halDaftar";

export class Router {
    readonly router = express.Router();

    impl(): void {
        this.router.get("/entl/daftar", (req: express.Request, resp: express.Response) => {
            try {
                entl.cont.renderDaftarUser().then(() => {
                    render(halDaftar(session(req)), req, resp);
                }).catch((e) => {
                    util.respError(req, resp, e);
                });
            }
            catch (e) {
                util.respError(req, resp, e);
            }
        })
    }
}

