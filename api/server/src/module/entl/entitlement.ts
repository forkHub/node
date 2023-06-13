import { Cont } from "./cont";
import { Db } from "./db";
import { Router } from "./router";

class Entl {
    // readonly routerKons: RouterKOns = new RouterKOns();
    readonly router: Router = new Router();
    readonly cont: Cont = new Cont();
    readonly db: Db = new Db();
}

export var entl: Entl = new Entl();