import { sql } from "../Sql";

export class Db {

	async daftar(): Promise<IEntitlement[]> {
		let hasil: IEntitlement[] = await sql.query(`
			SELECT * from entitlement
			ORDER BY nama, hapus
			`,
			[]) as IEntitlement[];

		console.group('daftar entitlement:');
		console.log(hasil);
		console.groupEnd();

		return hasil;
	}

}
