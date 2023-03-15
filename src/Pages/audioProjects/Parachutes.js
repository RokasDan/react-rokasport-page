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

import image1 from "../../Pictures/jup.png";
import image2 from "../../Pictures/moog.png";


const Parachutes = () => {
  // Page for stardust project.

  return (
    <div className="pageStyle">

      <ProjectHeader projectName="Parachutes" date='2022-12-04'/>

      <AudioProvider>
        <AudioSimple id="1" to='/' link="/audio/Parachute.mp3"
                     description="Rokas Dan - Parachutes (Coldplay Cover)"/>
      </AudioProvider>

      <h3 className="pageHeader1">
        About The Project
      </h3>

      <p className='paragraph1'>
        As a long-time fan of Coldplay, their music had always held a special place in my heart.
        When I first delved into music production, I knew I had to pay homage to this iconic band by
        creating my own unique version of one of their beloved songs.
      </p>

      <p className='paragraph1'>
        My interest for Coldplay's music led me to choose their timeless classic "Parachutes"
        for my cover project. While I aimed to stay true to the original, I couldn't resist adding
        my own unique touch to the track. With a slight alteration to the melody, I was able to
        infuse a subtle yet unmistakable jazz influence into the piece, breathing a little bit of
        new life into this
        beloved song.
      </p>


    </div>
  );
}
export default Parachutes;
