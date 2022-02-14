import AudioPlayerNoTimer from "../Components/AudioPlayerNoTimer";
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
            <AudioPlayerNoTimer id="1" audioName="Space Symphony" link="/audio/Space_Symphony.mp3" />
            <AudioPlayerNoTimer id="2" audioName="Orbit The Sun" link="/audio/Orbit_The_Sun.mp3" />
          </AudioProvider>
        </div>
    );
}
export default Audio;
