import { Router } from "express";
import { profileController } from "./profile.controller";

export class profileRoutes {
  router = Router();
  protected pc: profileController = new profileController();

  constructor() {
    this.router.post("/create-profile", this.pc.createProfile);
    this.router.get("/get-profiles", this.pc.getProfiles);
    this.router.put("/update-profile/:profile_id", this.pc.updateProfile);
    this.router.delete("/delete-profile/:profile_id", this.pc.deleteProfile);
  }
}
