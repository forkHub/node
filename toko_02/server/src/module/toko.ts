import { Pelapak } from "./pelapak/pelapak";
import { LapakSql } from "./lapakSql";
import { Router } from "./router";
import { BarangSql } from "./barangSql";

/**
 * Toko Module
 */
class Toko {
    readonly router = new Router();
    readonly barang = new BarangSql();
    readonly lapakSql = new LapakSql();
    readonly pelapakModule = new Pelapak();
}

export const toko = new Toko();