import { Barang } from "./barang";
import { GudangRouter } from "./router";

export class Gudang {
    readonly router = new GudangRouter();
    readonly barang = new Barang();
}