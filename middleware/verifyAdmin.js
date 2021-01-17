const jwt = require("jsonwebtoken");
const userModel = require("../model/adminModel");
const md5 = require("md5")

module.exports=(req,res,next)=>{
  let authorization=req.params.token
if(authorization){
jwt.verify(authorization, process.env.JWT_SECRET, (err, payload) => {
    if (err || payload === undefined) {
      console.log(`some error in verifying jwt secret${err}`);
      res.redirect('/')
    }
else{
  let  md5UserId=payload.secretId

  userModel.find({}).then((users) => {
      users.map((user) => {
           // console.log(md5UserId,md5(user._id))
          if (md5(user._id) === md5UserId) {
            req.body.userId = user._id;
           
              next();
          }
        });
      });
}
})

}
else{
    res.redirect('/')
}
}