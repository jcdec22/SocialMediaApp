import "./feed.css"
import Shared from "../shared/Shared"
import Post from "../post/Post"

export default function Feed(){
    return (
        <div className="feed">
            <div className="feedWrapper">
                <Shared/>
                <Post/>
            </div>
        </div>
    )
}