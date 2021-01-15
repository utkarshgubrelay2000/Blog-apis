const jwt = require("jsonwebtoken");
const userModel = require("../model/adminModel");
const md5 = require("md5")
module.exports=(req,res,next)=>{
  //  console.log(req.headers)
if(req.headers.authorization){
let authorization=req.headers.authorization
jwt.verify(authorization, process.env.JWT_SECRET, (err, payload) => {
    if (err || payload === undefined) {
      console.log(`some error in verifying jwt secret${err}`);
      res.json({ error: `some error in verifying jwt secret${err}` });
    }
else{
  let  md5UserId=payload.secretId
  userModel.find({}).then((users) => {
      users.map((user) => {
           // console.log(md5UserId,md5(user._id))
          if (md5(user._id) === md5UserId) {
            req.body.userId = user._id;
              next()
          }
        });
      });
}
})

}
else{
    res.status(404).json('Not Authorzied')
}
}