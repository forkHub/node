import express from "express";
import { auth } from "./Auth";
import { mUpload } from "../../app";
import { RouterGet } from "./RouterGet";

export class Router {
	readonly router = express.Router();

	impl(): void {
		let rGet = new RouterGet();
		rGet.impl(this.router);

		this.router.post(auth.routerKons.login, mUpload.none(), (req: express.Request, resp: express.Response) => {
			auth.contPost.login(req, resp);
		});

		this.router.post("/auth/baru", mUpload.none(), auth.cont.baru);
	}
}