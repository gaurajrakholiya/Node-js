import { DataTypes } from "sequelize";
import db from "../models/index";


export const Profiles = db.sequelize.define({
    profile_id : {
        type : DataTypes.INTEGER,
        allowNull : false
    },
    bio : {
        type: DataTypes.STRING,
        allowNull:false
    },
    user_id:{
        type:DataTypes.INTEGER,
        references : {
            model:"Users",
            key:"user_id"
        }
    },

}) 

