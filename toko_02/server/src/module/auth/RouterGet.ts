import express from "express";
import { util } from "../Util";
import { session } from "../SessionData";
import { auth } from "./Auth";
import { halDaftarUser } from "../../ui/halDaftarUser";
import { halUserBaru } from "../../ui/halUserBaru";

export class RouterGet {

    impl(router: express.Router): void {
        router.get("/auth", auth.cont.cGet.login);
        router.get("/auth/login", auth.cont.cGet.login);

        router.get("/auth/baru", (req: express.Request, resp: express.Response) => {
            try {
                resp.status(200).send(halUserBaru(session(req)));
            }
            catch (e) {
                util.resp500(req, resp, e);
            }
        })

        router.get("/auth/daftar", auth.cont.checkAuthSession, (req: express.Request, resp: express.Response) => {
            try {
                //TODO: delegate
                auth.cont.daftarUser().then((daftar: IUser[]) => {
                    resp.status(200).send(halDaftarUser(session(req), daftar));
                }).catch((e) => {
                    util.resp500(req, resp, e);
                });
            }
            catch (e) {
                util.resp500(req, resp, e);
            }
        });

        router.get("/auth/hapus/:id", auth.cont.checkAuthSession, (req: express.Request, resp: express.Response) => {
            try {
                //TODO: delegate
                auth.cont.hapus(req).then(() => {
                    session(req).pesan = 'data berhasil dihapus, id: ' + req.params.id;
                    resp.redirect('/auth/daftar');
                }).catch((e) => {
                    util.resp500(req, resp, e);
                });
            }
            catch (e) {
                util.resp500(req, resp, e);
            }
        });

        router.get("/auth/restore/:id", auth.cont.checkAuthSession, (req: express.Request, resp: express.Response) => {
            try {
                auth.cont.restore(req).then(() => {
                    session(req).pesan = 'data berhasil direstore, id: ' + req.params.id;
                    resp.redirect('/auth/daftar');
                }).catch((e) => {
                    util.resp500(req, resp, e);
                });
            }
            catch (e) {
                util.resp500(req, resp, e);
            }
        });
    }

}