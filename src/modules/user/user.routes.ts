import { Router } from "express";
import { userController } from "./user.controller";
import { userSchema } from "./user.schema";
import { bodyValidate } from "../../middleware/validate.middleware";

export class userRoutes {
  router = Router();
  protected uc: userController = new userController();
  constructor() {
    this.router.post("/create-user", bodyValidate(userSchema), this.uc.createUser);
    this.router.post("/bulk-user", this.uc.updatebulkuser);
    this.router.get("/get-user", this.uc.getUsers);
    this.router.put("/update-user/:user_id", this.uc.updateUser);
  }
}
