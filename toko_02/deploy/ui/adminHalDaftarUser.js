"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.halDaftarUser = void 0;
const data_1 = require("../data");
const elNav_1 = require("./elNav");
function user(user) {
    return `
        <div class='disp-flex'>
            <span>${user.userName}</span>
            <button onclick='editClick()'>edit</button>
            <button onclick='hapusClick()'>hapus</button>
        </div>
    `;
}
function users(users) {
    let hasil = '';
    users.forEach((item) => {
        hasil += user(item);
        hasil += '\n';
    });
    return `<div>
        ${hasil}
    </div>`;
}
const halDaftarUser = (s, daftarUser) => {
    return `
        <html>

        <head>
            ${data_1.dataWeb.meta}
            <link href="/css/css.css" rel="stylesheet"/>
        </head>

        <body>
        
            ${data_1.dataWeb.pesanHtml(s)}

            ${ /** daftar anggota */""}
            <div class="daftar-anggota">
                ${users(daftarUser)}
            </div>

            ${(0, elNav_1.nav)()}
        </body>

        </html>`;
};
exports.halDaftarUser = halDaftarUser;
