import { Request, Response } from "express";
import { Users } from "../../models/user";




export class userController{
    createUser = async (req:Request , res:Response) => {
        try {
            const { name , birthday , status}  = req.body;

            const user = await Users.create({
                name:'gauraj',
                birthday:'2003-12-01',
                status:'active'
            })

            res.json({
                message:'user created successfully'
            })
        } catch (error) {
            res.json({
                status:400,
                message:'error in creating user'
            })
        }
    }
}