const router = require("express").Router();
const Post = require("../models/Post");
const User = require("../models/User");

//create | post is created with different attributes
router.post("/", async (req, res) => {
  const newPost = new Post(req.body)
  try {
    const savedPost = await newPost.save()
    res.status(200).json(savedPost)
  } catch (err) {
    res.status(500).json(err)
  }
});

//update | post is updated with new text
router.put("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id)
    if (post.userId === req.body.userId) {
      await post.updateOne({ $set: req.body })
      res.status(200).json("The post has been updated")
    } else {
      res.status(403).json("You can not update someone else's post")
    }
  } catch (err) {
    res.status(500).json(err)
  }
});

//delete | post is deleted completely
router.delete("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id)
    if (post.userId === req.body.userId) {
      await post.deleteOne({ $set: req.body })
      res.status(200).json("The post has been deleted")
    } else {
      res.status(403).json("You can not delete someone else's post")
    }
  } catch (err) {
    res.status(500).json(err)
  }
});

//like/dislike | post is liked or disliked
router.put("/:id/like", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id)
    if (!post.likes.includes(req.body.userId)) {
      await post.updateOne({ $push: { likes: req.body.userId } })
      res.status(200).json("You have liked the post")
    } else {
      await post.updateOne({ $pull: { likes: req.body.userId } })
      res.status(200).json("You have disliked the post")
    }
  } catch (err) {
    res.status(500).json(err)
  }
});

//fetch post | returns post and post's info
router.get("/:id", async(req,res) =>{
    try{
        const post = await Post.findById(req.params.id)
        res.status(200).json(post)
    }catch(err){
        res.status(500).json(err)
    }
})

//fetch timeline posts | returns all post from that user's timeline
router.get("/timeline/all", async(req,res)=>{
    try{
        const currentUser = await User.findById(req.body.userId)
        const userPosts = await Post.find({userId: currentUser._id})
        const friendPosts = await Promise.all(
            currentUser.followings.map((friendId)=>{
                return Post.find({userId: friendId})
            })
        )
        res.json(userPosts.concat(...friendPosts))
    }catch(err){
        res.status(500).json(err)
    }
})

module.exports = router;
