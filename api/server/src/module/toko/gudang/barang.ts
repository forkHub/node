import { sql } from "../../Sql";

export class Barang {

    /**
     * daftar barang di gudang
     * @returns 
     */
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

    /**
     * barang single
     * @param id 
     * @returns 
     */
    async single(id: string): Promise<IBarang[]> {
        let hasil: IBarang[] = await sql.query(`
			SELECT * from tk_barang
            WHERE id = ?
			`,
            [id]) as IBarang[];

        return hasil;
    }

    /**
     * barang hapus
     * @param id 
     * @returns 
     */
    async hapus(id: string): Promise<IBarang[]> {
        let hasil: IBarang[] = await sql.query(`
			UPDATE tk_barang
            SET hapus=true
            WHERE id = ?
			`,
            [id]) as IBarang[];

        return hasil;
    }

    //TODO: baru, edit, hapus

}
