import express from "express";
import { util } from "../Util";
import { halLogin } from "../../ui/halLogin";
import { session } from "../SessionData";
import { auth } from "./Auth";
import { halDaftarUser } from "../../ui/halDaftarUser";
import { halUserBaru } from "../../ui/halUserBaru";

export class RouterGet {

    impl(router: express.Router): void {
        router.get("/auth", (req: express.Request, resp: express.Response) => {
            try {
                resp.status(200).send(halLogin(session(req)));
            }
            catch (e) {
                util.respError(req, resp, e);
            }
        })

        router.get("/auth/login", (req: express.Request, resp: express.Response) => {
            try {
                resp.status(200).send(halLogin(session(req)));
            }
            catch (e) {
                util.respError(req, resp, e);
            }
        })

        router.get("/auth/baru", (req: express.Request, resp: express.Response) => {
            try {
                resp.status(200).send(halUserBaru(session(req)));
            }
            catch (e) {
                util.respError(req, resp, e);
            }
        })

        router.get("/auth/daftar", auth.cont.checkAuthSession, (req: express.Request, resp: express.Response) => {
            try {
                //TODO: delegate
                auth.cont.daftarUser().then((daftar) => {
                    resp.status(200).send(halDaftarUser(session(req), daftar));
                }).catch((e) => {
                    util.respError(req, resp, e);
                });
            }
            catch (e) {
                util.respError(req, resp, e);
            }
        });

        router.get("/auth/hapus/:id", auth.cont.checkAuthSession, (req: express.Request, resp: express.Response) => {
            try {
                //TODO: delegate
                auth.cont.hapus(req).then(() => {
                    session(req).pesan = 'data berhasil dihapus, id: ' + req.params.id;
                    resp.redirect('/auth/daftar');
                }).catch((e) => {
                    util.respError(req, resp, e);
                });
            }
            catch (e) {
                util.respError(req, resp, e);
            }
        });

        router.get("/auth/restore/:id", auth.cont.checkAuthSession, (req: express.Request, resp: express.Response) => {
            try {
                auth.cont.restore(req).then(() => {
                    session(req).pesan = 'data berhasil direstore, id: ' + req.params.id;
                    resp.redirect('/auth/daftar');
                }).catch((e) => {
                    util.respError(req, resp, e);
                });
            }
            catch (e) {
                util.respError(req, resp, e);
            }
        });
    }

}