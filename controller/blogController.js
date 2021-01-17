const admin = require('../model/adminModel');
const blog=require('../model/blogModel');
const Axios = require("axios")
exports.postBlog= async (req,res)=>{
    const {content,thumbImage,heading,shortContent,userId}=req.body
    console.log(req.body.thumbImage)
   // res.render('author',{content:content})
   
    
  

    let newdate= new Date()
let blogId=heading.replace(/\s/g,"-")
// //console.log(newdate.toDateString())
   let newBog=new blog({
       heading:heading,content:content,thumbImage:"https://assets.ajio.com/medias/sys_master/root/20200924/9QSe/5f6b9823f997dd8c834bc866/john_players_navy_blue_checked_single-breasted_blazer_with_notched_lapel.jpg", blogId: blogId,
       date:newdate.toDateString(),time:newdate.toLocaleTimeString(),
       shortContent:shortContent,userId:userId
   })
   newBog.save().then(saved=>{
       console.log(shortContent)
      res.redirect('/api/admin/secret')
   }).catch(err=>{
      res.send('404 not found')
   })
}
exports.adminpanel=(req,res)=>{

    blog.find({}).then(blogs=>{
        admin.findOne({_id:blogs[0].userId}).then(userDetails=>{
           // console.log(userDetails)
            res.render('adminPanel',{blogs:blogs,userDetails:userDetails})

        })
    }).catch(err=>{
        res.send('4040 not found')
    })
}
exports.editBlog=(req,res)=>{
    const {content,thumbImage,heading}=req.body
    let blogId=heading.replace(/\s/g,"-")
   blog.findByIdAndUpdate(req.params.id,{ heading:heading,content:content,thumbImage:thumbImage
    , blogId: blogId}).then(saved=>{
        res.json('Updated')
    }).catch(err=>{
       res.send('4040 not found')
    })
}
exports.deleteBlog=(req,res)=>{
  
   blog.findByIdAndDelete(req.params.id).then(success=>{
        res.json('Deleetd')
    }).catch(err=>{
       res.send('4040 not found')
    })
}
exports.getAllBlog=(req,res)=>{
    blog.find({}).then(blogs=>{
        admin.findOne({_id:blogs[0].userId}).then(userDetails=>{
           // console.log(userDetails)
            res.render('index',{blogs:blogs,userDetails:userDetails})
        })
    }).catch(err=>{
        res.send('4040 not found')
    })
}
exports.getBlogById=(req,res)=>{
   
    blog.findOne({blogId:req.params.id}).sort({_id:-1}).then(blogs=>{
       // console.log(blogs.userId)
        admin.findOne({_id:blogs.userId}).then(userDetails=>{
          //  console.log(userDetails)
            blog.find({}).then(blogsRec=>{
                res.render('post',{blog:blogs,userDetails:userDetails,moreBlogs:blogsRec})
            })
        })
    }).catch(err=>{
        res.send('4040 not found')
    })
}