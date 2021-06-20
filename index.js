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
    dataservice.register(req.body.uname,req.body.id,req.body.pswd)
    .then(result=>{
        res.status(result.statuscode).json(result)

    })
});


app.post('/login',(req,res)=>{
    console.log(req.body);
    dataservice.login(req,req.body.id,req.body.pswd)
    .then(result=>{
        res.status(result.statuscode).json(result)

    })
})

app.post('/save',(req,res)=>{
    dataservice.save(req,req.body.userid,req.body.edate,req.body.edetails)
    .then(result=>{
        res.status(result.statuscode).json(result)

    })
})
app.post('/view',(req,res)=>{
    dataservice.view(req,req.body.userid)
    .then(result=>{
        res.status(result.statuscode).json(result)

    })
})
app.listen(3000,()=>{
    console.log("server created at port 3000");
})
