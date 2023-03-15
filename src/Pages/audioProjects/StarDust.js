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


const StarDust = () => {
  // Page for stardust project.

  return (
    <div className="pageStyle">

      <ProjectHeader projectName='Star Dust' date='2023-02-04'/>

      <VideoComponent
        src="https://www.youtube.com/embed/Fis28vA05Ts?ecver=1&amp;iv_load_policy=3&amp;rel=0&amp;showinfo=0&amp;yt:stretch=16:9&amp;autohide=1&amp;color=red&amp;width=560&amp;width=560"/>
      <p className='paragraph1'>
      </p>

      <h3 className="pageHeader1">
        About The Project
      </h3>

      <p className='paragraph1'>
        As a devoted fan of music crafted with analog synthesizers from the 1980s, I drew
        inspiration from the groundbreaking sounds of iconic artists like M83, Daft Punk, and
        Justice. Driven to create tracks with a similar vibe, I immersed myself in extensive
        research on the synths they used, such as the Roland Jupiter-8, Moog One, and Oberheim
        Matrix 12.
      </p>

      <p className='paragraph1'>
        Since I lacked access to the authentic models of these synthesizers, I turned to Arturia's
        digital replicas to bring my artistic vision to life. After exploring various options, the
        Oberheim Matrix 12 stood out to me, and I spent countless hours tinkering with it until the
        main melody for "Star dust" was born.
      </p>

      <div className="image-container2">
        <img className='imageWrap' src={image1}/>
      </div>

      <p className='paragraph1'>
        To enhance the track's allure, I enlisted the artistic expertise of my cousin Gabrielė
        Murzaitė, who crafted an outstanding cover for the song, as showcased in the video above. I
        wholeheartedly recommend checking out her other works on her <a
        className="inLineLink"
        href="https://github.com/RokasDan">[Instagram]</a>, as she is an exceptionally talented
        artist.
      </p>

    </div>
  );
}
export default StarDust;
