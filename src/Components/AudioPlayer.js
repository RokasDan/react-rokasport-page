import React, {useState, useRef, useEffect, useContext} from 'react';
import './AudioPlayer.css';
import {FaArrowLeft} from 'react-icons/fa'
import {FaArrowRight} from 'react-icons/fa'
import {GrPlayFill} from 'react-icons/gr'
import {GrPauseFill} from 'react-icons/gr'
import {AudioState} from "./AudioState";

const AudioPlayer = (props) => {
  // Audio player

  // Is play pause button pressed variable
  const [playPause, setPlayPause] = useState(false);

  // Bool variable used to change the play and pause button on toggle
  // The Bool value is taken from the Audio State context.
  const {value1, value2} = useContext(AudioState);
  const [isPlaying, setIsPlaying] = value1;

  // Value which stores if the player os active in the Audio State context.
  const [activePlayer, setActivePlayer] = value2;

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


  // Resetting the audio once the audio finished playing
  useEffect(() => {
    if(currentTime === duration && duration !==0){
      forceResetPause();
      audioReset();
    }
  })

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
  // const togglePlayPause = () => {
  //   const prevValue = isPlaying;
  //   setIsPlaying(!prevValue);
  //   if (!prevValue) {
  //     setActivePlayer(props.id);
  //     audioPlayer.current.play();
  //     animationRef.current = requestAnimationFrame(whilePlaying);
  //   } else {
  //     audioPlayer.current.pause();
  //     setActivePlayer('0');
  //     cancelAnimationFrame(animationRef.current);
  //   }
  // }

  const forceResetPause = () => {
    setIsPlaying(false);
    setPlayPause(false);
    audioPlayer.current.pause();
    cancelAnimationFrame(animationRef.current);
  }


  // This function changes states with audio State context provider.
  // It checks if there are any players which are playing already.
  // If so it mutes them if a new player is activated.
  const togglePlayPause = () => {
    if(activePlayer === props.id)
    {
      setIsPlaying(false);
      setActivePlayer("0");
    } else {
      if(activePlayer !== ''){
        setIsPlaying(true);
        setActivePlayer(props.id);
      } else {
        setActivePlayer(props.id);
        setIsPlaying(!isPlaying);
      }
    }
  }

  // This uses the data from context provider to activate the player.
  // According to the function above this will either play or stop.
  useEffect(() => {
    if(isPlaying === true && activePlayer === props.id){
      setPlayPause(true);
      audioPlayer.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
    } else {
      setPlayPause(false);
      audioPlayer.current.pause();
      cancelAnimationFrame(animationRef.current);
    }
  })

  // Knobby animation function
  const whilePlaying = () => {
    if (audioPlayer.current == null){
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
      <h3>{props.audioName}</h3>
      {/*<audio ref={audioPlayer} src="/audio/Space_Symphony.wav" preload="metadata"></audio>*/}
      <audio ref={audioPlayer} preload="metadata">
        <source src={process.env.PUBLIC_URL + props.link} type="audio/mpeg"/>
      </audio>

      <div className="audioPlayer">
        <button className="forwardBackward" onClick={backAudio}><FaArrowLeft/></button>
        <button className="playPause" onClick={togglePlayPause}>

          {playPause ? <GrPauseFill className="pauseButton"/> :
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
