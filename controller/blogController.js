const blog=require('../model/blogModel');
exports.postBlog=(req,res)=>{
    const {content,thumbImage,heading}=req.body
    
let blogId=heading.replace(/\s/g,"-")
   let newBog=new blog({
       heading:heading,content:content,thumbImage:thumbImage, blogId: blogId
   })
   newBog.save().then(saved=>{
       res.json('success')
   }).catch(err=>{
       res.status(503).json(err)
   })
}
exports.editBlog=(req,res)=>{
    const {content,thumbImage,heading}=req.body
    let blogId=heading.replace(/\s/g,"-")
   blog.findByIdAndUpdate(req.params.id,{ heading:heading,content:content,thumbImage:thumbImage
    , blogId: blogId}).then(saved=>{
        res.json('Updated')
    }).catch(err=>{
        res.status(503).json(err)
    })
}
exports.deleteBlog=(req,res)=>{
  
   blog.findByIdAndDelete(req.params.id).then(success=>{
        res.json('Deleetd')
    }).catch(err=>{
        res.status(503).json(err)
    })
}
exports.getAllBlog=(req,res)=>{
    blog.find({}).then(blogs=>{
        res.json(blogs)
    }).catch(err=>{
        res.status(503).then('Something went Wrong')
    })
}
exports.getBlogById=(req,res)=>{
    blog.findById(req.params.id).then(blogs=>{
        res.json(blogs)
    }).catch(err=>{
        res.status(503).then('Something went Wrong')
    })
}