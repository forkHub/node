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

interface IAuth {
	id: number,
	user_name: string,
	password: string,
	hapus: number,
	role: number,

	// def_id: number
	nama_lapak: string
}

interface IJUmlah {
	jumlah: number;
}
