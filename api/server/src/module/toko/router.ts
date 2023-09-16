import express from "express";
import { beranda } from "./hal_beranda";
import { URL } from "./store";
import { barangDetail } from "./hal_lihat_barang";
import { toko } from "./toko";

export class Router {
    readonly router = express.Router();

    impl(): void {
        this.router.get(URL.toko, (req: express.Request, resp: express.Response) => { beranda(req, resp) })
        this.router.get(URL.barang, (req: express.Request, resp: express.Response) => { barangDetail(req, resp) })

        toko.gudang.router.impl(this.router);
    }
}
