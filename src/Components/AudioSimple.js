import React, {useState, useRef, useEffect, useContext} from 'react';
import './AudioSimple.css';
import {AudioState} from "./AudioState";

const AudioLinkNoTimer = (props) => {
  // Audio player

  // This variable is just used to set play and pause button.
  const [playPause, setPlayPause] = useState(false);

  // Value which stores if the player is already active, this also shows
  // if another player is active.
  const [activePlayer, setActivePlayer] = useContext(AudioState);

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

  // Pauses the player if another player is selected to play.
  useEffect(() => {
    if (activePlayer !== props.id) {
      setPlayPause(false);
      audioPlayer.current.pause();
      cancelAnimationFrame(animationRef.current);
    }
  })

  // Resetting the audio once the audio finished playing
  useEffect(() => {
    if (currentTime >= duration) {
      forcePause();
      audioReset();
    }
  })

  // Converting seconds in to minute time.
  const calculateTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnedMinutes}:${returnedSeconds}`;
  }

  // Used to pause the player once it reaches the end.
  const forcePause = () => {
    setActivePlayer('');
    setPlayPause(false);
    audioPlayer.current.pause();
    cancelAnimationFrame(animationRef.current);
  }

  // turns on the player and changes the button to play or pause
  // First it checks if another player is in use through the audio state context
  // with the active Player variable.
  const togglePlayPause = () => {
    if (activePlayer === '' || activePlayer !== props.id) {
      setActivePlayer(props.id);
      setPlayPause(true);
      audioPlayer.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
    } else {
      setActivePlayer('');
      setPlayPause(false);
      audioPlayer.current.pause();
      cancelAnimationFrame(animationRef.current);
    }
  }

  // Knobby animation function
  const whilePlaying = () => {
    if (audioPlayer.current == null) {
      return
    } else {
      progressBar.current.value = audioPlayer.current.currentTime;
      changePlayerCurrentTime();
      animationRef.current = requestAnimationFrame(whilePlaying);
    }
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

  // Audio reset function
  const audioReset = () => {
    progressBar.current.value = Number(progressBar.current.value - duration);
    changeRange();
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


      <p className="description3">{props.description}</p>
      <audio ref={audioPlayer} preload="metadata">
        <source src={process.env.PUBLIC_URL + props.link} type="audio/mpeg"/>
      </audio>

      <div className="audioPlayer">
        <div className="playerButtons">
          {/* player buttons */}

          <button className="forwardBackwardPlay" onClick={backAudio}>{"[-30]"}</button>
          <button className="forwardBackwardPlay" onClick={togglePlayPause}>

            {playPause ? "[STOP]" : "[PLAY]"}

          </button>
          <button className="forwardBackwardPlay" onClick={forwardAudio}>{"[+30]"}</button>
        </div>
        <div className="audioProgressContainer">
          {/* progress bar */}

          <input className="progressBar" type="range" defaultValue="0" ref={progressBar}
                 onChange={changeRange}/>
        </div>
      </div>


    </div>
  );
}
export default AudioLinkNoTimer;
