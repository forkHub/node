import express from "express";
import { admin } from "./admin";

export class Router {
    readonly router = express.Router();

    impl(): void {
        this.router.get("/admin", admin.cont.beranda);
    }
}