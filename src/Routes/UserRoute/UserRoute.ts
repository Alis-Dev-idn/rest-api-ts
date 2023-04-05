import { Router } from "express";
import UserController from "../../Controllers/UserController";
export default (routes: Router) => {
    routes.get("/user", UserController.getUsers);
};