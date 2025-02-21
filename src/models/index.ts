import { Sequelize } from "sequelize";
import * as dotenv from "dotenv";
import  Profiles  from "./profile";
import  Users  from "./users";
import Posts  from "./posts";
dotenv.config();

const DATABASE: any = process.env.DATABASE;
const PASSWORD: any = process.env.PASSWORD;
const USERNAME: any = process.env.USERNAME;
const HOST: any = process.env.HOST;
const DB_PORT: any = process.env.DB_PORT;

console.log("database is - ", DATABASE);

const sequelize = new Sequelize(DATABASE, USERNAME, PASSWORD, {
  dialect: "mysql",
  host: HOST,
  logging: false,
  port: DB_PORT,
  pool: {
    max: 25,
    min: 0,
    acquire: 30000,
    idle: 1000,
  },
  define: {
    timestamps: false, // Enable timestamps for createdAt and updatedAt
    underscored: false, // Use snake_case for column names
  },
});

const db: any = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.Users =  Users(sequelize),
db.Profiles = Profiles(sequelize),
db.Posts = Posts(sequelize)


db.Users.hasOne(db.Profiles, {
  foreignKey: "user_id",
  as: "profile",
});

db.Profiles.belongsTo(db.Users, {
  foreignKey: "user_id",
  as: "userInfo",
});

// one to many relationship
db.Users.hasMany(db.Posts, {
  foreignKey: "user_id",
  as: "posts",
});

db.Posts.belongsTo(db.Users, {
  foreignKey: "user_id",
  as: "userInfo",
});

export { db as default };
