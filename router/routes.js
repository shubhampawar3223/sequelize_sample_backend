const express = require('express');
const router = express();
const db = require('../models');

router.post('/newUser',async(req,res)=>{
    db.User.create({
        userName: req.body.userName,
        email: req.body.email,
        password: req.body.password,
    }).then(response=>res.status(200).send("User created successfully"))
})

router.get('/users',async(req,res)=>{
    db.User.findAll({
        include:[db.Post]
    }).then(response=>res.status(200).send(response))   
})

router.post('/createPost',async(req,res)=>{
    db.Post.create({
      UserId:req.body.userId,
      postId:req.body.postId,
      content:req.body.content                    
    }).then(result=>{
        res.status(200).send("post is created successfully.")
    })
})

router.get('/user/:id',async(req,res)=>{
    db.User.findOne({
      where:{
         id:req.params.id 
      },
      include:[db.Post]   
    }).then(result=>{
        res.status(200).send(result)
    }) 
})


module.exports = router;