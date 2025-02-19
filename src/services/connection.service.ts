import  db  from "../models/index"

export const connectionDb = async () =>{
    try {
        
        await db.sequelize.authenticate()
        console.log("Connection has been established successfully.");
    } catch (error) {
        console.log(error)
    }
}
