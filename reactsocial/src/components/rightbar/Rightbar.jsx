import "./rightbar.css"
import { Redeem } from '@mui/icons-material'
export default function Rightbar(){
    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                <div className="birthdayContainer">
                    <Redeem className="birthdayIcon"/>
                    <span className="birthdayText">
                        <b>John Wall</b> and <b>others</b> have a birthday today
                    </span>
                </div>
                <img className="rightbarAd" src="assets/coachad1.jpg" alt=""/>
                <h4 className="rightbarTitle">Online Frineds</h4>
                <ul className="rightbarFriendList">
                    <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                            <img className="rightbarProfileImg" src="assets/hockeyplayer1.jpg" alt=""/>
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">Rebecca Lidge</span>
                    </li>
                    <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                            <img className="rightbarProfileImg" src="assets/hockeyplayer1.jpg" alt=""/>
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">Rebecca Lidge</span>
                    </li>
                    <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                            <img className="rightbarProfileImg" src="assets/hockeyplayer1.jpg" alt=""/>
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">Rebecca Lidge</span>
                    </li>
                    <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                            <img className="rightbarProfileImg" src="assets/hockeyplayer1.jpg" alt=""/>
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">Rebecca Lidge</span>
                    </li>
                    <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                            <img className="rightbarProfileImg" src="assets/hockeyplayer1.jpg" alt=""/>
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">Rebecca Lidge</span>
                    </li>
                    <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                            <img className="rightbarProfileImg" src="assets/hockeyplayer1.jpg" alt=""/>
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">Rebecca Lidge</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}