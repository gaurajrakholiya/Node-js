import { Sequelize, DataTypes } from "sequelize";
import db from "../models/index";
import { defaultValueSchemable } from "sequelize/types/utils";

export const Users = db.sequelize.define('users',
    {
        user_id:{
            type: DataTypes.INTEGER,
            primaryKey : true,
            autoIncrement:true,
        },
        name:{
            type : DataTypes.STRING,
            require:true
        },
        birthday:{
            type:DataTypes.DATE,
            defaultValue: new Date()
        },
        status:{
            type: DataTypes.ENUM,
            values : ['active' , 'do not disturb']
        }
    },
    {
        tablename: 'users',
        timestamp: false,
        indexes: [
            {
                name: "PRIMARY",
                unique: true,
                using: "BTREE",
                fields: [
                    { name: 'user_id' }
                ]
            }
        ]
    }
)

