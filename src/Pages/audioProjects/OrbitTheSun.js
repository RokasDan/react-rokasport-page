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


const Orbit = () => {
  // Page for stardust project.

  return (
    <div className="pageStyle">

      <ProjectHeader projectName="Orbit The Sun" date='2022-12-10'/>

      <AudioProvider>
        <AudioSimple id="1" to='/' link="/audio/Orbit_The_Sun.mp3"
                     description="Rokas Dan - Orbit The Sun"/>
      </AudioProvider>

      <h3 className="pageHeader1">
        About The Project
      </h3>

      <p className='paragraph1'>
        "Orbit The Sun" is a mesmerizing cinematic synth audio track that I crafted during my time
        studying Music Technology at the Coventry University.
      </p>

      <p className='paragraph1'>
        Drawing inspiration from the unforgettable soundscapes of "M83" - Lower Your Eyelids To Die
        With The Sun, I was captivated by the symphonic synth strings blended seamlessly with a
        steady slow drum beat. Determined to recreate this unique sonic experience, I set out to
        create my own interpretation and thus, "Orbit The Sun" was born.
      </p>

      <p className='paragraph1'>
        As a die-hard fan of M83's signature sound, I was intrigued by the prominent use of analog
        synths in his music. With a burning desire to replicate that warm, organic feel, I turned to
        the powerful analog synth emulations offered by Arturia. I carefully chose the perfect
        combination of instruments to bring my vision to life, utilizing a stunning replica of a
        Roland Jupiter 8 for the lead melody and a mesmerizing Moog Minimoog for the powerful bass
        line.
      </p>

      <div className="image-container">
        <img className='imageWrap' src={image1}/>
        <img className='imageWrap2' src={image2}/>
      </div>


    </div>
  );
}
export default Orbit;
