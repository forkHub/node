import { sql } from "../Sql";

export class AuthSql {
	baru(userName: string, password: string): IUser[] | PromiseLike<IUser[]> {
		userName;
		password;
		throw new Error("Method not implemented.");
	}

	restore(arg0: number) {
		arg0;
		throw new Error("Method not implemented.");
	}

	daftar(): IUser[] | PromiseLike<IUser[]> {
		throw new Error("Method not implemented.");
	}

	hapus(arg0: number) {
		arg0; //TODO
		throw new Error("Method not implemented.");
	}

	async login(userName: string, password: string): Promise<IUser[]> {

		let hasil: IUser[] = await sql.query(`
			SELECT *
			FROM auth
			WHERE user_name = ? AND password = ? AND hapus = ?
		`, [userName, password, 0]) as IUser[];

		return hasil;
	}
}
