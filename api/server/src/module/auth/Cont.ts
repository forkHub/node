import md5 from "blueimp-md5";
import express from "express";
import { session } from "../SessionData";
import { util } from "../Util";
import { auth } from "./Auth";
import { ContGet } from "./ContGet";

export class Cont {
	readonly cGet: ContGet = new ContGet();

	async hapus(req: express.Request): Promise<void> {
		await auth.dao.hapus(parseInt(req.params.id));
	}

	async restore(req: express.Request): Promise<void> {
		await auth.dao.restore(parseInt(req.params.id));
	}

	async baru(_req: express.Request, resp: express.Response): Promise<void> {
		try {

			let userName: string = _req.body.user_name;
			let password: string = md5(_req.body.password);

			let hasil: IAuth[] = await auth.dao.baru(userName, password);

			console.group('pendaftaran');
			console.log('user name:', userName);
			console.log('password:', password);
			console.log('hasil:', hasil);
			console.groupEnd();


			let s: ISessionData = session(_req);
			s.baru.stateHal = 'sukses';

			resp.redirect("/auth/baru");

			return;

		}
		catch (e) {
			if (e.code == 'ER_DUP_ENTRY') {
				console.log("error duplikat:");
				util.logError(e);
				let s: ISessionData = session(_req);
				s.pesan = 'Duplikat';
				s.error = true;
				resp.redirect('/auth/baru');
			}
			else {
				util.errorRedirect(_req, resp, e, "/auth/baru");
			}
		}
	}

	// async login(req: express.Request, resp: express.Response): Promise<void> {
	// 	try {
	// 		let userName: string = req.body.user_name;
	// 		let password: string = md5(req.body.password);

	// 		let hasil: IAuth[] = await auth.dao.login(userName, password);

	// 		let s: ISessionData = session(req);

	// 		if (!hasil || hasil.length == 0) {

	// 			console.group("login gagal:")
	// 			console.log("username:", userName);
	// 			console.log("password:", password);
	// 			console.log("hasil:", hasil);
	// 			console.groupEnd();

	// 			s.pesan = 'user name atau password salah';
	// 			s.login.stateHal = 'error';
	// 			s.error = true;

	// 			resp.redirect('/auth/login');

	// 			return;
	// 		}

	// 		let admin: IAuth = hasil[0];

	// 		s.id = admin.id;
	// 		s.statusLogin = true;
	// 		s.login.stateHal = 'sukses';
	// 		s.pesan = 'Login Berhasil';
	// 		s.error = false;
	// 		resp.redirect('/auth/login');

	// 	}
	// 	catch (e) {
	// 		// util.errorRedirect(_req, resp, e, "/auth/login");
	// 		util.respError(req, resp, e);
	// 	}
	// }

	async lupa(req: express.Request, resp: express.Response): Promise<void> {
		try {
			//TODO: belum selesai
			resp.status(200).send("");
		}
		catch (e) {
			util.respError(req, resp, e);
		}
	}

	async ganti(_req: express.Request, resp: express.Response): Promise<void> {
		try {
			//TODO: belum selesai
			resp.status(200).send("");
		}
		catch (e) {
			util.respError(_req, resp, e);
		}
	}

	async logout(_req: express.Request, resp: express.Response): Promise<void> {
		try {
			_req.session = null;
			resp.status(200).send('');
		}
		catch (e) {
			util.respError(_req, resp, e);
		}
	}

	async daftarUser(): Promise<IAuth[]> {

		// function daftarAnggota(data: string): string {
		// 	return `
		// 		<table>
		// 			<tr>
		// 				<th>user name</th>
		// 				<th>status hapus</th>
		// 				<th>perintah</th>
		// 			</tr>
		// 			${data}
		// 		</table>`
		// }

		let daftar: IAuth[] = await auth.dao.daftar();
		return daftar;

		// return auth.dao.daftar().then((item: IAuth[]) => {
		// 	let daftar: string = '';

		// 	item.forEach((item2) => {
		// 		let hapus = `<a href="/auth/hapus/${item2.id}">hapus</a>`;
		// 		let restore = `<a href="/auth/restore/${item2.id}">restore</a>`;

		// 		daftar += `
		// 				<tr>
		// 					<td>${item2.user_name}</td>
		// 					<td>${item2.hapus}</td>
		// 					<td>${hapus}</td>
		// 					<td>${restore}</td>
		// 				</tr>`;
		// 	});

		// 	dataWeb.daftarAnggota = daftarAnggota(daftar);

		// }).catch(() => {
		// 	dataWeb.daftarAnggota = daftarAnggota("");
		// })
	}

	/**
	 * middleware
	 * @param req 
	 * @param resp 
	 * @param next 
	 */
	checkAuthSession(req: express.Request, resp: express.Response, next: express.NextFunction) {
		if (!session(req).statusLogin) {
			resp.status(401).send('belum login');
			// next();
		}
		else {
			next();
			// next();
			//TODO: dihapus
		}
	}

}
