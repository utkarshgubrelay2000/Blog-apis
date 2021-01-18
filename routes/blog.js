var express = require('express');
var router = express.Router();
var blogController=require('../controller/blogController');
const verifyAdmin = require('../middleware/verifyAdmin');
var mutter=require('multer')
var path=require('path')
const fs = require('fs')
const { promisify } = require('util')
var cloudinary = require('cloudinary').v2;
const unlinkAsync = promisify(fs.unlink)

cloudinary.config({ 
  cloud_name: 'dvu7miswu', 
  api_key: '539199276215388', 
  api_secret: 'DprEYY0gs9Vg2G9osNPxYcLHAvA' 
});

var Storage = mutter.diskStorage({
  destination: "./Static",
  filename: (req, file, cb) => {
      cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname));
  }
})
var upload = mutter({
  storage: Storage
})

router.post('/uploadImage', async (req,res)=>{
console.log(req.body)
// await cloudinary.uploader.upload(req.fil, function(error, result) {console.log(result, error)});
//   await unlinkAsync(req.file.path)
  res.json('ok')
  })

/* GET home page. */
router.get('/postBlog',(req,res)=>{
  res.render('author')
})


router.get('/api/admin/secret',verifyAdmin,blogController.adminpanel)
router.post('/postBlog',blogController.postBlog,err=>{
  console.log('error while signup user')
})
router.put('/editBlog/:id',blogController.editBlog,err=>{
  console.log('error while signup user')
})
router.delete('/deleteBlog/:id',blogController.deleteBlog,err=>{
    console.log('error while signup user')
  })
  router.get('/',blogController.getAllBlog)
  router.get('/:id',blogController.getBlogById)
module.exports=router