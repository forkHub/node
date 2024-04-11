import express from "express";
import cookieSession from "cookie-session";
import { Server } from "http";
import { kons } from "./module/Kons";
import { util } from "./module/Util";
import { Connection } from "./module/Connection";
import { config } from "./config/Config";
import { upload } from "./module/upload/Upload";
import { auth } from "./module/auth/Auth";
import multer from "multer";
import { toko } from "./module/toko/toko";

const app: express.Express = express();
const port: number = 3000;

export const mUpload = multer({
	dest: 'public/upload2'
});

try {
	util.buatRandom();
	util.baseDir = __dirname;

	app.use(express.static(__dirname + '/' + kons.folder_public));

	app.use(cookieSession({
		name: 'toko_session',
		keys: ['Auni_202002_cookie_session'],
		httpOnly: true,
		maxAge: 1000 * 60 * 60 * 24 * 2
	}));


	// const multer2 = multer({
	// 	dest: kons.folder_upload
	// });

	// app.use(multer2));

	app.options('*', function (_req, res) {
		console.log("option:");

		res.header("Access-Control-Allow-Origin", "*");
		res.header("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
		res.sendStatus(200);
	});

	let allowedDomains: string[] = [];

	if (config.dev) {
		allowedDomains.push('htp://localhost:80');
		allowedDomains.push('http://localhost');
	}

	app.use(function (_req, res, next) {

		console.group('check origin');
		console.log("allowed origin:", allowedDomains);

		if (allowedDomains.indexOf(_req.headers.origin) > -1) {
			console.log("allowed");
			res.header("Access-Control-Allow-Origin", `${_req.headers.origin}`);
		}
		else {
			console.log("not allowed");
			//nothing
		}
		console.groupEnd();

		res.header("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
		res.header("Access-Control-Allow-Methods", "OPTIONS,GET,HEAD,POST,PUT");
		res.status(200);
		next();
	});

	app.use("/", auth.router.router);
	app.use("/", upload.router.router);
	app.use("/", toko.router.router);

	// appuse

	auth.router.impl();
	upload.router.impl();
	toko.router.impl();

	app.use((_req: express.Request, resp: express.Response, _next: Function) => {
		console.log("404");
		console.log("");
		// _resp.redirect("/auth/login");

		resp.status(404).send(`<html><head><title>404</title><meta name="viewport" content="width=device-width, initial-scale=1"></head><body>Halaman Tidak Ditemukan</body></html>`);
	})

	process.on('SIGTERM', () => {
		try {

			Connection.pool.end((err) => {
				if (err) {
					console.error;
				}
				else {

				}
			});

		} catch (e) {
			console.error;
		}

	});

	if (config.sql == 'sql') {
		Connection.connect();
	}
	else {
		//start no sql
	}
}
catch (e) {
	console.log("========================================");
	console.error(e);
	console.log("========================================");
}

export const server: Server = app.listen(port, () => {
	console.log('app started');
});
