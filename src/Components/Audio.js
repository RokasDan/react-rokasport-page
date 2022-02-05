import AudioPlayer from "./AudioPlayer";
import './PageStyle.css';
import React, {useState} from 'react';
import {AudioProvider} from './AudioState'

const Audio = () => {
    // Page for audio and music works.

    return(
        <div className="pageStyle">
            <h1 className="header1">
              [Audio]
            </h1>
          <AudioProvider>
            <AudioPlayer id="1" audioName="Space Symphony" link="/audio/Space_Symphony.mp3" />
            <AudioPlayer id="2" audioName="Orbit The Sun" link="/audio/Orbit_The_Sun.mp3" />
          </AudioProvider>
        </div>
    );
}
export default Audio;
