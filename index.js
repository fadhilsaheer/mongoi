

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

        if(option == "s"){ // save data
            crudDatabase.saveData(databaseModel, data).then(()=>{
                resolve()
            })
        }

        // read data

        if(option == "r"){ // read all data
            crudDatabase.readAllData(databaseModel).then((data)=>{
                resolve(data);
            })
        }

        if(option == "ro"){ // read one data
            crudDatabase.readOne(databaseModel, data).then((data)=>{
                resolve(data);
            })
        }

        // delete

        if(option == "d"){ // delete all data
            crudDatabase.readAllData(databaseModel).then((data)=>{
                data.forEach(item => {
                    let deleteObject = {_id:item._id}
                    crudDatabase.deleteOne(databaseModel   ,deleteObject)
                });
                resolve();
            })
        }

        if(option == "do"){ // delete one data
            crudDatabase.deleteOne(databaseModel, data).then(()=>{
                resolve();
            })
        }

        if(option == "dm"){ // delete many data
            crudDatabase.deleteMany(databaseModel, data).then(()=>{
                resolve();
            })
        }

        // update

        if(option == "u"){ // update many
            crudDatabase.updateMany(databaseModel ,data[0], data[1]).then(()=>{
                resolve()
            })
        }

        if(option == "uo"){ // update one
            crudDatabase.updateOne(databaseModel ,data[0], data[1]).then(()=>{
                resolve()
            })
        }

        // else

        else{
            console.log(`[ERROR] ${option} No Such Option`)
            console.log(`get the documentation https://github.com/fadhilsaheer/mongoi/#readme`)
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
