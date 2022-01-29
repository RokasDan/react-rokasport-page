import React, {useState, useRef} from 'react';
import './AudioPlayer.css';
import {FaArrowLeft} from 'react-icons/fa'
import {FaArrowRight} from 'react-icons/fa'
import {GrPlayFill} from 'react-icons/gr'
import {GrPauseFill} from 'react-icons/gr'

const AudioPlayer = () => {
  // Audio player


  // Bool variable used to change the play and pause button on toggle
  const [isPlaying, setIsPlaying] = useState(false);

  // references
  const audioPlayer = useRef(); // reference for our audio component

  // Function which changes the Bool variable from false to true to toggle
  // button icon for play and pause.
  const togglePlayPause = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);
    if (!prevValue) {
      audioPlayer.current.play();
    } else {
      audioPlayer.current.pause();
    }
  }

  return (
    <div className="playerStyle">
      <h3>This is a song</h3>
      {/*<audio ref={audioPlayer} src="/audio/Space_Symphony.wav" preload="metadata"></audio>*/}
      <audio ref={audioPlayer} preload="metadata">
        <source src={process.env.PUBLIC_URL + '/audio/Space_Symphony.mp3'} type="audio/mpeg"/>
      </audio>

      <div className="audioPlayer">
        <button className="forwardBackward"><FaArrowLeft/></button>
        <button className="playPause" onClick={togglePlayPause}>

          {isPlaying ? <GrPauseFill className="pauseButton"/> :
            <GrPlayFill className="playButton"/>}

        </button>
        <button className="forwardBackward"><FaArrowRight/></button>

        <div className="audioProgressContainer">
          {/* current time */}
          <div className="currentTime">0:00</div>

          {/* progress bar */}
          <div>
            <input className="progressBar" type="range"/>
          </div>

          {/* duration time */}
          <div className="duration">2:49</div>
        </div>

      </div>
    </div>
  );
}
export default AudioPlayer;
