import React from 'react';
import './Widgets.css';

function Widgets(){
  return (
    <div className="widgets">
      <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FfacebookappIndia%2Fposts%2F3303856146317950&show_text=true&width=100&height=1500&appId"
      width="552"
      height="683"
      style={{border:'none',overflow:'hidden'}}
      scrolling="no"
      frameborder="0"
      allowTransparency="true"
      allow="encrypted-media">
      </iframe>
    </div>
  );
}

export default Widgets;
