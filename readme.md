# MONGOI😇

MONGOI is a npm package made by <a href="https://fadhilsaheer.github.io">Fadhil</a>

easy tool to manage and do CRUD operation with mongo database



### Setup

<p>
    Requirements
</p>

<ul>
    <li>Node Js</li>
    <li>Npm</li>
    <li>Mongo Db</li>
    <li>Internet [to download] 😅</li>
</ul>

```
npm i mongoi
```

<p>
    This will install mongoi for you 😎
</p>



### How To Use

Mongoi will help you to do crud operation 😱

to have more features don't forget to contribute 😁 



After installing require it

```javascript
const mongoi = require('mongoi')
```

you have initialize it first

```javascript
let yourDatabaseConnectionUrl = "mongdb:localhost:27017"

// create database schema as you do for mongoose
let databaseSchema = {
    name: String,
}

let collectionName = "your-collection-name"

mongoi.init(yourDatabaseConnectionUrl, databaseSchema, collectionName).then(()=>{
    // you can write anything here except bug 😊
})
```

now you initialized mongoi successfully 😎

so lets start doing crud 😜



CRUD = CREATE - READ - UPDATE - DELETE

```javascript
// This is the model of crud 😪

mongoi.crud([option], data).then(()=>{
    // use it 😋
})

// options
// [you have to write it in string eg : "r"]
//
// s - "save"
// r = "read"
// ro = "read one"
// u = "update many"
// uo = "update one"
// d = "delete all"
// do = "delete one"
// dm = "delete many"
// 
// Enjoy 🤗
//
```



#### Create

lets create 👻

```javascript

// create this according to you schema
const data_to_save = {
    name: "apple",
    color: "red"
}

mongoi.crud("s". data_to_save) // you can call .then after this 🥱
```

#### Read

lets read 😏

```javascript
// read all

mongoi.crud("r").then((data_you_get_from_database)=>{
    // do with this data 🐼
})
```

```javascript
// read one

let condition = {name: "panda"} // this is the condition of what are you looking for

mongoi.crud("ro", condition).then((data_you_get_from_database)=>{
    // do with this data 🐧
})

```

#### Update

let update 🖊

```javascript
// update many or update all

let condition_and_data = [
    {cute_message: "you are ugly 🤮"},//this should be condition
    {cute_message: "you are cute 😘"}//thing you wan't to change
]

mongoi.crud("u", condition_and_data)// you can call .then after this 🥱 i don't care 😏


// 😁

/*

let condition_and_data = [
    {cute_message: "you are cute 😘"},//you are not cute 😅
    {cute_message: "you are ugly 🤮"}//you are ugly 😁
]

mongoi.crud("u", condition_and_data)// just kidding 😅

*/
```

```javascript
// update one

let condition_and_data = [
    {cute_message: "you are ugly 🤮"},//this should be condition
    {cute_message: "you are cute 😘"}//thing you wan't to change
]

mongoi.crud("uo", condition_and_data)// you can call .then after this 🥱 i don't care 😏


// 😁

/*

let condition_and_data = [
    {cute_message: "you are cute 😘"},//you are not cute 😅
    {cute_message: "you are ugly 🤮"}//you are ugly 😁
]

mongoi.crud("u", condition_and_data)// just kidding 😅
```

#### Delete

lets delete this 🧺

```javascript
// delete all

mongoi.crud("d") // .then is supported 😇
```

```javascript
// delete many

let condition = {cute_message: "you are cute"}

mongoi.crud("dm", condition)// use .then if you want
```

```javascript
// delete one

let condition = {cute_message: "you are cute"}

mongoi.crud("do", condition)// use .then if you want no one cares 😁
```



## Conclusion

Hopefully I assume that you love 💗 this

contribute for updating this garbage 😁 



<center>
    <p>
        Made With 💗 <a href="https://fadhilsaheer.github.io/">Fadhil</a>
    </p>
</center>