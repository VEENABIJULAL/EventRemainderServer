const mongoose=require("mongoose");

mongoose.connect('mongodb://localhost:27017/Reminderapp',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

const User=mongoose.model('User',{
    userid:Number,
    username:String,
    password:String,
    eventdetails:Array
})
module.exports={
    User
}