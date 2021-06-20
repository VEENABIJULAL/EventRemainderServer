const express=require('express');
const dataservice=require('./services/data.service');
const session=require('express-session');
const app=express();

app.use(session({
    secret:'randomsecurestrig',
    resave:false,
    saveUninitialized:false
}))
app.use(express.json());


app.get('/',(req,res)=>{
    res.send("THIS IS A GET METHOD");
})
app.post('/register',(req,res)=>{
    const result=dataservice.register(req.body.uname,req.body.id,req.body.pswd)
    console.log(res.status(result.statuscode).json(result));
})


app.post('/login',(req,res)=>{
    const result=dataservice.login(req,req.body.id,req.body.pswd)
    console.log(res.status(result.statuscode).json(result));
})

app.post('/save',(req,res)=>{
    const result=dataservice.save(req,req.body.edate,req.body.edetails)
    console.log(res.status(result.statuscode).json(result));
})
app.post('/view',(req,res)=>{
    const result=dataservice.view(req)
    console.log(res.status(result.statuscode).json(result));
})
app.listen(3000,()=>{
    console.log("server created at port 3000");
})
