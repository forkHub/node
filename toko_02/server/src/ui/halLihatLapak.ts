import express from "express";
import { dataWeb } from "../data";
import { toko } from "../module/toko";
import { util } from "../module/Util";
import { urlRes } from "../module/store";

async function daftarBarangObj(lapakId: string): Promise<IBarang[]> {
    let barang: IBarang[] = await toko.barang.daftarBarangPerLapak(lapakId);

    return barang;
}

async function daftarBarangHtml(id: string): Promise<string> {
    let hasil = '';

    let items = await daftarBarangObj(id);
    items.forEach((item) => {
        hasil += `
                <div>
                    <a href="${urlRes.barang(item.id)}">
                        <img src=""/>
                        <div>
                            <div class='nama-barang'>${item.nama}</div>
                            <div class='deskripsi-barang'>${item.deskripsi}</div>
                        </div>
                    </a>
                </div>
            `;
    })

    return hasil;
}

async function renderLapakDetail(lapak: ILapak): Promise<string> {
    let hasil = '';

    hasil += `
    <div>
        <div>${lapak.namaLapak}</div>
        <div>${lapak.deskripsi}</div>
        <div class="daftar-barang">
            ${await daftarBarangHtml(lapak.id)}
        </div>
    </div>`;


    return hasil;
}

async function html(lapak: ILapak): Promise<string> {
    return `
        <html>

        <head>
            ${dataWeb.meta}
            <link href="/css/css.css" rel="stylesheet"/>
        </head>

        <body>
            ${await renderLapakDetail(lapak)}
        </body>

        </html>`;
}

//entry point
export function lihatLapak(req: express.Request, resp: express.Response): void {
    console.log('render lapak');
    try {
        data(req.params.id + '').then((hasil) => {
            resp.status(200).send(hasil);
        }).catch((e) => {
            util.resp500(req, resp, e);
        })
    }
    catch (e) {
        util.resp500(req, resp, e);
    }
}

async function data(id: string): Promise<string> {
    let user: ILapak = await toko.lapakSql.lapakSingle(id);
    return await html(user);
}