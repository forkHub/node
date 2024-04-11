import { dataWeb } from "../data";
import { nav } from "./elNav";


export const halUserBaru = (s: ISessionData): string => {

    return `
        <html>

        <head>
            ${dataWeb.meta}
            <link href="/css/css.css" rel="stylesheet"/>
        </head>

        <body>
        
            ${dataWeb.pesanHtml(s)}

            <form enctype='multipart/form-data' action="/auth/baru" method="post">
                <label>user name:</label><br />
                <input type="text" name="user_name" /><br />
                <label>password:</label><br />
                <input type="password" name="password" /><br />
                <input type="submit" value="daftar">
            </form>

            ${nav()}

        </body>

        </html>
    `;
}