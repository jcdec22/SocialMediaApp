const User = require("../models/User");
const router = require("express").Router();
const bcrypt = require("bcrypt")

router.put("/:id", async(req,res)=>{
    if(req.body.userId == req.params.id || req.body.isAdmin){
        if(req.body.password){
            try{
                const salt = await bcrypt.genSalt(10);  //new password
                req.body.password = await bcrypt.hash(req.body.password, salt);
            }catch(err){
                return res.status(500).json(err);
            }
        }
        try{
            const user = await User.findByIdAndUpdate(req.params.id,{
                $set:req.body,
            });
            res.status(200).json("Your account has been updated successfully")
        }catch(err){
            return res.status(500).json(err);
        }
    }else{
        return res.status(403).json("You can only update only account")
    }
})


router.delete("/:id", async(req,res)=>{
    if(req.body.userId == req.params.id || req.body.isAdmin){
        try{
            const user = await User.findByIdAndDelete(req.params.id);
            res.status(200).json("Your account has been deleted successfully.")
        }catch(err){
            return res.status(500).json(err);
        }
    }else{
        return res.status(403).json("You can only delete your account")
    }
})


router.get("/:id", async(req,res)=>{
    try{
        const user = await User.findById(req.params.id);
        const {password,updatedAt, ...other} = user._doc
        res.status(200).json(other)
    }catch (err){
        res.status(500).json(err); 
    }
})


router.put("/:id/follow", async(req,res)=>{
    if( req.body.userId !== req.params.id){
        try{
            const user = await User.findById(req.params.id);
            const currentUser = await User.findById(req.body.userId);
            if(!user.followers.includes(req.body.userId)){
                await user.updateOne({$push:{followers:req.body.userId}});
                await currentUser.updateOne({$push:{followings:req.params.id}});
                res.status(200).json("You are now following this user")
            }else{
                res.status(403).json("You follow this person already")
            }
        }catch(err){
            res.status(500).json(err)
        }
    }else{
        res.status(403).json("You can not follow your own account")
    }
})


router.put("/:id/unfollow", async(req,res)=>{
    if( req.body.userId !== req.params.id){
        try{
            const user = await User.findById(req.params.id);
            const currentUser = await User.findById(req.body.userId);
            if(user.followers.includes(req.body.userId)){
                await user.updateOne({$pull:{followers:req.body.userId}});
                await currentUser.updateOne({$pull:{followings:req.params.id}});
                res.status(200).json("You have unfollowed this user")
            }else{
                res.status(403).json("You do not follow this person")
            }
        }catch(err){
            res.status(500).json(err)
        }
    }else{
        res.status(403).json("You can not unfollow your own account")
    }
})
module.exports = router