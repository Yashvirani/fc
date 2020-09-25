import React,{ useState,useEffect } from 'react';
import './Feed.css';
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import Post from './Post';
import db from './firebase';

function Feed () {
  const [posts,setPosts] = useState([]);
  useEffect(() => {
    db.collection('posts').get().then((snapshot) => {
      snapshot.docs.forEach(doc => {
        console.log(doc.data());
        let fetchedPost = {
          id:doc.id,
          data:doc.data()
        }
        setPosts(fetchedPost);
        console.log(fetchedPost);
      })
    })
  },[]);


  console.log(posts);
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />

      {posts.map((post) => (
        <Post
        key={post.id}
        profilePic={post.data.profilePic}
        message={post.data.message}
        timestamp={post.data.timestamp}
        username={post.data.username}
        image={post.data.image}/>
      ))}



    </div>
  );
}

export default Feed;
