import express from "express";
import { util } from "../Util";
import { kons } from "../Kons";
import { dataWeb } from "../../data";
import { session } from "../SessionData";

export class Cont {
    // async
    async beranda(req: express.Request, resp: express.Response) {
        try {
            //TODO: check login
            //TODO: check role
            let s = session(req);

            if (!s.id) {

            }

            if (!s.role) {

            }

            let html: string = await util.getFile(util.baseDir + "/" + kons.folder_public + '/html/admin_beranda.html');
            html = html.replace("{{data}}", "null");
            html = html.replace("{{meta}}", dataWeb.meta);
            resp.status(200).send(html);
        }
        catch (e) {
            util.resp500(req, resp, e);
        }
    }

}