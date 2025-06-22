const mongoose = require('mongoose')

const saylaniForm = mongoose.Schema({
    country :{
        type:String,
        required:[true, 'Please select your country']
    },
    city :{
        type:String,
        required: [true, 'Please select your city']
    },
    course:{
        type:String,
        required:[true, 'Please select a course']
    },
    proficiency:{
        type:String,
        required:[true, 'Please select a proficiency']
    },
    name:{
        type:String,
        required:[true, 'Please fill  your name']
    },
    fname:{
        type:String,
        required:[true, 'Please fill  your father name']
    },
    email:{
        type:String,
        required:[true, 'Please fill  your email address'],
        unique :true,
         match: [/.+\@.+\..+/, 'Please enter a valid email address']

    },
    phone:{
        type:String,
         required: [true, 'Phone number is required'],
        
    },
    cnic:{
        type:String,
        required: [true, 'CNIC is required'],
        unique:true,
        match: [/^[0-9]{13}$/," It is not a valid CNIC! Must be 13 digits."]

    },
    fcnic:{
        type:String,
        required:true,
         match: [/^[0-9]{13}$/," It is not a valid CNIC! Must be 13 digits."],
        unique:true
    },
    DOB:{
        type:Date,
        required: [true, 'DOB is required'],
     
    },
    gender:{
        type:String,
         required: [true, 'Select your gender'],
    },
    address:{
        type:String,
         required: [true, 'address is required'],
    },
    qaulification:{
        type:String,
        required: [true, 'qaulification is required'],
    },
    laptop:{
        type:String,
       required: [true, 'laptop is required'],
    },
    file:{
        type:String,
         required: [true, 'file is required'],
    }
} ,{ timestamps : true})


const form = mongoose.model("SaylanForm",saylaniForm)

module.exports = form