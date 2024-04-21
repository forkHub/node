interface IJUmlah {
	jumlah: number;
}

interface IHasilQuery {
	fieldCount: number,
	affectedRows: number,
	insertId: number,
	serverStatus: 2,
	warningCount: number,
	message: string,
	protocol41: true,
	changedRows: number
}

interface ISessionData {
	id: number;
	statusLogin: boolean;
	defId: number;
	pesan: string;
	error: boolean;

	//TODO: redundant
	login?: {
		stateHal: string//baru, sukses, password salah, error,
	},

	baru?: {
		//TODO: redundant
		stateHal: string,	//baru, sukses, validasi error, error

		feld: {
			username: {
				pesan: string
			},
			password: {
				pesan: string
			}
		}
	}
}

interface ILapak {
	id: string,
	userName: string,
	password: string,
	hapus: number,
	role: number,

	//lapak info
	namaLapak: string
	deskripsi: string;

	//generated
	daftarBarang: IBarang[]
}

interface IJUmlah {
	jumlah: number;
}

interface IBarang {
	id: string,
	lapakId: string,
	nama: string,
	deskripsi: string,
	harga: number,
	hapus: boolean,
}