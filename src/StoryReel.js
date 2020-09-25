import React from 'react';
import './StoryReel.css';
import Story from './Story';

function StoryReel(){
  return(
    <div className='storyReel'>
      <Story
      image="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
      profileSrc=""
      title="Person-1"
      />
      <Story
      image="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
      profileSrc=""
      title="Person-2"
      />
      <Story
      image="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
      profileSrc=""
      title="Person-3"
      />
      <Story
      image="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
      profileSrc=""
      title="Person-4"
      />
      <Story
      image="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
      profileSrc=""
      title="Person-5"
      />
    </div>
  );
}

export default StoryReel;
