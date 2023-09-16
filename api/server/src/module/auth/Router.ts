import express from "express";
import { auth } from "./Auth";
import { mUpload } from "../../app";
import { RouterGet } from "./RouterGet";
import { URL } from "../toko/store";
// import { URL } from "url";

export class Router {
	readonly router = express.Router();

	impl(): void {
		let rGet = new RouterGet();
		rGet.impl(this.router);

		this.router.post(URL.auth_login, mUpload.none(), (req: express.Request, resp: express.Response) => {
			auth.contPost.login(req, resp);
		});

		this.router.post(URL.toko, mUpload.none(), auth.cont.baru);
	}
}