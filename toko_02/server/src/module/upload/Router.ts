import express from "express";
import { util } from "../Util";
import { mUpload } from "../../app";
import { auth } from "../auth/Auth.js";

export class Router {
	readonly router = express.Router();

	impl(): void {
		this.router.post("/upload_file", auth.cont.checkAuthSession, (req: express.Request, resp: express.Response): void => {
			try {

				let mUpload2 = mUpload.single('avatar');
				mUpload2(req, resp, (err) => {

					console.log(req.body.user_name);

					if (err) {
						console.log('check err');
						console.log(err);
					}
					else {
						console.log('ok');
					}
				});

				resp.status(200).send(req.file);
			}
			catch (e) {
				console.log('error');
				util.resp500(req, resp, e);
			}

		});
	}
}