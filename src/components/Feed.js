import React from "react";
import TweetBox from "./TweetBox";
import Post from "./Post";
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { db } from "./firebase";
import { useEffect } from "react";
import { useState } from "react";
import DehazeIcon from '@material-ui/icons/Dehaze';
import IconButton from "@material-ui/core/IconButton";

const Feed = () => {
  const [post,setPost]=useState([])
 const unSub= useEffect(() => {
      db.collection('posts')
      .orderBy('timestamp','desc')
      .onSnapshot(snapshot=>(
        setPost(snapshot.docs.map((doc) => doc.data()))
      ))
    return () => {
      unSub()
    }
  }, [])
  console.log(post)
  return (
    <div className="feed">
      <div className="feed_header">
        <IconButton><DehazeIcon size="large" className="hide"/></IconButton>
        <strong>Home</strong>
        <StarBorderIcon/>
      </div>
      <TweetBox/>
      {post?.map(item=>(
        <Post
          key={item.doc}
          displayName={item.userName}
          username={item.userName.slice(0,5)}
          verified
          text={item.caption}
          image={item.imageUrl}
          avatar={item.avatar}
          timestamp={'2 days'}
      />
      ))}
      
   
    </div>
  );
};
export default Feed;
