const {nanoid}=require('nanoid');
const URL=require('../models/url');
async function handleGenerateNewShortUrl(req,res){
    const body=req.body;
    if(!body.url) return res.status(400).json({error:`URL is required`});

    const shortId=nanoid(8);
    await URL.create({
        shortId:shortId,
        redirectURL:bosy.url,
        visitHistory:[],
    });
    return res.json({id:shortId});
}
module.exports={handleGenerateNewShortUrl}; 