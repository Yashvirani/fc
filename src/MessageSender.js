import React, { useState } from 'react';
import { Avatar } from '@material-ui/core';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import './MessageSender.css';
import { useStateValue } from './StateProvider';

function MessageSender(){
  const [{ user },dispatch] = useStateValue();
  const [input,setInput] = useState('');
  const [imageUrl,setImageUrl] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <div className='messageSender'>
      <div className="messageSender__top">
        <Avatar src={user.photoURL}/>
        <form>
          <input value={input} onChange={e => setInput(e.target.value)} type='text' className='messageSender__input' placeholder={`Whats on your mind ${user.displayName}?`}></input>
          <input value={imageUrl} onChange={e => setImageUrl(e.target.value)} type='text' placeholder="Image URL(optional)"></input>
          <button type="submit" onClick={handleSubmit}>Submit</button>
        </form>

      </div>
      <div className="messageSender__bottom">
        <div className="messageSender__option">
          <VideocamIcon style={{color:'red'}}/>
          <h4>Live Video</h4>
        </div>
        <div className="messageSender__option">
          <PhotoLibraryIcon style={{color:'green'}}/>
          <h4>Photo/Video</h4>
        </div>
        <div className="messageSender__option">
          <InsertEmoticonIcon style={{color:'yellow'}}/>
          <h4>Feeling/Activity</h4>
        </div>

      </div>
    </div>
  );
}

export default MessageSender;
