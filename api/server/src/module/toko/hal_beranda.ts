import express from "express";
import { dataWeb } from "../../data";
import { urlRes } from "./store";
import { toko } from "./toko";
import { util } from "../Util";

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
export function beranda(req: express.Request, resp: express.Response): void {
    try {
        data().then((hasil) => {
            resp.status(200).send(hasil);
        }).catch((e) => {
            util.respError(req, resp, e);
        })
    }
    catch (e) {
        util.respError(req, resp, e);
    }
}

async function data(): Promise<string> {
    let barang = await toko.barang.daftar();
    return html(barang);
}