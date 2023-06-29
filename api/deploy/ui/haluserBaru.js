"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.halUserBaru = void 0;
const data_1 = require("../data");
const elNav_1 = require("../module/elNav");
const halUserBaru = (s) => {
    return `
        <html>

        <head>
            ${data_1.dataWeb.meta}
            <link href="/css/css.css" rel="stylesheet"/>
        </head>

        <body>
        
            ${data_1.dataWeb.pesanHtml(s)}

            <form enctype='multipart/form-data' action="/auth/baru" method="post">
                <label>user name:</label><br />
                <input type="text" name="user_name" /><br />
                <label>password:</label><br />
                <input type="password" name="password" /><br />
                <input type="submit" value="daftar">
            </form>

            ${(0, elNav_1.nav)()}

        </body>

        </html>
    `;
};
exports.halUserBaru = halUserBaru;
