import { Util } from "../comp/Util";
import { Url } from "./Url";

declare var data: string;

class Beranda {
	static mulai(): void {
		let lapakAr: ILapak[] = JSON.parse(data);

		lapakAr.forEach((item: ILapak) => {
			let view: HTMLElement;

			view = Util.getTemplate('lapak-item');
			Util.getEl('h4').innerHTML = item.nama;
			Util.getEl('deskripsi').innerHTML = item.deskripsi;

			Util.getEl('div.daftr-barang').appendChild(view);

			view.onclick = () => {
				window.top.location.href = Url.lapak;
			}
		});

	}
}

interface ILapak {
	id: number,
	nama: string,
	deskripsi: string
}

Beranda.mulai();