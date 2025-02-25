import { QueryTypes } from "sequelize";
import db from "../../models";
import users from "models/users";
import { Request, Response } from "express";

export class rawqueries {
  getUserQuery = async (firstname, status ) => {
    // const { firstname  } = req.body

    const rawquery = `SELECT * FROM users where firstname = ? and status = ?`;

    const result = await db.sequelize.query(rawquery, {
      type: QueryTypes.SELECT,
      // A function (or false) for logging your queries
      // Will get called for every SQL query that gets sent
      // to the server.
      logging: console.log,

      // If plain is true, then sequelize will only return the first
      // record of the result set. In case of false it will return all records.
      //findOne
      plain: false,  

      raw:true, 
      replacements:[
        firstname,
        status
      ]
    });

    console.log(result )

    // in query function if we add types in options then it will print only one array
    // if we dont write type then it will provide two arrays [result , metadata]

    // console.log(result);
    // console.log({metadata})
    // console.log(data )
    // console.log(result)
    // console.log(metadata)

    return 
        result
  };

  insertQuery = () => {
    const rawquery = `INSERT INTO users ("firstname" ,"email","birthdate" , "status" ) VALUES (?,? ,?,?)`;
  };
}
