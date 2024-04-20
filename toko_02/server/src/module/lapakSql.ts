import { sql } from "./Sql";

export class LapakSql {

    async lapakSingle(id: string): Promise<ILapak> {
        let hasilAr: ILapak[] = await sql.query(`
            SELECT * FROM lapak
            WHERE id = ?
            AND hapus = 0
        `, [id]) as ILapak[];

        return hasilAr[0];
    }

    async daftarLapak(): Promise<ILapak[]> {
        let hasil: ILapak[] = await sql.query(
            `SELECT * FROM lapak
            WHERE hapus = 0
            ORDER BY namaLapak
            `, []
        ) as ILapak[];

        return hasil;
    }
}
