import express, { Router } from "express";
import { URL } from "../store";
import { halDaftarBarang } from "../../../ui/halDaftarBarang";
import { toko } from "../toko";
import { util } from "../../Util";

export class GudangRouter {

    impl(router: Router): void {
        console.log("gudang router");
        router.get(URL.gudang_daftar, (req: express.Request, resp: express.Response) => { halDaftarBarang(req, resp) })
        router.post(URL.gudang_barang_hapus, (req: express.Request, resp: express.Response) => {
            req;
            resp;
            // toko.barang.
            toko.gudang.barang.hapus(req.params.id).then().catch((e) => {
                util.resp500(req, resp, e);
            })

            //TODO:
        })
    }
}
