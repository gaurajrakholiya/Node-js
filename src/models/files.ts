import { DataTypes, Sequelize } from "sequelize";
import db from "./index";

export default (sequelize: Sequelize) => {
  return sequelize.define("Posts",
    {
      file_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      file_path:{
        type: DataTypes.STRING,
        allowNull:false
      }
      
    },
    {
      tableName: "files",
      timestamps: false,
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [{ name: "file_id" }],
        },
      ],
    }
  );
};
