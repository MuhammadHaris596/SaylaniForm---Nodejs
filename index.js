const { error } = require('console')
const express = require('express')
const DB = require('./DB-connection/config')
const form = require('./model/collection')
const {storage} = require('./Cloudinary/cloudinary')
const multer = require('multer')
// const upload = multer({ storage })        


const app = express()


const path = require('path')

//Server Port
const Port = 3000

// Database Connection
DB()

//Body Parser
app.use(express.urlencoded({extended:false}))
app.use(express.json())


//EJS Engine
app.set('view engine','ejs')
app.use(express.static('public'))


//Main Logic

//File Upload Multer

// const storage = multer.diskStorage({
//     destination: (req,file,cb)=>{
//         cb(null,'./uploads')
//     },

//     filename : (req,file,cb)=>{
//         const newfileName = Date.now() + path.extname(file.originalname)
//         cb(null,newfileName)
//     }
// })


const fileFilter = (re,file,cb)=>{

    if(file.mimetype.startsWith('image/')){
        cb(null,true)
    }else{
        cb(new Error('only images are alllowed'),false)
    }
}

const uploads = multer({
    storage,
    limits :{
        fileSize : 1024 * 1024 *3
    },
    fileFilter
})


app.get('/',(req,res)=>{
   res.render(`form`)
})


app.post('/submitform',uploads.single('userfile'),async(req,res)=>{

    if(!req.file){
        return res.status(400).send(`No Files Uploaded`)
    }
     const data = {
        ...req.body,file:req.file.path
    }
    
     const cardData = await form.create(data)

    res.render('form')
})

app.post("/searchAdmitCard",async(req,res)=>{
    const {mycnic} = req.body
   const cardData =  await form.findOne({cnic:mycnic})

    res.render("downloadAdmitCard" ,{cardData})
})


app.use((error,req,res,next)=>{
    if(error instanceof multer.MulterError){
        return res.status(400).send(`Multer error : ${error.message}`)
    }else if (error){
        return res.status(500).send(`Something went wrong  : ${error.message}`)
    }

    next()
})

app.listen(Port,()=>{
    console.log(`Server started running on port ${Port}` )
})