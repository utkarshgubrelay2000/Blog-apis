var express = require('express');
var router = express.Router();
var blogController=require('../controller/blogController');
const verifyAdmin = require('../middleware/verifyAdmin');
/* GET home page. */
router.get('/postBlog',(req,res)=>{
  res.render('author')
})
router.get('/api/admin/secret',verifyAdmin,blogController.adminpanel)
router.post('/postBlog',verifyAdmin,blogController.postBlog,err=>{
  console.log('error while signup user')
})
router.put('/editBlog/:id',verifyAdmin,blogController.editBlog,err=>{
  console.log('error while signup user')
})

router.delete('/deleteBlog/:id',verifyAdmin,blogController.deleteBlog,err=>{
    console.log('error while signup user')
  })
  router.get('/',blogController.getAllBlog)
  router.get('/:id',blogController.getBlogById)
module.exports=router