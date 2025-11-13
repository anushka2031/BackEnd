// Day: 41
// Date: 04/11/2025
// Day: Tuesday

// File System
// let fs = require('fs')
// fs.writeFileSync('index.txt', "Hello") // Write data in file if it exist or it create a new file and add data
// let data = fs.readFileSync('index.txt') // Read data of file
// console.log(data.toString());
// fs.appendFileSync('index.txt',"Hiii") // Append data in existing data
// fs.unlinkSync('index.txt') // Used to delete file

// Operating System
// let os = require('os')
// console.log(os.arch());
// console.log(os.freemem());
// console.log(os.homedir());
// console.log(os.type());
// console.log(os.hostname());
// console.log(os.cpus());
// console.log(os.platform());
// console.log(os.uptime());
// console.log(os.machine());
// console.log(os.networkInterfaces());
// console.log(os.totalmem());
// console.log(os.userInfo());
// console.log(os.version());
// console.log(os);

// let express = require('express')
// let app = express()

// // Middleware
// app.use('/',(req, res, next)=>{
//     // res.send("Mai nahi jane dunga")
//     // res.send("Chale jao")
//     next()
// })
// app.use('/',(req, res, next)=>{
//     res.send("Mai nahi jane dunga")
//     // next()
// })
// app.get('/',(req,res)=>{
//     res.send("Hello mai hu backend")
// })
// app.get('/home',(req,res)=>{
//     res.send("Hello mai hu backend")
// })
// app.listen(4000,()=>{
//     console.log("Server is running on port 4000");
// })

// Commands:
// npm init
// npm i -g nodemon
// npx nodemon start

// Day: 43
// Date: 07/11/2025
// Day: Friday

let express = require('express')
let mongoose = require('mongoose')



let User = require('./user')
let bcrypt = require('bcrypt')


// npm i mongoose
// npm i bcrypt

let app = express()
app.use(express.json())
mongoose.connect("mongodb://127.0.0.1:27017/5thSem").
   then(() => {
      console.log("db conneted...");
   })

app.get('/', (req, res) => {
   res.send("hiii")

})
app.post('/create', async (req, res) => {
   let { userName, email, passWord } = req.body
   console.log(userName, email, "heheh");

   let user = await User.findOne({ email })
   console.log(user, "hiiii");

   if (user) {
      res.send("user jinda haiii")
   }

   let updatedP = await bcrypt.hash(passWord, 10)
   console.log(updatedP, "HEH");

   let userData = new User({
      userName,
      email,
      passWord: updatedP
   })
   await userData.save()
   res.send("account ban gya hai....")
   //   console.log(userName,email, passWord);
})

app.listen(4000, () => {
   console.log("server running on port no 7000");

})

// use dbs


// Commands:
// npm init
// npm i express
// npm i -g nodemon
// npx nodemon start
// mongosh
// npm i mongoose

// 11 Nov

// let express = require('express')
// let mongoose = require('mongoose')
// let cors = require('cors')

// let User = require('./user')
// let bcrypt = require('bcrypt')


// // npm i mongoose
// // npm i bcrypt

// let app = express()
// app.use(cors())
// app.use(express.json())
// mongoose.connect("mongodb://127.0.0.1:27017/5thSem").
//    then(() => {
//       console.log("db conneted...");
//    })

// app.get('/', (req, res) => {
//    res.send("hiii")

// })
// app.post('/create', async (req, res) => {
//    let { userName, email, passWord } = req.body
//    console.log(userName, email, "heheh");

//    let user = await User.findOne({ email })
//    console.log(user, "hiiii");

//    if (user) {
//       res.send("user jinda haiii")
//    }
//    else{
//       let updatedP = await bcrypt.hash(passWord, 10)
//       console.log(updatedP, "HEH");
   
//       let userData = new User({
//          userName,
//          email,
//          passWord: updatedP
//       })
//       await userData.save()
//       res.send("account ban gya hai....")
//    }

//    //   console.log(userName,email, passWord);
// })

// app.listen(4000, () => {
//    console.log("server running on port no 4000");

// })

// app.post('/login',async (req, res)=>{
//    let {email, passWord} = req.body
//    let userInfo = await User.findOne({email})
//    if(!userInfo){
//       res.send("Account not found!");
//    }
//    else{
//       let validPass = await bcrypt.compare(passWord,userInfo.passWord);
//       if(validPass){
//          res.send("Login doneeeee.....");
//       }
//       else{
//          res.send("Password galat hai...");
//       }
//    }
   
// })