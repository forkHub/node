"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.halDaftarBarang = void 0;
const Util_1 = require("../module/Util");
const toko_1 = require("../module/toko");
const data_1 = require("../data");
const store_1 = require("../module/store");
function halDaftarBarang(req, resp) {
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
exports.halDaftarBarang = halDaftarBarang;
function item(barang) {
    let hasil = '';
    barang.forEach((item) => {
        hasil += `<div class='disp-flex'>
            <div class='group'>
                <span>${item.nama}</span>
                <span>${item.harga}</span>
            </div>
            <div class='menu'>
                <a href="${Util_1.util.getUrl(store_1.URL.pl_barang_edit, [item.id])}">edit info</a>
                <a href="${Util_1.util.getUrl(store_1.URL.pl_barang_edit, [item.id])}">edit foto</a>
                <a href="#" onclick="hapus(${Util_1.util.getUrl(store_1.URL.pl_barang_hapus, [item.id])})">hapus</a>
            </div>
        </div>`;
    });
    return hasil;
}
function menu() {
    return `
        <a href="${Util_1.util.getUrl(store_1.URL.pl_barang_baru, [])}">tambah barang</a>
    `;
}
function html(barang) {
    return `
        <html>

        <head>
            ${data_1.dataWeb.meta}
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
async function data() {
    let barang = await toko_1.toko.pelapakModule.barang.daftar();
    return html(barang);
}
