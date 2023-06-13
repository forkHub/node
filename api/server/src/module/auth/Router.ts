import express from "express";
import { auth } from "./Auth";
import { mUpload } from "../../app";
import { halLogin } from "./halLogin";
import { halBaru } from "./halBaru";
import { session } from "../SessionData";
import { util } from "../Util";
import { halDaftar } from "./halDaftar";
import { render, response } from "../router";

export class Router {
	readonly router = express.Router();

	impl(): void {

		this.router.get("/auth", (req: express.Request, resp: express.Response) => {
			response(() => {
				render(halLogin(session(req)), req, resp);
			}, req, resp);
		})

		this.router.get("/auth/login", (req: express.Request, resp: express.Response) => {
			try {
				render(halLogin(session(req)), req, resp);
			}
			catch (e) {
				util.respError(req, resp, e);
			}
		})

		this.router.get("/auth/baru", (req: express.Request, resp: express.Response) => {
			try {
				render(halBaru(session(req)), req, resp);
			}
			catch (e) {
				util.respError(req, resp, e);
			}
		})

		this.router.get("/auth/daftar", auth.cont.checkAuthSession, (req: express.Request, resp: express.Response) => {
			try {
				auth.cont.renderDaftarUser().then(() => {
					render(halDaftar(session(req)), req, resp);
				}).catch((e) => {
					util.respError(req, resp, e);
				});
			}
			catch (e) {
				util.respError(req, resp, e);
			}
		});

		this.router.get("/auth/hapus/:id", auth.cont.checkAuthSession, (req: express.Request, resp: express.Response) => {
			response(() => {
				auth.cont.hapus(req).then(() => {
					session(req).pesan = 'data berhasil dihapus, id: ' + req.params.id;
					resp.redirect('/auth/daftar');
				}).catch((e) => {
					util.respError(req, resp, e);
				});
			}, req, resp);
		});

		this.router.get("/auth/restore/:id", auth.cont.checkAuthSession, (req: express.Request, resp: express.Response) => {
			response(() => {
				auth.cont.restore(req).then(() => {
					session(req).pesan = 'data berhasil direstore, id: ' + req.params.id;
					resp.redirect('/auth/daftar');
				}).catch((e) => {
					util.respError(req, resp, e);
				});
			}, req, resp);
		});


		// this.router.get("/", (req: express.Request, resp: express.Response) => {
		// 	try {
		// 		render(halLogin(session(req)), req, resp);
		// 	}
		// 	catch (e) {
		// 		util.respError(req, resp, e);
		// 	}
		// })

		this.router.post(auth.routerKons.login, mUpload.none(), auth.cont.login);
		this.router.post("/auth/baru", mUpload.none(), auth.cont.baru);
	}
}