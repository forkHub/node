import express from "express";
import { util } from "../module/Util";
import { toko } from "../module/toko/toko";
import { dataWeb } from "../data";
import { URL } from "../module/toko/store";

export function halDaftarBarang(req: express.Request, resp: express.Response): void {
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

function item(barang: IBarang[]): string {
    let hasil = '';

    barang.forEach((item) => {
        hasil += `<div class='disp-flex'>
            <div class='group'>
                <span>${item.nama}</span>
                <span>${item.harga}</span>
            </div>
            <div class='menu'>
                <a href="${util.getUrl(URL.gudang_barang_edit, [item.id])}">edit info</a>
                <a href="${util.getUrl(URL.gudang_barang_edit, [item.id])}">edit foto</a>
                <a href="#" onclick="hapus(${util.getUrl(URL.gudang_barang_hapus, [item.id])})">hapus</a>
            </div>
        </div>`
    })

    return hasil;
}

function menu(): string {
    return `
        <a href="${util.getUrl(URL.gudang_barang_baru, [])}">tambah barang</a>
    `;
}

function html(barang: IBarang[]): string {
    return `
        <html>

        <head>
            ${dataWeb.meta}
            <link href="/css/css.css" rel="stylesheet"/>
            <link href="/css/umum.css" rel="stylesheet"/>
        </head>

        <body>
            ${item(barang)}
            ${menu()}

            <script src="/js/gudang/hal_daftar_barang.js"></script>
        </body>

        </html>`;
}

async function data(): Promise<string> {
    let barang = await toko.gudang.barang.daftar();
    return html(barang);
}
