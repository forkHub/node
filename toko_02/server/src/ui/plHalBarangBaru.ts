import express from "express";
import { util } from "../module/Util";
import { dataWeb } from "../data";
import { URL } from "../module/store";

export function barangBaru(req: express.Request, resp: express.Response): void {
    try {
        resp.status(200).send(html());
    }
    catch (e) {
        util.resp500(req, resp, e);
    }
}

function menu(): string {
    return `
        <a href="${util.getUrl(URL.pl_barang_daftar, [])}">dafar barang</a>
    `;
}

function html(): string {
    return `
        <html>

        <head>
            ${dataWeb.meta}
            <link href="/css/css.css" rel="stylesheet"/>
            <link href="/css/umum.css" rel="stylesheet"/>
        </head>

        <body>
            ${menu()}
            <hr/>
            <form method="post" action="${URL.pl_barang_baru}">

            </form>
            <script src="/js/gudang/hal_barang_baru.js"></script>
        </body>

        </html>`;
}