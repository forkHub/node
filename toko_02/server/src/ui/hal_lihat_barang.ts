import { dataWeb } from "../data";
import express from "express";
import { toko } from "../module/toko/toko";
import { util } from "../module/Util";
import { urlRes } from "../module/toko/store";

function barangItem(barang: IBarang): string {
    return `
    <div>
        <span>${barang.nama}</span>
        <span>${barang.harga}</span>
    </div>`;
}

function nav(): string {
    return `
        <div>
            <a href='${urlRes.toko}'>toko</a>
        </div>
    `;
}

function html(barang: IBarang): string {
    return `
        <html>

        <head>
            ${dataWeb.meta}
            <link href="/css/css.css" rel="stylesheet"/>
        </head>

        <body>
            ${nav()}
            ${barangItem(barang)}
        </body>

        </html>`;
}

export function barangDetail(req: express.Request, resp: express.Response): void {
    try {
        data(req.params.id).then((hasil) => {
            resp.status(200).send(hasil);
        }).catch((e) => {
            util.resp500(req, resp, e);
        })
    }
    catch (e) {
        util.resp500(req, resp, e);
    }
}

async function data(id: string): Promise<string> {
    let barang = (await toko.barang.single(id))[0];
    return html(barang);
}