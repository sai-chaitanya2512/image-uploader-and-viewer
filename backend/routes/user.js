const express = require('express')

const router = express.Router()

const {user} = require('../mongodb')

router.post("/addUser",async(req,res)=>{
    try {

        const data = await user.insertOne({...req.body})

      res.send(data)
 
    } catch (error) {
        console.log(error);
    }
})


router.post("/login",async(req,res)=>{
    try {
        const {email} = req.body

        const data = await user.findOne({email:email})

        if(data){
            const password = data.password

            if(password == req.body.password){

                res.send(data)
            }
            else{
                res.send("wrong password")
            }
        }
        else{
            res.send("user not registered")
        }
    } catch (error) {
        console.log(error);
    }
})

module.exports = router