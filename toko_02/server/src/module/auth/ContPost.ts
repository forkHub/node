import md5 from "blueimp-md5";
import express from "express";
import { session } from "../SessionData";
import { util } from "../Util";
import { auth } from "./Auth";

export class ContPost {

    async login(req: express.Request, resp: express.Response): Promise<void> {
        try {
            let userName: string = req.body.user_name;
            let password: string = md5(req.body.password);

            let user: IUser[] = await auth.dao.login(userName, password);

            let s: ISessionData = session(req);

            if (!user || user.length == 0) {

                console.group("login gagal:")
                console.log("username:", userName);
                console.log("password:", password);
                console.log("hasil:", user);
                console.groupEnd();

                s.pesan = 'user name atau password salah';
                s.login.stateHal = 'error';
                s.error = true;

                // resp.redirect('/auth/login');
                // resp.status(200).send(JSON.stringify(user));
                resp.status(401).send('');

                return;
            }

            let admin: IUser = user[0];

            s.id = admin.id;
            s.statusLogin = true;
            s.login.stateHal = 'sukses';
            s.pesan = 'Login Berhasil';
            s.error = false;

            admin.password = '';

            resp.status(200).send(JSON.stringify(admin));

        }
        catch (e) {
            // util.errorRedirect(_req, resp, e, "/auth/login");
            util.resp500(req, resp, e);
        }
    }

}