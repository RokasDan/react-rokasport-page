import AudioLinkNoTimer from "../Components/AudioLinkNoTimer";
import {AudioProvider} from '../Components/AudioState';
import './PageStyle.css';

const Audio = () => {
    // Page for audio and music works.

    return(
        <div className="pageStyle">
            <h2 className="pageHeader1">
              Audio
            </h2>
          <AudioProvider>
            <AudioLinkNoTimer id="1" to='/' audioName="Space Symphony" link="/audio/Space_Symphony.mp3"
            description="Cinematic track which mostly uses orchestra VST's."/>
            <AudioLinkNoTimer id="2" to='/' audioName="Orbit The Sun" link="/audio/Orbit_The_Sun.mp3"
            description="Cinematic track modeled after M83 music."/>
          </AudioProvider>
        </div>
    );
}
export default Audio;
