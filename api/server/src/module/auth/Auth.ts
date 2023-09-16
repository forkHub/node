import { Cont } from "./Cont";
import { ContPost } from "./ContPost";
import { Router } from "./Router";
// import { RouterKOns } from "./RouterKons";
import { AuthNoSql } from "./AuthNoSql";

class Auth {
    // readonly routerKons: RouterKOns = new RouterKOns();
    readonly router: Router = new Router();
    readonly cont: Cont = new Cont();
    readonly contPost: ContPost = new ContPost();
    readonly dao = new AuthNoSql();
}

export var auth: Auth = new Auth();