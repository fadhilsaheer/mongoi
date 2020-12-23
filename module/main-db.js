
// here database is attaining connection and also create a schema 
// for mongodb


const mongoose = require("mongoose");

module.exports = {

    // connect database using promise

    connectDatabase:(connectUrl)=>{
        return new Promise((resolve, reject)=>{
            mongoose.connect(connectUrl, {useNewUrlParser:true}, (err)=>{
                if(err){
                    console.log(err)
                    console.log("")
                    console.log("You Have A Error On Database Connection :(")
                    console.log("")
                }else{
                    resolve()
                }
            })
        })
    },

    // get all deatils about database schema

    getDatabaseSchema:(databaseItems)=>{
        return new Promise(async(resolve, reject)=>{
            const databaseSchema = await new mongoose.Schema(databaseItems)
            resolve(databaseSchema) // exporting database schema
        })
    }
}