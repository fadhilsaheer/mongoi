const mongoi = require('./index');


let schema = {
    name: String,
    abcd: String
}

let data = {
    name: "john",
    abcd: "abcdefg"
}

mongoi.init("mongodb://localhost:27017/new", schema, "helos").then(()=>{
    // mongoi.crud("s", data).then(()=>{
    //     console.log("saved")
    // })

    // mongoi.crud("ro", {name:"john"}).then((data)=>{
    //     console.log(data)
    // })
    mongoi.crud("d").then(()=>{
        console.log("hello")
    })

})