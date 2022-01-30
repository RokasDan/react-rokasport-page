import AudioPlayer from "./AudioPlayer";
import './PageStyle.css';

const Audio = () => {
    // Page for audio and music works.

    return(
        <div className="pageStyle">
            <h1>
                Audio
            </h1>
            <AudioPlayer audioName="Space Symphony" link="/audio/Space_Symphony.mp3"/>
          <AudioPlayer audioName="Orbit The Sun" link="/audio/Orbit_The_Sun.mp3"/>
        </div>
    );
}
export default Audio;
