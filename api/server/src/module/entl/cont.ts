import { dataWeb } from "../../data";
import { entl } from "./entitlement";

export class Cont {
    async renderDaftarUser(): Promise<void> {

        function daftarAnggota(data: string): string {
            return `
				<table>
					<tr>
						<th>user name</th>
						<th>status hapus</th>
						<th>perintah</th>
					</tr>
					${data}
				</table>`
        }

        return entl.db.daftar().then((item: IEntitlement[]) => {
            let daftar: string = '';

            item.forEach((item2) => {
                let hapus = `<a href="/auth/hapus/${item2.id}">hapus</a>`;
                let restore = `<a href="/auth/restore/${item2.id}">restore</a>`;

                daftar += `
						<tr>
							<td>${item2.nama}</td>
							<td>${item2.hapus}</td>
							<td>${hapus}</td>
							<td>${restore}</td>
						</tr>`;
            });

            // let html = `
            // 		<table>
            // 			<tr>
            // 				<th>user name</th>
            // 				<th>status</th>
            // 				<th>perintah</th>
            // 			</tr>
            // 			${daftar}
            // 		</table>`;

            dataWeb.daftarAnggota = daftarAnggota(daftar);

        }).catch(() => {
            dataWeb.daftarAnggota = daftarAnggota("");
        })
    }

}