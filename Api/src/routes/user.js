const express = require("express");
const { json } = require("express/lib/response");

const router = express.Router();
const userSchema = require("../models/user");
const giftSchema = require("../models/gifts");

//create user 
router.post('/users',(req,res) =>{
    const user = userSchema(req.body);
    
    user.save()
    .then((data)=>{
        giftSchema.findById(req.body.idGift)
        .then((data)=>{
            giftSchema.updateOne({_id:req.body.idGift},
                { $set:{counter:data.counter + 1}})
                .then((data)=>{
                    console.log('update contador')
                })
                .catch((error)=>res.json({message :error}));

            giftSchema.findById(req.body.idGift)
                .then((data)=>{
                    res.json(data)
                }).catch((error)=>res.json({message :error}));
        })
        .catch((error)=>res.json({message :error}));
        
    })
    .catch((error)=>{
        console.log(error)
        res.json({message :error})});
    // res.send("create user")
})

//get all users
router.get('/users',(req,res) =>{

    userSchema
    .find()
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message :error}));
    // res.send("create user")
})

//get id user 
router.get('/users/:id',(req,res) =>{
    const {id} =  req.params;

    userSchema
    .findById(id)
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message :error}));
    // res.send("create user")
})

router.put('/users/:id',(req,res) =>{
    const {id} =  req.params;
    const {name,age,email} =  req.body;

    userSchema
    .updateOne({_id:id},{ $set:{name,age,email}})
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message :error}));
    // res.send("create user")
})

router.delete('/users/:id',(req,res) =>{
    const {id} =  req.params;

    userSchema
    .remove({_id:id})
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message :error}));
    // res.send("create user")
})

module.exports = router;
