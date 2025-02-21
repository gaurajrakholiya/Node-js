import { DataTypes, Sequelize } from "sequelize";
import db from "./index";

export default (sequelize: Sequelize) => {
  return sequelize.define("Posts",
    {
      post_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      content: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      user_id: {
        type: DataTypes.STRING,
        references: {
          model: "Users",
          key: "user_id",
        },
      },
    },
    {
      tableName: "posts",
      timestamps: false,
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [{ name: "post_id" }],
        },
      ],
    }
  );
};
