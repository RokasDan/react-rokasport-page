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


const Steps = () => {
  // Page for stardust project.

  return (
    <div className="pageStyle">

      <ProjectHeader projectName="Steps" date='2022-12-21'/>

      <VideoComponent
        src="https://www.youtube.com/embed/vAj9bIjIl5E?ecver=1&amp;iv_load_policy=3&amp;rel=0&amp;yt:stretch=16:9&amp;autohide=1&amp;color=red&amp;width=560&amp;width=560"/>
      <p className='paragraph1'>
      </p>

      <h3 className="pageHeader1">
        About The Project
      </h3>

      <p className='paragraph1'>
        One of my most prized works is a composition I created called "Steps" for my high school
        music exam. This piece is particularly special to me, as it was the first time I had
        composed a piece entirely using virtual instrument libraries such as 8DIO and CineSamples.
      </p>

      <p className='paragraph1'>
        Drawing inspiration from Edvard Grieg's famous composition "In the Hall of the Mountain
        King," I aimed to recreate the uplifting and progressive nature of Grieg's piece in my own
        work. As such, "Steps" features a similar upward progression that captures the same sense of
        excitement and anticipation. The end result was a composition that I am truly proud of, and
        one that showcased my skills and passion for music.
      </p>

      <p className='paragraph1'>
        This particular piece earned me the highest possible mark on my musical exam. Achieving such a high score was
        incredibly rewarding and provided me with a great sense of achievement, knowing that my
        efforts had paid off. It was a defining moment in my musical journey and further fueled my
        passion for creating and composing music.
      </p>
    </div>
  );
}
export default Steps;
