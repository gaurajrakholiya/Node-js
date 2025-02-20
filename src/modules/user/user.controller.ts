import { Request, Response } from "express";
import Users from "../../models/users";
import db from "../../models/index";
import { Sequelize, Op } from "sequelize";
import Profiles from "../../models/profile";

export class userController {
  createUser = async (req: Request, res: Response) => {
    try {
      const { firstname, email, birthdate, status } = req.body;

      const user = await db.Users.create({
        firstname,
        email,
        birthdate,
        status,
      });
      const profile = await db.Profiles.create({
        bio: "in a world full of colors",
        user_id: user.user_id,
      });

      res.json({
        status: 200,
        data: { user, profile },
        message: "user created successfully",
      });
    } catch (error) {
      res.json({
        status: 400,
        message: error.message,
      });
    }
  };

  getUsers = async (req: Request, res: Response) => {
    try {
      // const users = await Users.findAll();

      // const users = await db.Users.findAll({
      //   raw: true,
      //   nest: false, 
      //   attributes: ["email", "firstname", [Sequelize.col("profile.bio"), "bio"]],
      //   include: [
      //     {
      //       as: "profile",
      //       model: db.Profiles,
      //       attributes: [],
      //     },
      //   ],
      //   where: {
      //     user_id: "5",
      //   },
      // });

      // const users = await Users.findAll({
      //     attributes: ['firstname' ,
      //     [ Sequelize.fn('COUNT' , Sequelize.col('birthdate')) , 'noofuser']],
      //     group: ['firstname']
      // })

      // const users = await Users.findAll({
      //     where:{
      //         status:{
      //             [Op.eq]:'active'
      //         }
      //     }
      // })

      // const users = await Users.findAll({
      //     where:{
      //         [Op.and]:[{user_id:2 } , {status:'active'}]
      //     }
      // })

      // const users = await Users.findAll({
      //     where:{
      //         [Op.or]:[{user_id:2 } ,{user_id:1 }]
      //     }
      // })

        const users = await db.Users.findOne({
          raw:true,
          where: {
            user_id:4
          },
        });
        users.update({
          firstname:"qywsf"
        })

        console.log(users)

      res.json({
        status: 200,
        users,
        message: "get all users",
      });
    } catch (error) {
      res.json({
        status: 404,
        message: console.error(error),
      });
    }
  };

  updateUser = async (req: Request, res: Response) => {
    try {
      const { user_id } = req.params;
      const { firstname, status } = req.body;

      const existinguser = await db.Users.findOne({ where: { user_id } });
      if (existinguser) {
        const newUser = await db.Users.update(
          {
            firstname,
            status,
          },
          {
            where: {
              user_id,
            },
          }
        );

        res.json({
          status: 200,
          data: newUser,
          message: "updated user",
        });
      }
    } catch (error) {
      res.json({
        status: 404,
        message: console.error(error.message),
      });
    }
  };


  updatebulkuser = async (req:Request , res:Response) => {
    try {
      const { body } = req
      console.log(body )
      const updateUser = await db.Users.bulkCreate(body,{
        updateOnDuplicate: ["firstname", "email", "birthdate", "status"],
      })
    res.status(200).json({ message: "Users updated successfully", data: updateUser });
    } catch (error) {
      console.log(error )
    }
  }
}
