"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.halLogin = void 0;
const data_1 = require("../data");
const elNav_1 = require("../module/elNav");
const halLogin = (s) => {
    return `
        <html>

        <head>
            ${data_1.dataWeb.meta}

            <link href="/css/css.css" rel="stylesheet"/>
        </head>

        <body>
            
            ${data_1.dataWeb.pesanHtml(s)}

            <form enctype='multipart/form-data' method='post' action='/auth/login'>
                <label>user name:</label><br />
                <input type="text" name="user_name" required/><br />
                <label>password:</label><br />
                <input type="password" name="password" required/><br />
                <input type="submit" value="login">
            </form>

            ${(0, elNav_1.nav)()}

        </body>

        </html>
    `;
};
exports.halLogin = halLogin;
