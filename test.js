const mongoi = require('./index');


let schema = {
    name: String,
    abcd: String
}

let data = {
    name: "fadhil",
    abcd: "abcdefg"
}
let data_2 = {
    name: "john",
    abcd: "abcdefg"
}

mongoi.init("mongodb://localhost:27017/new", schema, "helos").then(()=>{
    mongoi.crud("abcd")
})