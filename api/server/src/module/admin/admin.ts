import { Cont } from "./cont";
import { Router } from "./router";

class Admin {
    readonly router: Router = new Router();
    readonly cont: Cont = new Cont();
}

export var admin: Admin = new Admin();