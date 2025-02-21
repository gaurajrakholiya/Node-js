import { NextFunction, Request, Response } from "express";
import Joi from "joi";


export const bodyValidate = (schema :any) => {
    return (req : Request,res:Response,next:NextFunction)=>{
        const result = schema.validate(req.body)
        if (result.error) {
            res.json({
                success: false,
                message: result.error.details[0].message,
                result: result
            })
        } else {
            next();
        }
    }
}