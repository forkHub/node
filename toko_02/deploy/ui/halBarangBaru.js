"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.barangBaru = void 0;
const Util_1 = require("../module/Util");
const data_1 = require("../data");
const store_1 = require("../module/toko/store");
function barangBaru(req, resp) {
    try {
        resp.status(200).send(html());
    }
    catch (e) {
        Util_1.util.resp500(req, resp, e);
    }
}
exports.barangBaru = barangBaru;
function menu() {
    return `
        <a href="${Util_1.util.getUrl(store_1.URL.gudang_daftar, [])}">dafar barang</a>
    `;
}
function html() {
    return `
        <html>

        <head>
            ${data_1.dataWeb.meta}
            <link href="/css/css.css" rel="stylesheet"/>
            <link href="/css/umum.css" rel="stylesheet"/>
        </head>

        <body>
            ${menu()}
            <hr/>
            <form method="post" action="${store_1.URL.gudang_barang_baru}">

            </form>
            <script src="/js/gudang/hal_barang_baru.js"></script>
        </body>

        </html>`;
}
