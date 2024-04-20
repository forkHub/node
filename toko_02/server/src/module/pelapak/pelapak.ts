import { Barang } from "../barangObj";
import { PelapakRouter } from "./router";

export class Pelapak {
    readonly router = new PelapakRouter();
    readonly barang = new Barang();
}