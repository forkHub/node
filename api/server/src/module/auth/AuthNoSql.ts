import * as fs from "fs";
import { Idgen } from "../IdGen";
// import { IAuthHandler } from "./IAuthHandler";
import { kons } from "../Kons";
import { TableUser, UserObj } from "../tabel/user";

export class AuthNoSql {

    daftar(): IAuth[] | PromiseLike<IAuth[]> {
        throw new Error("Method not implemented.");
    }
    hapus(arg0: number) {
        arg0;
        throw new Error("Method not implemented.");
    }

    restore(arg0: number) {
        arg0;
        throw new Error("Method not implemented.");
    }
    static readonly list: IAuth[] = [];

    constructor() {
        //dummy data
        this.baru('admin', 'admin123');
    }

    async login(userName: string, password: string): Promise<UserObj[]> {

        let hasil: UserObj[] = [];
        TableUser.list.forEach((item) => {
            if (item.userName != userName) return;
            if (item.password != password) return;

            hasil.push(item);
        })

        return hasil;
    }

    async baru(userName: string, password: string): Promise<IAuth[]> {
        let auth: IAuth;

        auth = {
            id: Idgen.id,
            user_name: userName,
            password: password,
            hapus: false,
            nama_lapak: '',
            role: 0
        }

        AuthNoSql.list.push(auth);
        return [auth];
    }

    muat() {

    }

    simpan() {
        // fs.writeFile()
        fs.writeFile(kons.folder_db + "auth.json", "Hey there!", function (err) {
            if (err) {
                return console.log(err);
            }
            console.log("The file was saved!");
        });
    }

}