"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.barangDetail = void 0;
const data_1 = require("../data");
const toko_1 = require("../module/toko");
const Util_1 = require("../module/Util");
function barangItem(barang) {
    return `
    <div>
        <span>${barang.nama}</span>
        <span>${barang.harga}</span>
    </div>`;
}
function html(barang) {
    return `
        <html>

        <head>
            ${data_1.dataWeb.meta}
            <link href="/css/css.css" rel="stylesheet"/>
        </head>

        <body>
            ${barangItem(barang)}
        </body>

        </html>`;
}
function barangDetail(req, resp) {
    try {
        data(req.params.id).then((hasil) => {
            resp.status(200).send(hasil);
        }).catch((e) => {
            Util_1.util.resp500(req, resp, e);
        });
    }
    catch (e) {
        Util_1.util.resp500(req, resp, e);
    }
}
exports.barangDetail = barangDetail;
async function data(id) {
    let barang = (await toko_1.toko.barang.single(id))[0];
    return html(barang);
}
