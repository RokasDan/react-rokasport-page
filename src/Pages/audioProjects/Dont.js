import '../PageStyle.css';

import 'prismjs';
import 'prismjs/themes/prism.css';


import ProjectHeader from "../../Components/ProjectHeader";
import VideoComponent from "../../Components/VideoComponent";
import {CodeBlock} from "../../Components/CodeBlock";
import AudioSimple from "../../Components/AudioSimple";
import AudioSimpleTimer from "../../Components/AudioSimpleTimer";
import {AudioProvider} from '../../Components/AudioState';
import image5 from "../../Pictures/bitfx.png";

import image1 from "../../Pictures/stardust.png";


const Dont = () => {
  // Page for stardust project.

  return (
    <div className="pageStyle">

      <ProjectHeader projectName="Don't" date='2023-01-01'/>

      <VideoComponent
        src="https://www.youtube.com/embed/XgJ4zzD7VA4?ecver=1&amp;iv_load_policy=3&amp;rel=0&amp;yt:stretch=16:9&amp;autohide=1&amp;color=red&amp;width=560&amp;width=560"/>
      <p className='paragraph1'>
      </p>

      <h3 className="pageHeader1">
        About The Project
      </h3>

      <p className='paragraph1'>
        During my time studying music technology at Coventry University, I was tasked with recording
        a song using only real instruments. It was then that I decided to take on the challenge of
        recording a cover of Ed Sheeran's hit song "Don't."
      </p>

      <p className='paragraph1'>
        The project proved to be both exciting and fulfilling, as I set out to gather a group of
        talented individuals who shared my passion for music. Marius Muresan, an exceptional bassist
        and acoustic guitarist, lent his skills to the project, while Emmanuel Farinu, one of the
        best drummers I had the pleasure of meeting, took on the responsibility of playing the
        drums.
      </p>

      <p className='paragraph1'>
        As for me, I was in charge of recording the vocals and the track itself. After the recording
        was complete, we realized that it was too good not to share with others, so we decided to
        create a video to accompany the song and showcase our hard work.
      </p>

    </div>
  );
}
export default Dont;
