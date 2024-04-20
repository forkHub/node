"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.daftarLapak = void 0;
const data_1 = require("../data");
const store_1 = require("../module/toko/store");
const toko_1 = require("../module/toko/toko");
const Util_1 = require("../module/Util");
function items(barang) {
    let hasil = '';
    barang.forEach((item) => {
        hasil += `<div>
            <a href='${store_1.urlRes.lapak(item.id)}'>
                <span>${item.namaLapak}</span>
                <span>${item.deskripsi}</span>
            </a>
        </div>`;
    });
    return hasil;
}
function html(users) {
    return `
        <html>

        <head>
            ${data_1.dataWeb.meta}
            <link href="/css/css.css" rel="stylesheet"/>
        </head>

        <body>
            ${items(users)}
        </body>

        </html>`;
}
//entry point
function daftarLapak(req, resp) {
    console.log('render daftar lapak');
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
exports.daftarLapak = daftarLapak;
//TODO: diganti daftar lapak
async function data() {
    let user = await toko_1.toko.lapak.daftarLapak();
    return html(user);
}
