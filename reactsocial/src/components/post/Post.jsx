import { MoreVert } from "@mui/icons-material"
import "./post.css"

export default function Post(){
    return(
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img className = "postProfileImg" src="/assets/basketballplayer1.jpg" alt=""/>
                        <span className="postUsername">John Brooks</span>
                        <span className="postDate">5 mins ago</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert/>
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">Check out this sick court!</span>
                    <img className="postImg" src="assets/post1.jpg" alt=""/>
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className="likeIcon" src="assets/like.png" alt=""/>
                        <span className="postLikeCounter">22 people liked it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">6 comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}