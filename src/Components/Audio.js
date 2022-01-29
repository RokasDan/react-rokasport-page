import AudioPlayer from "./AudioPlayer";
import './PageStyle.css';

const Audio = () => {
    // Page for audio and music works.

    return(
        <div className="pageStyle">
            <h1>
                Audio
            </h1>
            <AudioPlayer />
        </div>
    );
}
export default Audio;