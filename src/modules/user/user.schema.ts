
import joi from "joi";


export const userSchema = joi.object({
    firstname: joi.string().max(8).min(4).required(), 
    email: joi.string().email().required(),
    birthdate: joi.date().required() ,
    status: joi.valid('active', 'do not disturb')
})

