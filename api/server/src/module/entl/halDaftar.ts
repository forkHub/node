import { dataWeb } from "../../data";
import { nav } from "../elNav";

export const halDaftar = (s: ISessionData): string => {

    return `
        <html>

        <head>
            ${dataWeb.meta}
            <link href="/css/css.css" rel="stylesheet"/>
        </head>

        <body>
        
            ${dataWeb.pesanHtml(s)}

            ${/** daftar anggota */ ""}
            <div class="daftar-entitlement">
                ${dataWeb.daftarEntl}
            </div>

            ${nav()}

        </body>

        </html>`;
}