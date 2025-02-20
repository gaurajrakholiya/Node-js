import { Router } from "express";
import { userController } from "./user.controller";

export class userRoutes {
  router = Router();
  protected uc: userController = new userController();
  constructor() {
    this.router.post("/create-user", this.uc.createUser);
    this.router.post("/bulk-user", this.uc.updatebulkuser);
    this.router.get("/get-user", this.uc.getUsers);
    this.router.put("/update-user/:user_id", this.uc.updateUser);
  }
}
