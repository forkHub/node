// interface ISlAnggota {
// 	id?: number,
// 	nama?: string,
// 	nama_lengkap?: string,
// 	alamat?: string,
// 	jkl?: string,
// 	wa?: string,
// 	fb?: string,
// 	instagram?: string,
// 	tgl_lahir?: string,
// 	tgl_meninggal?: string,
// 	foto?: string;
// 	thumb?: string;

// 	ortu_id?: number,
// 	rel_id?: number,
// 	bani?: number,

// 	//external
// 	populated?: boolean
// 	pas?: ISlAnggota;
// 	rel?: ISlRelasi;

// 	ortu?: ISlAnggota[];
// 	saudara?: ISlAnggota[];
// 	mbah?: ISlAnggota[];
// 	lek?: ISlAnggota[];
// 	sepupu?: ISlAnggota[];
// 	ponakan?: ISlAnggota[];
// 	cucu?: ISlAnggota[];

// 	pasangan_id?: number,
// 	pasangan_nama?: string,
// 	ayah_nama?: string
// 	ibu_nama?: string
// 	anak?: ISlAnggota[]
// }

// interface ISlRelasi {
// 	id?: number,
// 	istri?: number,
// 	suami?: number,

// 	//external
// 	nama_suami?: string,
// 	nama_istri?: string
// }

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
	role: number;
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
	hapus: boolean,
	role: number,

	// def_id: number
	nama_lapak: string
}

interface IJUmlah {
	jumlah: number;
}
