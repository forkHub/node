import express, { Router } from "express";
import { URL } from "../store";
import { halDaftarBarang } from "../../ui/plHalDaftarBarang";
import { toko } from "../toko";
import { util } from "../Util";

export class PelapakRouter {

    impl(router: Router): void {
        console.log("pelapak router");
        router.get(URL.pl_barang_daftar, (req: express.Request, resp: express.Response) => { halDaftarBarang(req, resp) })
        router.post(URL.pl_barang_hapus, (req: express.Request, resp: express.Response) => {
            req;
            resp;
            // toko.barang.
            toko.pelapakModule.barang.hapus(req.params.id).then().catch((e: any) => {
                util.resp500(req, resp, e);
            })

            //TODO:
        })
    }
}
