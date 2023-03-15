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


const SpaceSymphony = () => {
  // Page for stardust project.

  return (
    <div className="pageStyle">

      <ProjectHeader projectName='Space Symphony' date='2023-01-01'/>

      <VideoComponent
        src="https://www.youtube.com/embed/QipEYTojifM?ecver=1&amp;iv_load_policy=3&amp;rel=0&amp;showinfo=0&amp;yt:stretch=16:9&amp;autohide=1&amp;color=red&amp;width=560&amp;width=560"/>
      <p className='paragraph1'>
      </p>

      <h3 className="pageHeader1">
        About The Project
      </h3>

      <p className='paragraph1'>
        "Space Symphony" is a track that I created while studying music technology at Coventry
        University. I was tasked with using Logic Pro for the first time to produce an audio track
        and "Space Symphony" was the result.
      </p>

      <p className='paragraph1'>
        As I delved into Logic Pro's stock virtual instruments, I discovered many exceptional
        sounds, particularly the drum and violin virtual instruments. Through experimentation with
        these instruments, I crafted the foundation for "Space Symphony."
      </p>

      <p className='paragraph1'>
        The track draws inspiration from the likes of "M83," where the fusion of synthesizers and
        symphonic instruments, such as violin sections, is a hallmark of their sound. In "Space
        Symphony," you can hear a similar interplay between symphonic virtual instruments, such as
        string sections and solos, and more electronic instruments, creating a unique fusion of
        styles.
      </p>

    </div>
  );
}
export default SpaceSymphony;
