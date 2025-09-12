const express=require('express');
const {handleGenerateNewShortUrl}=require('../controllers/url.js')
const router=express.Router();
router.post('/',handleGenerateNewShortUrl);
router.get('/analytics',)
module.exports=router;