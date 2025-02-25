import { Request, Response } from "express";
import db from "../../models/index";

export class profileController {
  createProfile = async (req: Request, res: Response) => {
    try {
      const { user_id, bio } = req.body;

      const profile = await db.Profiles.create({
        user_id,
        bio,
      });

      res.json({
        status: 200,
        data: profile,
        message: "Profile created successfully",
      });
    } catch (error) {
      res.status(400).json({
        status: 400,
        message: error.message,
      });
    }
  };

  getProfiles = async (req: Request, res: Response) => {
    try {
      const profiles = await db.Profiles.findAll({
        attributes: ["bio", "user_id"],
        include: [
          {
            model: db.Users,
            as: "userInfo",
            attributes: ["firstname", "email"],
          },
        ],
      });

      res.json({
        status: 200,
        data: profiles,
        message: "Fetched all profiles",
      });
    } catch (error) {
      res.status(404).json({
        status: 404,
        message: error.message,
      });
    }
  };

  updateProfile = async (req: Request, res: Response) => {
    try {
      const { profile_id } = req.params;
      const { bio } = req.body;

      const updatedProfile = await db.Profiles.update(
        { bio },
        { where: { profile_id } }
      );

      res.json({
        status: 200,
        data: updatedProfile,
        message: "Profile updated successfully",
      });
    } catch (error) {
      res.status(404).json({
        status: 404,
        message: error.message,
      });
    }
  };

  deleteProfile = async (req: Request, res: Response) => {
    try {
      const { profile_id } = req.params;
      await db.Profiles.destroy({ where: { profile_id } });

      res.json({
        status: 200,
        message: "Profile deleted successfully",
      });
    } catch (error) {
      res.status(400).json({
        status: 400,
        message: error.message,
      });
    }
  };
}
