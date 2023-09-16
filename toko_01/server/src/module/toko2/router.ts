import express from "express";
import { auth } from "./auth";


export class Router {
    readonly router = express.Router();

    impl(): void {
        auth(this.router);
    }
}