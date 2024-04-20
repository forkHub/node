import { AuthSql } from "./AuthSql";
import { Cont } from "./AuthCont";
import { ContPost } from "./ContPost";
import { Router } from "./Router";

class Auth {
    // readonly routerKons: RouterKOns = new RouterKOns();
    readonly router: Router = new Router();
    readonly cont: Cont = new Cont();
    readonly contPost: ContPost = new ContPost();
    readonly dao = new AuthSql();
}

export var auth: Auth = new Auth();