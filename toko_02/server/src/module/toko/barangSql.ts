import { sql } from "../Sql";

export class BarangSql {

    async daftar(): Promise<IBarang[]> {
        let hasil: IBarang[] = await sql.query(`
			SELECT * from tk_barang
			ORDER BY nama, hapus
			`,
            []) as IBarang[];

        console.group('daftar barang:');
        console.log(hasil);
        console.groupEnd();

        return hasil;
    }

    async single(id: string): Promise<IBarang[]> {
        let hasil: IBarang[] = await sql.query(`
			SELECT * from tk_barang
            WHERE id = ?
			`,
            [id]) as IBarang[];

        return hasil;
    }
}
