export class LapakObj implements ILapak {
    private _daftarBarang: IBarang[] = [];
    public get daftarBarang(): IBarang[] {
        return this._daftarBarang;
    }
    public set daftarBarang(value: IBarang[]) {
        this._daftarBarang = value;
    }

    private _deskripsi: string;
    public get deskripsi(): string {
        return this._deskripsi;
    }
    public set deskripsi(value: string) {
        this._deskripsi = value;
    }


    private _namaLapak: string;
    public get namaLapak(): string {
        return this._namaLapak;
    }
    public set namaLapak(value: string) {
        this._namaLapak = value;
    }

    private _hapus: number;
    public get hapus(): number {
        return this._hapus;
    }
    public set hapus(value: number) {
        this._hapus = value;
    }

    private _role: number;
    public get role(): number {
        return this._role;
    }
    public set role(value: number) {
        this._role = value;
    }

    private _deskripsiLapak: string;
    public get deskripsiLapak(): string {
        return this._deskripsiLapak;
    }
    public set deskripsiLapak(value: string) {
        this._deskripsiLapak = value;
    }

    private _noWa: string;
    public get noWa(): string {
        return this._noWa;
    }
    public set noWa(value: string) {
        this._noWa = value;
    }


    private _userName: string;
    public get userName(): string {
        return this._userName;
    }
    public set userName(value: string) {
        this._userName = value;
    }

    private _password: string;
    public get password(): string {
        return this._password;
    }
    public set password(value: string) {
        this._password = value;
    }

    private _id: string = '0';
    public get id(): string {
        return this._id;
    }
    public set id(value: string) {
        this._id = value;
    }
}