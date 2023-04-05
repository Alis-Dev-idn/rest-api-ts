import { Request, Response } from "express";

class UserController {
    public static async getUsers(req: Request, res: Response) {
        res.status(200).json({message: "user ok"});
    }
}

export default UserController;