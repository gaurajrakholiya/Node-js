import { Sequelize } from "sequelize";
import * as dotenv from "dotenv";
dotenv.config();

const DATABASE : any = process.env.DATABASE 
const PASSWORD : any = process.env.PASSWORD 
const USERNAME : any = process.env.USERNAME 
const HOST : any = process.env.HOST 
const DB_PORT : any = process.env.DB_PORT

console.log("database is - ", DATABASE);

const sequelize = new Sequelize( DATABASE,USERNAME, PASSWORD, {
    dialect: "mysql",
    host: HOST,
    logging: false,
    port: DB_PORT,
    pool: {
        max: 25,
        min: 0,
        idle: 1000
    },
    define: {
        timestamps: false, // Enable timestamps for createdAt and updatedAt
        underscored: false, // Use snake_case for column names
    }
});

var db: any = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;

export { db as default };

  
