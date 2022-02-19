import AudioLinkNoTimer from "../Components/AudioLinkNoTimer";
import {AudioProvider} from '../Components/AudioState';
import './PageStyle.css';

const Audio = () => {
  // Page for audio and music works.

  return (
    <div className="pageStyle">
      <h2 className="pageHeader1">
        Audio
      </h2>
      <AudioProvider>
        <AudioLinkNoTimer id="1" to='/' audioName="Star Dust" link="/audio/Star_Dust.mp3"
                          description="Vaporwave track made with famous 80's synths."/>
        <AudioLinkNoTimer id="2" to='/' audioName="Ramu" link="/audio/Karma_Ramu.mp3"
                          description="Cinematic cover of a song written by Kazimieras Likša."/>
        <AudioLinkNoTimer id="3" to='/' audioName="Space Symphony" link="/audio/Space_Symphony.mp3"
                          description="Cinematic track which mostly uses orchestra VST's."/>
        <AudioLinkNoTimer id="4" to='/' audioName="Don't" link="/audio/Dont.mp3"
                          description="JazzPop cover of a song written by Ed Sheeran."/>
        <AudioLinkNoTimer id="5" to='/' audioName="Steps" link="/audio/The_Steps.mp3"
                          description="Original classic orchestra track."/>
        <AudioLinkNoTimer id="6" to='/' audioName="If I Knew" link="/audio/If_I_Knew.mp3"
                          description="Rock cover of a song written by Bruno Mars."/>
        <AudioLinkNoTimer id="7" to='/' audioName="Orbit The Sun" link="/audio/Orbit_The_Sun.mp3"
                          description="Cinematic track modeled after M83 music."/>
        <AudioLinkNoTimer id="8" to='/' audioName="All That's Left" link="/audio/All_Thats_Left.mp3"
                          description="A short and warm light-rock track."/>
        <AudioLinkNoTimer id="9" to='/' audioName="Pretty Good Job" link="/audio/Pretty_Good_Job.mp3"
                          description="Original Cinematic jazz track."/>
        <AudioLinkNoTimer id="10" to='/' audioName="This Moment" link="/audio/This_Moment.mp3"
                          description="Original Cinematic orchestra track."/>
        <AudioLinkNoTimer id="11" to='/' audioName="Parachutes" link="/audio/Parachute.mp3"
                          description="Old cover of a song written by Coldplay."/>
      </AudioProvider>
    </div>
  );
}
export default Audio;
