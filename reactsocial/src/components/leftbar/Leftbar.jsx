import "./leftbar.css";
import { RssFeed, Chat, PlayCircle, Groups, Bookmark, Work, Event, Sports } from '@mui/icons-material'

export default function Leftbar() {
  return (
    <div className="leftbar">
      <div className="leftbarWrapper">
        <ul className="leftbarList">
            <li className="leftbarListItem">
                <RssFeed className="leftBarIcon"/>
                <span className="leftbarListItemText">Feed</span>
            </li>
            <li className="leftbarListItem">
                <Chat className="leftBarIcon"/>
                <span className="leftbarListItemText">Chats</span>
            </li>
            <li className="leftbarListItem">
                <PlayCircle className="leftBarIcon"/>
                <span className="leftbarListItemText">Videos</span>
            </li>
            <li className="leftbarListItem">
                <Groups className="leftBarIcon"/>
                <span className="leftbarListItemText">Teams</span>
            </li>
            <li className="leftbarListItem">
                <Bookmark className="leftBarIcon"/>
                <span className="leftbarListItemText">Bookmarks</span>
            </li>
            <li className="leftbarListItem">
                <Work className="leftBarIcon"/>
                <span className="leftbarListItemText">Openings</span>
            </li>
            <li className="leftbarListItem">
                <Event className="leftBarIcon"/>
                <span className="leftbarListItemText">Events</span>
            </li>
            <li className="leftbarListItem">
                <Sports className="leftBarIcon"/>
                <span className="leftbarListItemText">Training Drills</span>
            </li>
        </ul>
        <button className="leftbarButton">Show More</button>
        <hr className="leftbarHr"/>
        <ul className="leftbarFriendList">
            <li className="leftbarFriend">
                <img className="leftbarFriendImg" src="/assets/baseballplayer1.jpg" alt=""/>
                <span className="leftbarFriendName">John</span>
            </li>
            <li className="leftbarFriend">
                <img className="leftbarFriendImg" src="/assets/baseballplayer1.jpg" alt=""/>
                <span className="leftbarFriendName">John</span>
            </li>
            <li className="leftbarFriend">
                <img className="leftbarFriendImg" src="/assets/baseballplayer1.jpg" alt=""/>
                <span className="leftbarFriendName">John</span>
            </li>
            <li className="leftbarFriend">
                <img className="leftbarFriendImg" src="/assets/baseballplayer1.jpg" alt=""/>
                <span className="leftbarFriendName">John</span>
            </li>
            <li className="leftbarFriend">
                <img className="leftbarFriendImg" src="/assets/baseballplayer1.jpg" alt=""/>
                <span className="leftbarFriendName">John</span>
            </li>
            <li className="leftbarFriend">
                <img className="leftbarFriendImg" src="/assets/baseballplayer1.jpg" alt=""/>
                <span className="leftbarFriendName">John</span>
            </li>
            <li className="leftbarFriend">
                <img className="leftbarFriendImg" src="/assets/baseballplayer1.jpg" alt=""/>
                <span className="leftbarFriendName">John</span>
            </li>
            <li className="leftbarFriend">
                <img className="leftbarFriendImg" src="/assets/baseballplayer1.jpg" alt=""/>
                <span className="leftbarFriendName">John</span>
            </li>
        </ul>
      </div>
    </div>
  );
}
