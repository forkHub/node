import express from "express";
import { dataWeb } from "../data";
import { urlRes } from "../module/store";
import { toko } from "../module/toko";
import { util } from "../module/Util";

function item(user: ILapak[]): string {
    let hasil = '';

    user.forEach((item) => {
        hasil += `<div>
            <a href='${urlRes.lapak(item.id)}'>
                <span>${item.namaLapak}</span>
                <span>${item.deskripsi}</span>
            </a>
        </div>`
    })

    return hasil;
}

function html(user: ILapak[]): string {
    return `
        <html>

        <head>
            ${dataWeb.meta}
            <link href="/css/css.css" rel="stylesheet"/>
        </head>

        <body>
            ${item(user)}
        </body>

        </html>`;
}

//entry point
export function beranda(req: express.Request, resp: express.Response): void {
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

async function data(): Promise<string> {
    let barang: ILapak[] = await toko.lapakSql.daftarLapak();
    return html(barang);
}