import { sql } from "../Sql";

export class AuthSql {
	baru(userName: string, password: string): ILapak[] | PromiseLike<ILapak[]> {
		userName;
		password;
		throw new Error("Method not implemented.");
	}

	restore(arg0: number) {
		arg0;
		throw new Error("Method not implemented.");
	}

	daftar(): ILapak[] | PromiseLike<ILapak[]> {
		throw new Error("Method not implemented.");
	}

	hapus(arg0: number) {
		arg0; //TODO
		throw new Error("Method not implemented.");
	}

	async login(userName: string, password: string): Promise<ILapak[]> {

		let hasil: ILapak[] = await sql.query(`
			SELECT *
			FROM lapak
			WHERE userName = ? AND password = ? AND hapus = ?
		`, [userName, password, 0]) as ILapak[];

		return hasil;
	}
}
