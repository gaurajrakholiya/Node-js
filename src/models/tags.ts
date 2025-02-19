import { DataTypes } from "sequelize";
import db from "../models/index";

export const Tags = db.sequelize.define({
    name:{
        type: DataTypes.STRING,
        allowNull:true
    },
    
  
},
{
    tablename: "Tags",
    timestamp: false,
  })