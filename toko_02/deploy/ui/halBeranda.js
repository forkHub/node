"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.beranda = void 0;
const data_1 = require("../data");
const store_1 = require("../module/store");
const toko_1 = require("../module/toko");
const Util_1 = require("../module/Util");
function item(user) {
    let hasil = '';
    user.forEach((item) => {
        hasil += `<div>
            <a href='${store_1.urlRes.lapak(item.id)}'>
                <span>${item.namaLapak}</span>
                <span>${item.deskripsi}</span>
            </a>
        </div>`;
    });
    return hasil;
}
function html(user) {
    return `
        <html>

        <head>
            ${data_1.dataWeb.meta}
            <link href="/css/css.css" rel="stylesheet"/>
        </head>

        <body>
            ${item(user)}
        </body>

        </html>`;
}
//entry point
function beranda(req, resp) {
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
exports.beranda = beranda;
async function data() {
    let barang = await toko_1.toko.lapakSql.daftarLapak();
    return html(barang);
}
