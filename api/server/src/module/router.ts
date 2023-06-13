import express from "express";
import { session } from "./SessionData";
import { util } from "./Util";

export function resetSession(s: ISessionData) {
    s.pesan = '';
    s.error = false;
}

export function render(html: string, req: express.Request, resp: express.Response): void {
    resetSession(session(req));
    resp.status(200).send(html);
}

export function response(f: () => void, req: express.Request, resp: express.Response): void {
    try {
        f();
    }
    catch (e) {
        util.respError(req, resp, e);
    }
}