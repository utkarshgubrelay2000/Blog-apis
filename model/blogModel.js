var mongoose=require('mongoose')
var Schema=new mongoose.Schema({
    heading:{
        type:String,
        required:true
    },
    thumbImage:{
        type:String
    },
    content:{
        type:String,
        required:true
    },blogId:{
        type:String
    },date:{
        type:String
    },time:{type:String}
    ,shortContent:{
        type:String
    },userId:{
        type:String
    }
})
const Post= mongoose.model("blogs", Schema);
module.exports =Post;