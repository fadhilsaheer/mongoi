
// This file will handle all basic crud operation in 
// mongo fb 

const mongoose = require('mongoose');

module.exports = {

    // save

    saveData:(databaseModel, dataToStore)=>{
        return new Promise((resolve, reject)=>{
            let toStoreData = new databaseModel(dataToStore); // addin data to model
            toStoreData.save(); // saving data in db
            resolve();
        })
    },

    // read 

    readAllData:(databaseModel)=>{
        return new Promise((resolve, reject)=>{
            databaseModel.find((err, data)=>{
                if(err){
                    console.log(`[ERROR] ${err}`);
                }
                else{
                    resolve(data); // giving return data
                }
            })
        })
    },

    readOne:(databaseModel, whatToRead)=>{
        return new Promise((resolve, reject)=>{
            databaseModel.find(whatToRead, (err, data)=>{
                if(err){
                    console.log(`[ERROR] ${err}`);
                }else{
                    resolve(data); //giveing data return
                }
            })
        })
    },

    // delete

    deleteOne:(databaseModel, object)=>{
        return new Promise((resolve, reject)=>{
            databaseModel.deleteOne(object, (err)=>{
                if(err){
                    console.log(`[ERROR] ${err}`);
                }else{
                    resolve();
                }
            })
        })
    },

    deleteMany:(databaseModel, object)=>{
        return new Promise((resolve, reject)=>{
            databaseModel.deleteMany(object, (err)=>{
                if(err){
                    console.log(`[ERROR] ${err}`);
                }else{
                    resolve();
                }
            })
        })
    },

    // update

    updateMany:(databaseModel, findObject, updateObject)=>{
        return new Promise((resolve, reject)=>{
            databaseModel.updateMany(findObject, updateObject, (err, data)=>{
                if(err){
                    console.log(`[ERROR] ${err}`);
                }else{
                    resolve();
                }
            })
        })
    },

    updateOne:(databaseModel, findObject, updateObject)=>{
        return new Promise((resolve, reject)=>{
            databaseModel.updateOne(findObject, updateObject, (err, data)=>{
                if(err){
                    console.log(`[ERROR] ${err}`);
                }else{
                    resolve();
                }
            })
        })
    }

}