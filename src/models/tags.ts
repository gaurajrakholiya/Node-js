import { DataTypes } from "sequelize";
import db from "../models/index";

export const Tags = db.sequelize.define({
    tags_id:{
        type: DataTypes.STRING,
        primaryKey:true,
        unique:true,
        autoIncrement : true,
    },
    name:{
        type: DataTypes.STRING,
        allowNull:true
    },
    
  
},
{
    tableName: "Tags",
    timestamps: false,
    indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [{ name: "tags_id" }],
        },
      ],
  })