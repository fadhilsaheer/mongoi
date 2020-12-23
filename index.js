

const coreDatabase = require('./core/core-db');

// This function will connect to database and create a db schema

function init(connectionUrl, databaseSchema, collectionName){
    coreDatabase.connectDatabase(connectionUrl);
    coreDatabase.getDatabaseSchema(databaseSchema).then((schema)=>{
        console.log("hello world")
        coreDatabase.createDatabaseModel(schema, collectionName).then((model)=>{
            console.log(model)
        })
    })
}

let schem = {
    first_name: String,
    last_name: String
}
init("mongodb://localhost:27017/mongoi", schem, "users")