import { Barang } from "./plBarangSql";
import { PelapakRouter } from "./plRouter";

export class Pelapak {
    readonly router = new PelapakRouter();
    readonly barang = new Barang();
}