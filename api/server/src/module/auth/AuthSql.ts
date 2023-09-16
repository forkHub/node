import { sql } from "../Sql";

export class AuthSql {
	async login(userName: string, password: string): Promise<IAuth[]> {

		let hasil: IAuth[] = await sql.query(`
			SELECT *
			FROM auth
			WHERE user_name = ? AND password = ? AND hapus = ?
		`, [userName, password, 0]) as IAuth[];

		return hasil;
	}
}
