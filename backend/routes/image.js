const express = require('express')

const router = express.Router()

const {picture} = require('../mongodb')

router.post("/addImage",async(req,res)=>{
    try {
        const data = await picture.insertOne({...req.body})

      res.send(data)
 
    } catch (error) {
        console.log(error);
    }
})


router.post("/getPictures",async(req,res)=>{
    try {


        const data = await picture.find({}).toArray()

            res.send(data)
      
    } catch (error) {
        console.log(error);
    }
})

module.exports = router