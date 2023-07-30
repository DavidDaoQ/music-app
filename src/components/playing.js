import React from "react";
import AudioPlayer, { RHAP_UI } from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

export default function Playing() {
  return (
    <div>
      <AudioPlayer
        className="player-music"
        src=""
        layout="stacked-reverse"
        showSkipControls={true}
        showJumbControls={false}
      />
    </div>
  );
}
