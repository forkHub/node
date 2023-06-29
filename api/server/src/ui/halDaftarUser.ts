import { dataWeb } from "../data";
import { nav } from "../module/elNav";

function user(user: IAuth): string {
    return `
        <div class='disp-flex'>
            <span>${user.user_name}</span>
            <button onclick='editClick()'>edit</button>
            <button onclick='hapusClick()'>hapus</button>
        </div>
    `;
}

function users(users: IAuth[]): string {
    let hasil: string = '';

    users.forEach((item) => {
        hasil += user(item);
        hasil += '\n';
    });

    return `<div>
        ${hasil}
    </div>`;
}

export const halDaftarUser = (s: ISessionData, daftarUser: IAuth[]): string => {

    return `
        <html>

        <head>
            ${dataWeb.meta}
            <link href="/css/css.css" rel="stylesheet"/>
        </head>

        <body>
        
            ${dataWeb.pesanHtml(s)}

            ${/** daftar anggota */ ""}
            <div class="daftar-anggota">
                ${users(daftarUser)}
            </div>

            ${nav()}

        </body>

        </html>`;
}