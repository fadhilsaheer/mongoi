

const coreDatabase = require('./core/core-db');

// This function will connect to database and create a db schema

let databaseModel;

function init(connectionUrl, databaseSchema, collectionName){
    return new Promise((resolve, reject)=>{
        coreDatabase.connectDatabase(connectionUrl).then(()=>{
            coreDatabase.getDatabaseSchema(databaseSchema).then((schema)=>{
                coreDatabase.createDatabaseModel(schema, collectionName).then((model)=>{
                    databaseModel = model;
                    resolve()
                })
            })
        })
    })
}




function saveData(data){
    return new Promise((resolve, reject)=>{
        coreDatabase.savData(databaseModel, data)
        resolve()
    })
}


module.exports = {
    init, 
    saveData
}