const db=require('./dbs');
//let currentid;
let accountdetails={
    1000:{userid:1000,username:"userone",password:"userone",eventdetails:[]},
    1001:{userid:1001,username:"usertwo",password:"usertwo",eventdetails:[]},
    1002:{userid:1002,username:"userthree",password:"userthree",eventdetails:[]},
    1003:{userid:1003,username:"userfour",password:"userfour",eventdetails:[]}
  }
  const register=(uname,id,pswd)=>{
    console.log(id);
return db.User.findOne({id})
.then(user=>{
  console.log(user);
  if(user){
    return{
      statuscode:422,
      status:false,
      message:"user exist ..please login"
    }
  }
  else{
    const newUser=new db.User({
        userid:id,
        username:uname,
        password:pswd
      })
    //  this.savedetails()
    newUser.save();
      return{
        statuscode:200,
        status:true,
        message:"successfully registered"
      }
    }
  })
}
  const login=(req,userid,password)=>{
    var id=parseInt(id);
    return db.User.findOne({userid,password})
.then(user=>{

  if(user){
    req.session.currentid=user;
    return{
      statuscode:200,
      status:true,
      message:"login success"
     }
    }
    else{
      return{
        statuscode:422,
        status:false,
        message:"invalid account"
       }
    }
  })
  }
 const save=(req,userid,edate,edetails)=>{
  return db.User.findOne({userid})
  .then(user=>{
    if(!user){
      return{
        statuscode:422,
        status:false,
        message:"Failed to save"
       }
      }
      else{
        user.eventdetails.push({edate:edate,edetails:edetails})
        user.save();
        return{
          statuscode:200,
          status:true,
          message:"Event saved successfully"
         }

      }
    })
  }
  //let uid=req.session.currentid;
  //  if(uid){
  //    uid["eventdetails"].push({edate:edate,edetails:edetails})
  //    console.log(uid["eventdetails"]);
     // this.savedetails();
      
  //   return{
  //    statuscode:200,
  //    status:true,
  //    message:"Event saved successfully"
  //   }
  //  }
  //}
  const view=(req,userid)=>{
    return db.User.findOne({userid})
    .then(user=>{
      if(!user){
        return{
          statuscode:422,
          status:false,
          message:"error...."
         }
        }
        else{
          console.log(user["eventdetails"]);
      return{
        statuscode:200,
        status:true,
        message:(user["eventdetails"]) 
       }   
        }
  
  })
}



  module.exports={
      register,
      login,
      save,
      view
  }