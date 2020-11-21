import React, { useState } from "react";
import { Button, Avatar } from "@material-ui/core";
import PermMediaIcon from "@material-ui/icons/PermMedia";
import GifIcon from "@material-ui/icons/Gif";
import SentimentSatisfiedIcon from "@material-ui/icons/SentimentSatisfied";
import { useStateValue } from "./StateProvider";
import { storage, db } from "./firebase";
import firebase from "firebase";

const TweetBox = () => {
  const [{ user }, dispatch] = useStateValue();

  const [image, setImage] = useState(null);
  const [caption, setCaption] = useState("");
  const [progress, setProgress] = useState("");

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = (e) => {
    e.preventDefault();
    const uploadTask=storage.ref(`images/${image.name}`).put(image)
    uploadTask.on(
      "state_changed",
      (snapshot)=>{
        // progress function
        const progress=Math.round(
          (snapshot.bytesTransferred/snapshot.totalBytes)*100
        )
        setProgress(progress)
      },
      (error)=>{
        console.log(error)
        alert(error.message)
      },
      ()=>{
        storage.ref("images").child(image.name).getDownloadURL()
        .then(url=>{
           db.collection('posts').add({
                caption: caption,
                userName: user.displayName,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                avatar: user.photoURL,
                imageUrl:url
    })
    setCaption('')
    setProgress('')
    setImage(null)
        })
      }
    ) 


   
  };
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox_input">
          <Avatar alt="" src={user.photoURL} />
          <input
            placeholder="what's happening"
            type="text"
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            required
          />
        </div>
        <progress value={progress} max="" />
        <input
          className="tweetBox_inputimage"
          type="file"
          onChange={handleChange}
        />
        
        <div className="tweetBox_file">
          <PermMediaIcon />
          <GifIcon />
          <SentimentSatisfiedIcon />
          <Button className="tweetBox_button" onClick={handleUpload}>
            Tweet
          </Button>
        </div>
      </form>
    </div>
  );
};

export default TweetBox;
