import express from "express";
import { dataWeb } from "../data";
import { urlRes } from "../module/toko/store";
import { toko } from "../module/toko/toko";
import { util } from "../module/Util";

function item(barang: IBarang[]): string {
    let hasil = '';

    barang.forEach((item) => {
        hasil += `<div>
            <a href='${urlRes.barang(item.id)}'>
                <span>${item.nama}</span>
                <span>${item.harga}</span>
            </a>
        </div>`
    })

    return hasil;
}

function html(barang: IBarang[]): string {
    return `
        <html>

        <head>
            ${dataWeb.meta}
            <link href="/css/css.css" rel="stylesheet"/>
        </head>

        <body>
            ${item(barang)}
        </body>

        </html>`;
}

//entry point
export function lapak(req: express.Request, resp: express.Response): void {
    try {
        data().then((hasil) => {
            resp.status(200).send(hasil);
        }).catch((e) => {
            util.resp500(req, resp, e);
        })
    }
    catch (e) {
        util.resp500(req, resp, e);
    }
}

//TODO: diganti daftar lapak
async function data(): Promise<string> {
    let barang = await toko.barang.daftar();
    return html(barang);
}