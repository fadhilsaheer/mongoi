

const coreDatabase = require('./core/core-db'); // contains database core
const crudDatabase = require('./core/crud-db'); // contains crud operations

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

function crud(option, data){
    return new Promise((resolve, reject)=>{

        // save database 

        if(option == "s"){
            crudDatabase.saveData(databaseModel, data).then(()=>{
                resolve()
            })
        }

        // read data

        if(option == "r"){
            crudDatabase.readAllData(databaseModel).then((data)=>{
                resolve(data);
            })
        }

        if(option == "ro"){
            crudDatabase.readOne(databaseModel, data).then((data)=>{
                resolve(data);
            })
        }

        // delete

        if(option == "d"){
            crudDatabase.readAllData(databaseModel).then((data)=>{
                data.forEach(item => {
                    let deleteObject = {_id:item._id}
                    crudDatabase.deleteOne(databaseModel   ,deleteObject)
                });
                resolve()
            })
        }

    })
}

module.exports = {
    init,
    // saveData:(data)=>{
    //     return new Promise((resolve, reject)=>{
    //         crudDatabase.saveData(databaseModel, data).then(()=>{
    //             resolve();
    //         })
    //     })
    // }
    crud
}
