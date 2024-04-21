import express from "express";
import { util } from "../Util";
import { kons } from "../Kons";
import { dataWeb } from "../../data";

export class ContGet {

    async login(req: express.Request, resp: express.Response) {
        try {
            console.log('render auth login:');
            let html: string = await util.getFile(util.baseDir + "/" + kons.folder_public + '/html/login.html');
            html = html.replace("{{data}}", "null");
            html = html.replace("{{meta}}", dataWeb.meta);
            resp.status(200).send(html);
        }
        catch (e) {
            util.resp500(req, resp, e);
        }
    }

}