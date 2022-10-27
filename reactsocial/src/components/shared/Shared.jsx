import { EmojiEmotions, Room, Label, PermMedia } from "@mui/icons-material"
import "./shared.css"

export default function Shared(){
    return (
        <div className="shared">
            <div className="sharedWrapper">
                <div className="sharedTop">
                    <img className="sharedProfileImg" src="/assets/basketballplayer1.jpg" alt=""/>
                    <input placeholder="What's up bro?" className="sharedInput"/>
                </div>
                <hr className="sharedHr"/>
                <div className="sharedBottom">
                    <div className="sharedOptions">
                        <div className="sharedOption">
                            <PermMedia htmlColor = "blue" className="sharedIcon"/>
                            <span className="sharedOptionText">Photo/Video</span>
                        </div>
                        <div className="sharedOption">
                            <Label htmlColor = "red" className="sharedIcon"/>
                            <span className="sharedOptionText">Tag</span>
                        </div>
                        <div className="sharedOption">
                            <Room htmlColor = "green" className="sharedIcon"/>
                            <span className="sharedOptionText">Location</span>
                        </div>
                        <div className="sharedOption">
                            <EmojiEmotions htmlColor = "orange" className="sharedIcon"/>
                            <span className="sharedOptionText">Mood</span>
                        </div>
                    </div>
                    <button className="sharedButton">Share</button>
                </div>
            </div>
        </div>
    )
}