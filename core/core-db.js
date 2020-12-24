
// here database is attaining connection and also create a schema 
// for mongodb


const mongoose = require("mongoose");

module.exports = {

    // connect database 

    connectDatabase:(connectUrl)=>{
        return new Promise((resolve, reject)=>{
            mongoose.connect(connectUrl, { useNewUrlParser:true, useUnifiedTopology:true }, ()=>{
                console.log(`[INFO] Database connected to ${connectUrl}`)
                resolve()
            });
        })
    },

    // get all deatils about database schema

    getDatabaseSchema:(databaseItems)=>{
        return new Promise((resolve, reject)=>{
            const databaseSchema = new mongoose.Schema(databaseItems);
            resolve(databaseSchema) // exporting database schema
        });
    },

    // create database model

    createDatabaseModel:(databaseSchema, collectionName)=>{
        return new Promise(async(resolve, reject)=>{
            const databaseModel = await new mongoose.model(collectionName, databaseSchema);
            resolve(databaseModel);
        });
    },

    // For a bug test 

    // model is database-model and data is the data it should be an object
    savData:(model, data)=>{
        return new Promise((resolve, reject)=>{
            let newData = new model(data);
            newData.save();
            resolve();
        })
    }

}