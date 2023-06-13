import { AuthCont } from "./AuthCont";
import { AuthSql } from "./AuthSql";
import { Router } from "./Router";
import { RouterKOns } from "./RouterKons";

class Auth {
    readonly routerKons: RouterKOns = new RouterKOns();
    readonly router: Router = new Router();
    readonly cont: AuthCont = new AuthCont();
    readonly dao: AuthSql = new AuthSql();
}

export var auth: Auth = new Auth();