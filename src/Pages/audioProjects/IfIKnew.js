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


const Knew = () => {
  // Page for stardust project.

  return (
    <div className="pageStyle">

      <ProjectHeader projectName="If I knew" date='2022-12-18'/>

      <VideoComponent
        src="https://www.youtube.com/embed/u6mbhSldXkQ?ecver=1&amp;iv_load_policy=3&amp;rel=0&amp;yt:stretch=16:9&amp;autohide=1&amp;color=red&amp;width=560&amp;width=560"/>
      <p className='paragraph1'>
      </p>

      <h3 className="pageHeader1">
        About The Project
      </h3>

      <p className='paragraph1'>
        One of my favorite hobbies is singing, particularly singing in duets and creating harmonies.
        Over the years, I have had the pleasure of recording several duets, including a cover of
        Bruno Mars' song "If I Knew" with my friend Kamilė Kubekaitė, who is an incredibly gifted
        vocalist in her own right.
      </p>

      <p className='paragraph1'>
        We decided to put our own spin on the song, creating a unique rock rendition that we are
        both very proud of.  Once we had finished recording the cover, we felt compelled to share it with others, so we
        created a video and posted it on social media for our friends and family to enjoy.
      </p>

      <p className='paragraph1'>
       It was a
        fun and fulfilling experience, and one that I hope to continue pursuing in the future.
      </p>
    </div>
  );
}
export default Knew;
