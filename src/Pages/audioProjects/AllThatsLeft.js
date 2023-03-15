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


const AllThatsLeft = () => {
  // Page for stardust project.

  return (
    <div className="pageStyle">

      <ProjectHeader projectName="All That's Left" date='2022-12-08'/>

      <AudioProvider>
        <AudioSimple id="1" to='/' link="/audio/All_Thats_Left.mp3"
                     description="Rokas Dan - All That's Left"/>
      </AudioProvider>

      <h3 className="pageHeader1">
        About The Project
      </h3>

      <p className='paragraph1'>
        Inspired by the soulful sounds of John Mayer's "Dreaming With A Broken Heart", I set out to
        create a short track to test out my new Squier Telecaster, a prized
        possession that
        I had acquired at that time.
      </p>

      <p className='paragraph1'>
        As a music technology student at Coventry University, I was always looking for new ways to
        hone my skills as a musician and experiment with different sounds. And so, "All That's Left"
        was born from this guitar test.
      </p>

      <p className='paragraph1'>
        To capture the true essence of my Squier Telecaster, I turned to the Amplitude guitar
        emulator software, which offered a vast array of meticulously modeled amplifiers. With its
        cutting-edge technology, Amplitude enabled me to experiment with different tones and
        effects, allowing me to fine-tune my sound to perfection for this track.
      </p>

    </div>
  );
}
export default AllThatsLeft;
