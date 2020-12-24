const mongoi = require('./index');


let schema = {
    name: String,
    abcd: String
}

let data = {
    name: "fadhil",
    abcd: "abcde"
}

mongoi.init("mongodb://localhost:27017/new", schema, "hey").then(()=>{
    mongoi.saveData(data).then(()=>{
        console.log("created !!")
    })
})