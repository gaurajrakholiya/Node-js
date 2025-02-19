import { Request, Response } from "express";
import { Users } from "../../models/user";
import db from "../../models/index";
import { Sequelize, Op } from "sequelize";

export class userController {
  createUser = async (req: Request, res: Response) => {
    try {
      const { firstname, email, birthdate, status } = req.body;

      const user = await Users.create({
        firstname,
        email,
        birthdate,
        status,
      });

      res.json({
        status: 200,
        user,
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

      const users = await Users.findAll({
        attributes: ["email", "firstname"],
      });

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

      //   const users = await Users.findAll({
      //     where: {
      //       firstname: { [Op.like]: "%ura%" },
      //     },
      //   });

      res.json({
        status: 200,
        users,
        message: "get all users",
      });
    } catch (error) {
      res.json({
        status: 404,
        message: console.error(error.message),
      });
    }
  };

  updateUser = async (req: Request, res: Response) => {
    try {
      const { user_id } = req.params;
      const { firstname,  status } = req.body;

      const existinguser = await Users.findOne({where:{user_id }})
      if(existinguser){
        
        const newUser =  await Users.update(
          {
            firstname ,
            status
          },{
            where:{
              user_id,
              
            }
          }
        );
  
         res.json({
          status: 200,
          data : newUser,
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
}
