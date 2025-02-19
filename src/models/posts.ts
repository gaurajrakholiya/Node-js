import { DataTypes } from "sequelize";
import db from "./index";

export const Posts = db.sequelize.define({
    post_id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        unique:true,
        allowNull:false
    },
    title:{
        type:DataTypes.STRING,
        allowNull:false
    },
    content:{
        type:DataTypes.STRING,
        allowNull:false
    },
    user_id :{
        type:DataTypes.STRING,
        references:{
            model:"Users",
            keys:"user_id"
        }
    }
},
{
    tablename: "posts",
    timestamp: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [{ name: "post_id" }],
      },
    ],
  }
)