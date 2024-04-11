import { dataWeb } from "../data";
import { nav } from "./elNav";

export const halLogin = (s: ISessionData) => {
    return `
        <html>

        <head>
            ${dataWeb.meta}

            <link href="/css/css.css" rel="stylesheet"/>
        </head>

        <body>
            
            ${dataWeb.pesanHtml(s)}

            <form enctype='multipart/form-data' method='post' action='/auth/login'>
                <label>user name:</label><br />
                <input type="text" name="user_name" required/><br />
                <label>password:</label><br />
                <input type="password" name="password" required/><br />
                <input type="submit" value="login">
            </form>

            ${nav()}

            <script src="/js/auth_login.js"></script>
        </body>

        </html>
    `;
}