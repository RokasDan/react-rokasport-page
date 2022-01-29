import React, {useState, useRef, useEffect} from 'react';
import './AudioPlayer.css';
import {FaArrowLeft} from 'react-icons/fa'
import {FaArrowRight} from 'react-icons/fa'
import {GrPlayFill} from 'react-icons/gr'
import {GrPauseFill} from 'react-icons/gr'

const AudioPlayer = () => {
  // Audio player


  // Bool variable used to change the play and pause button on toggle
  const [isPlaying, setIsPlaying] = useState(false);

  // Variable to hook the duration of the audio
  const [duration, setDuration] = useState(0);

  // Variable to hook the current play time of the audio
  const [currentTime, setCurrentTime] = useState(0);

  // references
  const audioPlayer = useRef(); // reference for our audio component
  const progressBar = useRef(); // reference to progress bar
  const animationRef = useRef(); // reference the progress knobby animation

  // Hooking the duration and current time of the audio.
  useEffect(() => {
    const seconds = Math.floor(audioPlayer.current.duration);
    setDuration(seconds);
    progressBar.current.max = seconds;
  }, [audioPlayer?.current?.loadedMetadata, audioPlayer?.current?.readyState])

  // Converting seconds in to minute time.
  const calculateTime = (secs) => {
    const minutes = Math.floor(secs/60);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnedMinutes}:${returnedSeconds}`;
  }

  // Function which changes the Bool variable from false to true to toggle
  // button icon for play and pause.
  const togglePlayPause = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);
    if (!prevValue) {
      audioPlayer.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
    } else {
      audioPlayer.current.pause();
      cancelAnimationFrame(animationRef.current);
    }
  }

  // Knobby animation function
  const whilePlaying = () => {
    progressBar.current.value = audioPlayer.current.currentTime;
    changePlayerCurrentTime();
    animationRef.current = requestAnimationFrame(whilePlaying);
  }

  // Function which changes the audio duration when knobby is used.
  const changeRange = () => {
    audioPlayer.current.currentTime = progressBar.current.value;
    changePlayerCurrentTime();
  }

  const changePlayerCurrentTime = () => {
    progressBar.current.style.setProperty('--seek-before-width', `${progressBar.current.value / duration * 100}%`)
    setCurrentTime(progressBar.current.value);
  }

  // Function which skips audio back 30 seconds
  const backAudio = () => {
    progressBar.current.value = Number(progressBar.current.value - 30);
    changeRange();
  }

  // Function which skips audio forward 30 seconds
  const forwardAudio = () => {
    progressBar.current.value = Number(progressBar.current.value) + 30;
    changeRange();
  }


  return (
    <div className="playerStyle">
      <h3>This is a song</h3>
      {/*<audio ref={audioPlayer} src="/audio/Space_Symphony.wav" preload="metadata"></audio>*/}
      <audio ref={audioPlayer} preload="metadata">
        <source src={process.env.PUBLIC_URL + '/audio/Space_Symphony.mp3'} type="audio/mpeg"/>
      </audio>

      <div className="audioPlayer">
        <button className="forwardBackward" onClick={backAudio}><FaArrowLeft/></button>
        <button className="playPause" onClick={togglePlayPause}>

          {isPlaying ? <GrPauseFill className="pauseButton"/> :
            <GrPlayFill className="playButton"/>}

        </button>
        <button className="forwardBackward" onClick={forwardAudio}><FaArrowRight/></button>

        <div className="audioProgressContainer">
          {/* current time */}
          <div className="currentTime">{calculateTime(currentTime)}</div>

          {/* progress bar */}
          <div>
            <input className="progressBar" type="range" defaultValue="0" ref={progressBar} onChange={changeRange}/>
          </div>

          {/* duration time */}
          <div className="duration">{(duration && !isNaN(duration)) && calculateTime(duration)}</div>
        </div>

      </div>
    </div>
  );
}
export default AudioPlayer;
