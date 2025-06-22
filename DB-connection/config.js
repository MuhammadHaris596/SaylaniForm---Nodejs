const mongoose = require('mongoose')


const DB = ()=>{
     mongoose.connect('mongodb://127.0.0.1:27017/saylani-form')
    .then(()=> console.log('Database Connected..'))
}

module.exports = DB 