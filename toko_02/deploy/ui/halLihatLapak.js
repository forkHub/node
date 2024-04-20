"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lihatLapak = void 0;
const data_1 = require("../data");
const toko_1 = require("../module/toko");
const Util_1 = require("../module/Util");
const store_1 = require("../module/store");
async function daftarBarangObj(lapakId) {
    let barang = await toko_1.toko.barang.daftarBarangPerLapak(lapakId);
    return barang;
}
async function daftarBarangHtml(id) {
    let hasil = '';
    let items = await daftarBarangObj(id);
    items.forEach((item) => {
        hasil += `
                <div>
                    <a href="${store_1.urlRes.barang(item.id)}">
                        <img src=""/>
                        <div>
                            <div class='nama-barang'>${item.nama}</div>
                            <div class='deskripsi-barang'>${item.deskripsi}</div>
                        </div>
                    </a>
                </div>
            `;
    });
    return hasil;
}
async function renderLapakDetail(lapak) {
    let hasil = '';
    hasil += `
    <div>
        <div>${lapak.namaLapak}</div>
        <div>${lapak.deskripsi}</div>
        <div class="daftar-barang">
            ${await daftarBarangHtml(lapak.id)}
        </div>
    </div>`;
    return hasil;
}
async function html(lapak) {
    return `
        <html>

        <head>
            ${data_1.dataWeb.meta}
            <link href="/css/css.css" rel="stylesheet"/>
        </head>

        <body>
            ${await renderLapakDetail(lapak)}
        </body>

        </html>`;
}
//entry point
function lihatLapak(req, resp) {
    console.log('render lapak');
    try {
        data(req.params.id + '').then((hasil) => {
            resp.status(200).send(hasil);
        }).catch((e) => {
            Util_1.util.resp500(req, resp, e);
        });
    }
    catch (e) {
        Util_1.util.resp500(req, resp, e);
    }
}
exports.lihatLapak = lihatLapak;
async function data(id) {
    let user = await toko_1.toko.lapakSql.lapakSingle(id);
    return await html(user);
}
