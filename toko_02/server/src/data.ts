/**
 * data-data untuk keperluan rendering
 */
export const dataWeb = {
    meta: '',
    test: '',

    daftarAnggota: '',
    daftarEntl: '',
    nav: () => { },
    pesanHtml: (s: ISessionData) => { s; }
}

dataWeb.test = '';
dataWeb.meta = `
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, target-densityDpi=device-dpi">
        `;
dataWeb.pesanHtml = (s: ISessionData) => {

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