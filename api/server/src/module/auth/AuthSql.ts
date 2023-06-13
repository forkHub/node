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

	//verify user lupa kunci

	//ganti password

	//daftar
	async baru(userName: string, password: string): Promise<IAuth[]> {
		let hasil: IAuth[] = await sql.query(`
			INSERT INTO auth 
			(user_name, password) 
			VALUES (?, ?)`,
			[userName, password]) as IAuth[];

		return hasil;
	}

	async daftar(): Promise<IAuth[]> {
		let hasil: IAuth[] = await sql.query(`
			SELECT * from auth
			ORDER BY user_name, hapus
			`,
			[]) as IAuth[];

		console.group('daftar anggota:');
		console.log(hasil);
		console.groupEnd();

		return hasil;
	}

	//update sql lainnya berdasarkan is deleted => baca
	async hapus(id: number): Promise<IHasilQuery[]> {
		let hasil: IHasilQuery[] = await sql.query(`
			UPDATE auth
			SET hapus = 1
			WHERE id = ?;
		`,
			[id]) as IHasilQuery[];

		console.log('hapus:');
		console.log(hasil);
		console.log('');

		return hasil;
	}

	//update sql lainnya berdasarkan is deleted => baca
	async restore(id: number): Promise<IHasilQuery[]> {
		let hasil: IHasilQuery[] = await sql.query(`
			UPDATE auth
			SET hapus = 0
			WHERE id = ?;
		`,
			[id]) as IHasilQuery[];

		console.log('restore:');
		console.log(hasil);
		console.log('');

		return hasil;
	}

}
