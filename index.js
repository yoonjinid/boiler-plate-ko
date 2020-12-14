const express=require('express')
const app=express()
const port= 3000

const mongoose=require('mongoose')
mongoose.connect('mongodb+srv://sossao:dbs12wls@boilerplate.zqjjp.mongodb.net/<dbname>?retryWrites=true&w=majority',{
    useNewUrlParser:true,useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(()=>console.log('MongoDB Connected...'))
.catch(err=>console.log(err))

app.get('/',(req,res)=>res.send('Hello world!~~안녕하세요오'))
app.listen(port,()=>console.log(`Example app litening on port${port}!`))