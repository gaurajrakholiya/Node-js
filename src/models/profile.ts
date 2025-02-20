import { DataTypes, Sequelize } from "sequelize";

export default (sequelize: Sequelize) => {
  return sequelize.define(
    "Profiles",
    {
      profile_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      bio: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Users",
          key: "user_id", // Ensure this matches the actual primary key column in Users
        },
      },
    },
    {
      tableName: "Profiles", // Fixed typo (was `tablename`)
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: ["profile_id"],
        },
        {
          name: "INDEX",
          unique: false, // Usually, foreign keys are not unique
          using: "BTREE",
          fields: ["user_id"], // Fixed incorrect reference (was `fk_user_id`)
        },
      ],
    }
  );
};
