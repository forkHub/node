"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataWeb = void 0;
/**
 * data-data untuk keperluan rendering
 */
exports.dataWeb = {
    meta: '',
    test: '',
    daftarAnggota: '',
    daftarEntl: '',
    nav: () => { },
    pesanHtml: (s) => { s; }
};
exports.dataWeb.test = '';
exports.dataWeb.meta = `
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, target-densityDpi=device-dpi">
        `;
exports.dataWeb.pesanHtml = (s) => {
    console.log('render pesan html');
    console.log('dataweb error ' + s.error);
    console.log('');
    if (s.pesan) {
        return `
           <div class="pesan ${s.error ? "error" : ""}">${s.pesan}</div><br/>
        `;
    }
    return '';
};
