import React from "react";
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";

const Post = ({
  displayName,
  username,
  verified,
  text,
  image,
  avatar,
  timestamp,
}) => {
  return (
    <div className="post">
      <div className="post_avatar">
        <Avatar src={avatar} alt="" />
      </div>
      <div className="post_body">
        <div className="post_header">
          <div className="post_headerText">
            <h5>
              {displayName}
              <span className="post_headerSpecial">
                <VerifiedUserIcon className="post_badge" />@{username}
              </span>
              <span className="right">{timestamp}</span>
            </h5>
          </div>
          <div className="post_headerDescription">
            <p>{text}</p>
          </div>
        </div>
        <img src={image} alt="" />
        <div className="post_footer">
          <div className="post_footerno">
            <p>122</p>
            <ChatBubbleOutlineIcon fontSize="small" className="footer" />
          </div>

          <div className="post_footerno">
            <p>1200</p>
            <RepeatIcon fontSize="small" className="footer"/>
          </div>
          <div className="post_footerno">
            <p>1M</p>
            <FavoriteBorderIcon fontSize="small" className="footer"/>
          </div>
          <div className="post_footerno">
            <p>20</p>
            <PublishIcon fontSize="small" className="footer"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
