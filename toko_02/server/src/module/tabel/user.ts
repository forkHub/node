import { kons } from "../Kons";
import * as fs from "fs";

export class UserObj implements IUser {
    namaLapak: string;
    nama_lapak: string;
    user_name: string;
    hapus: boolean;
    role: number;

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

    private _id: number = 0;
    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }
}

export class TableUser {
    static readonly list: UserObj[] = [];

    static getById(id: number): UserObj {
        id;
        return null;
    }

    static toDbo(): string {
        let ar: any[] = [];

        this.list.forEach((item) => {
            //TODO: use object
            let obj: IUser = {
                // deskripsiLapak: item.deskripsiLapak,
                id: item.id,
                // namaLapak: item.namaLapak,
                // noWa: item.noWa,
                password: item.password,
                user_name: "",
                hapus: false,
                role: 0,
                nama_lapak: ""
            }
            ar.push(obj);
        })

        return JSON.stringify(ar);
    }

    static save() {
        try {
            fs.writeFile(kons.folder_db + "user.json", this.toDbo(), function (err) {
                if (err) {
                    console.warn(err);
                    return;
                }
                console.log("The file was saved!");
            });
        }
        catch (e) {
            console.warn(e);
        }
    }

    static load() {
        fs.readFile(kons.folder_db + 'user.json', (err, data) => {
            if (err) {
                console.warn(err)
                return;
            }

            let str = data.toString("utf-8", 0, data.length);
            let objAr: any[] = JSON.parse(str);

            while (this.list.length > 0) {
                this.list.pop();
            }

            objAr.forEach((item) => {
                let obj = new UserObj();

                obj.id = item.id;
                obj.deskripsiLapak = item.deskripsiLapak;
                obj.namaLapak = item.namaLapak;
                obj.noWa = item.noWa;
                obj.password = item.password;
                obj.userName = item.userName;

                this.list.push(obj)
            })
        })
    }
}