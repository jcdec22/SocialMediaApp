import "./rightbar.css";
import { Redeem } from "@mui/icons-material";
import { Users } from "../../dummyData";
import Online from "../online/Online";

export default function Rightbar({ profile }) {
  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <Redeem className="birthdayIcon" />
          <span className="birthdayText">
            <b>John Wall</b> and <b>others</b> have a birthday today
          </span>
        </div>
        <img className="rightbarAd" src="assets/coachad1.jpg" alt="" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitle">User Information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">Philadelphia</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Sport:</span>
            <span className="rightbarInfoValue">Basketball</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Position:</span>
            <span className="rightbarInfoValue">Point Guard</span>
          </div>
        </div>
        <h4 className="rightbarTitle">User Friends</h4>
        <div className="rightbarFollowings">
            <div className="rightbarFollowing">
                <img src="assets/hockeyplayer1.jpg" alt="" className="rightbarFollowingImg"/>
                <span className="rightbarFollowingName">Person 1</span>
            </div>
            <div className="rightbarFollowing">
                <img src="assets/soccerplayer1.jpg" alt="" className="rightbarFollowingImg"/>
                <span className="rightbarFollowingName">Person 2</span>
            </div>
            <div className="rightbarFollowing">
                <img src="assets/soccerplayer2.jpg" alt="" className="rightbarFollowingImg"/>
                <span className="rightbarFollowingName">Person 3</span>
            </div>
            <div className="rightbarFollowing">
                <img src="assets/soccerplayer3.jpg" alt="" className="rightbarFollowingImg"/>
                <span className="rightbarFollowingName">Person 4</span>
            </div>
            <div className="rightbarFollowing">
                <img src="assets/tennisplayer1.jpg" alt="" className="rightbarFollowingImg"/>
                <span className="rightbarFollowingName">Person 5</span>
            </div>
        </div>
      </>
    )
  }

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar/> : <HomeRightbar/>}
      </div>
    </div>
  );
}
