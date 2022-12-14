import React from "react";
import {
  Player,
  DefaultUi,
  Video,
  
} from "@vime/react";

import '@vime/core/themes/default.css';


 function VideoPlayer() {

  
  return (
    <div className="video">
    <Player  autoplay>
      <Video crossOrigin=""  poster="https://media.vimejs.com/poster.png">
        <source  data-src="https://media.vimejs.com/720p.mp4" type="video/mp4" />
        <track
          default
          kind="subtitles"
          src="https://media.vimejs.com/subs/english.vtt"
          srcLang="en"
          label="English"
        />
      </Video>
      <DefaultUi ></DefaultUi>
      
    </Player>
      
    </div>
  );
}


export default VideoPlayer