"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lapak = void 0;
const data_1 = require("../data");
const store_1 = require("../module/toko/store");
const toko_1 = require("../module/toko/toko");
const Util_1 = require("../module/Util");
function item(barang) {
    let hasil = '';
    barang.forEach((item) => {
        hasil += `<div>
            <a href='${store_1.urlRes.barang(item.id)}'>
                <span>${item.nama}</span>
                <span>${item.harga}</span>
            </a>
        </div>`;
    });
    return hasil;
}
function html(barang) {
    return `
        <html>

        <head>
            ${data_1.dataWeb.meta}
            <link href="/css/css.css" rel="stylesheet"/>
        </head>

        <body>
            ${item(barang)}
        </body>

        </html>`;
}
//entry point
function lapak(req, resp) {
    try {
        data().then((hasil) => {
            resp.status(200).send(hasil);
        }).catch((e) => {
            Util_1.util.resp500(req, resp, e);
        });
    }
    catch (e) {
        Util_1.util.resp500(req, resp, e);
    }
}
exports.lapak = lapak;
//TODO: diganti daftar lapak
async function data() {
    let barang = await toko_1.toko.barang.daftar();
    return html(barang);
}
