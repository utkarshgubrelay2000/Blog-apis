const admin = require('../model/adminModel');
const blog=require('../model/blogModel');
exports.postBlog=(req,res)=>{
    const {content,thumbImage,heading,shortContent,userId}=req.body
    let newdate= new Date()
let blogId=heading.replace(/\s/g,"-")
//console.log(newdate.toDateString())
   let newBog=new blog({
       heading:heading,content:content,thumbImage:thumbImage, blogId: blogId,
       date:newdate.toDateString(),time:newdate.toLocaleTimeString(),
       shortContent:shortContent,userId:userId
   })
 //  console.log(shortContent)
   newBog.save().then(saved=>{
       res.json('success')
   }).catch(err=>{
      res.send(err)
   })
}
exports.editBlog=(req,res)=>{
    const {content,thumbImage,heading}=req.body
    let blogId=heading.replace(/\s/g,"-")
   blog.findByIdAndUpdate(req.params.id,{ heading:heading,content:content,thumbImage:thumbImage
    , blogId: blogId}).then(saved=>{
        res.json('Updated')
    }).catch(err=>{
       res.send(err)
    })
}
exports.deleteBlog=(req,res)=>{
  
   blog.findByIdAndDelete(req.params.id).then(success=>{
        res.json('Deleetd')
    }).catch(err=>{
       res.send(err)
    })
}
exports.getAllBlog=(req,res)=>{
    blog.find({}).then(blogs=>{
        admin.findOne({userId:blogs.userId}).then(userDetails=>{
            console.log(userDetails)
            res.render('index',{blogs:blogs,userDetails:userDetails})
        })
    }).catch(err=>{
        res.send(err)
    })
}
exports.getBlogById=(req,res)=>{
    blog.findOne({blogId:req.params.id}).sort({_id:-1}).then(blogs=>{
        admin.findOne({userId:blogs.userId}).then(userDetails=>{
            res.render('post',{blog:blogs,userDetails:userDetails})
        })
    }).catch(err=>{
        res.send(err)
    })
}