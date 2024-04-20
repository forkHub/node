import { dataWeb } from "../data";
import { nav } from "./elNav";

function user(user: ILapak): string {
    return `
        <div class='disp-flex'>
            <span>${user.userName}</span>
            <button onclick='editClick()'>edit</button>
            <button onclick='hapusClick()'>hapus</button>
        </div>
    `;
}

function users(users: ILapak[]): string {
    let hasil: string = '';

    users.forEach((item) => {
        hasil += user(item);
        hasil += '\n';
    });

    return `<div>
        ${hasil}
    </div>`;
}

export const halDaftarUser = (s: ISessionData, daftarUser: ILapak[]): string => {
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