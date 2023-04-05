import { Router } from "express";
import UserRoute from "./UserRoute/UserRoute";

const Routes = Router();

export default (): Router => {
    UserRoute(Routes);
    return Routes;
};