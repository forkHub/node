import express from "express";
import { URL } from "./store";
import { barangDetail } from "../ui/halLihatBarang";
import { toko } from "./toko";
import { beranda } from "../ui/halBeranda";
import { lihatLapak } from "../ui/halLihatLapak";

export class Router {
    readonly router = express.Router();

    impl(): void {
        console.log('toko router');

        this.router.get(URL.beranda, (req: express.Request, resp: express.Response) => { beranda(req, resp) })
        this.router.get(URL.barang, (req: express.Request, resp: express.Response) => { barangDetail(req, resp) })
        this.router.get(URL.lapak, (req: express.Request, resp: express.Response) => { lihatLapak(req, resp) })

        toko.pelapakModule.router.impl(this.router);
    }
}
