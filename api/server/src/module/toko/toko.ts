// import { Barang as BarangNoSql } from "./barang";
import { BarangNoSql } from "./barangNoSql";
import { Gudang } from "./gudang/gudang";
import { Router } from "./router";

class Toko {
    readonly router = new Router();
    readonly barang = new BarangNoSql();
    readonly gudang = new Gudang();
}

export const toko = new Toko();