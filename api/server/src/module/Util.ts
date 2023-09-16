import express from "express";
import fs from "fs";
import { session } from "./SessionData";

export class Util {
	private caches: ICache[] = [];
	private _randId: string = '';
	private _baseDir: string = '';
	static readonly revisi: string = '202212';

	sessionDefault(s: ISessionData): void {
		s.error = false;
		s.pesan = '';
	}

	getUrl(url: string, params: any[]): string {
		let urlHasil: string = url;

		params.forEach((item: string) => {
			urlHasil = urlHasil.replace(/\:[a-zA-Z_0-9]+/, item + '');
		});

		return urlHasil;
	}

	// stringNull(t: string): string {
	// 	if (!t) return '---';
	// 	if ('' == t) return '---';

	// 	return t;
	// }

	// stringHrefNull(t: string): string {
	// 	if (!t) return '#';
	// 	if ('' == t) return '#';

	// 	return t
	// }

	// renderValue(t: string): string {
	// 	if (!t) return '---';
	// 	if ("" == t) return '---';

	// 	return t;
	// }

	// dateTimeStamp(t: string): string {
	// 	// console.log('date time stamp, input: ' + t);

	// 	if (!t) return '---';
	// 	if ('' == t) return '---';

	// 	t = t + '';

	// 	let date: Date = new Date(t);

	// 	if (!date) return '---';
	// 	if ('Invalid Date' == (date + '')) return '---';

	// 	let dateStr: string = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();

	// 	// console.log('date time stamp, hasil: ' + dateStr);
	// 	return dateStr;
	// }

	// buatDateSekarang(): string {
	// 	let date: Date = new Date();

	// 	return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
	// }

	// buatDateLama(): string {
	// 	let date: Date = new Date(1900, 1, 1);
	// 	return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
	// }

	// arr2String(ar: string[]): string {
	// 	let hasil: string = ' ';

	// 	ar.forEach((item: string, idx: number) => {
	// 		if (0 === idx) {
	// 			hasil += item;
	// 		}
	// 		else {
	// 			hasil += " ," + item;
	// 		}
	// 	})

	// 	hasil += ' ';

	// 	return hasil;
	// }

	buatRandom(): void {
		this._randId = '';
		for (let i: number = 0; i < 10; i++) {
			this._randId += (Math.floor(Math.random() * 10) + '');
		}
	}

	// renderSpasiEnter(str: string): string {
	// 	str = str.replace(/(?:\r\n|\r\|\n)/g, "<br/>");
	// 	str = str.replace(/  /g, "&nbsp;&nbsp;");
	// 	return str;
	// }

	private ambilDariCache(url: string): string {
		let hasil: string = '';

		this.caches.forEach((item: ICache) => {
			if (item.url === url) {
				hasil = item.string;
			}
		})

		return hasil;
	}

	hapusCache(): void {
		this.caches = [];
	}

	async getFileNoCache(file: string): Promise<string> {
		return new Promise((resolve, reject) => {
			fs.readFile(file, (err: NodeJS.ErrnoException, content) => {
				if (err) {
					reject(err);
				}
				else {
					resolve(content.toString());
				}
			})
		});
	}

	logError(e: Error): void {
		console.group("error");
		console.debug("==================================================")
		console.error(e);
		console.debug("==================================================")
		console.groupEnd();
	}

	errorRedirect(req: express.Request, resp: express.Response, e: Error, url: string) {
		this.logError(e);
		let s: ISessionData = session(req);
		s.pesan = 'Ada kesalahan, silahkan coba lagi';
		resp.redirect(url);
	}

	/**
	 * fatal error
	 * @param req 
	 * @param resp 
	 * @param e 
	 */
	respError(req: express.Request, resp: express.Response, e: Error) {
		this.logError(e);
		this.sessionDefault(session(req));
		resp.status(500).send(e.message);
	}


	async getFile(file: string): Promise<string> {
		return new Promise((resolve, reject) => {
			let cache: string;

			cache = this.ambilDariCache(file);

			if (cache != '') {
				cache = cache.replace('{{revisi}}', Util.revisi);
				resolve(cache);
			}

			fs.readFile(file, (err: NodeJS.ErrnoException, content) => {
				if (err) {
					reject(err);
				}
				else {
					this.caches.push({
						url: file,
						string: content.toString()
					})
					resolve(content.toString().replace('{{revisi}}', Util.revisi));
				}
			})

		});
	}

	async tulisKeFile(path: string, data: string): Promise<void> {
		return new Promise((resolve, reject) => {
			fs.writeFile(path, data, (err) => {
				if (err) {
					reject(err);
				}
				else {
					resolve();
				}
			})
		});
	}

	buatWa(wa: string, namaBarang: string): string {
		return 'https://wa.me/' + wa + "?text==========%0D%0A" + namaBarang + "%0D%0A=========%0D%0AAssalamu'alaikum:";
	}

	pesanWa(wa: string, pesan: string): string {
		return 'https://wa.me/' + wa + "?text%0D%0A" + pesan;
	}

	public get randId(): string {
		return this._randId;
	}

	public get baseDir(): string {
		return this._baseDir;
	}

	public set baseDir(value: string) {
		this._baseDir = value;
	}

}

export var util: Util = new Util();

interface ICache {
	url: string,
	string: string
}


interface IError {
	code: number,
	pesan: string,
	error?: Error;
	sebab?: IError;
}

export class Error2 {
	static buat(code: number = 200, pesan: string = '', error: Error = null, sebab: IError): IError {
		return {
			code: code,
			pesan: pesan,
			error: error,
			sebab: sebab
		}
	}

	toString(): string {
		return JSON.stringify(this);
	}
} 