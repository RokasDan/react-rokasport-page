import '../PageStyle.css';

import 'prismjs';
import 'prismjs/themes/prism.css';


import ProjectHeader from "../../Components/ProjectHeader";
import VideoComponent from "../../Components/VideoComponent";
import {CodeBlock} from "../../Components/CodeBlock";
import AudioSimple from "../../Components/AudioSimple";
import AudioSimpleTimer from "../../Components/AudioSimpleTimer";
import {AudioProvider} from '../../Components/AudioState';


const pythonCodeString = `
import {AudioProvider} from 'AudioState';
import AudioSimple from 'AudioSimple';
import AudioSimpleTimer from 'AudioSimpleTimer';

const YourPage = () => {

  return (
    <div>

        // Audio provider which checks for active players.
        // You can place other tags inside, this will not affect HTML placement or style.
        <AudioProvider>

        // Both audio players can be used in the same page.
        // Make sure to set the id to a different number on each track so the provider can keep track of them.

        // Audio player without the timer.
        <AudioSimple id="1" to='/' link="YourAudio.mp3" description="Your description."/>

        // Audio player with the timer.
        <AudioSimpleTimer id="2" to='/' link="YourAudio.mp3" description="Your description."/>

        </AudioProvider>

    </div>
  );
}
`;

const ReactAudio = () => {
  // Page for Nottcraft project.

  return (
    <div className="pageStyle">

      <ProjectHeader projectName='React Audio Player' date='2021-11-17'/>
      <AudioProvider>
        <AudioSimple id="1" to='/' link="/audio/ReactAudioPlayer.mp3"
                     description="Introduction to React Audio Player."/>

        <h3 className="pageHeader1">
          Intro
        </h3>
        <p className='paragraph1'>
          To showcase my music on my portfolio website, I created a custom React Audio Player
          Component that aligns with the site's aesthetic. The component automatically pauses
          playback on one instance when another is activated, providing seamless audio control on
          the page. With two variations and support for multiple instances per page, visitors can
          listen to my audio directly on the site or incorporate it into their own projects.
        </p>

        <p className='paragraph1'>
          If you're interested in using this audio player for your own projects, feel free to check
          it out on my <a className="inLineLink"
                          href="https://github.com/RokasDan/React_Audio_Player">[GitHub]</a> page.
        </p>

        <h3 className="pageHeader1">
          Variations
        </h3>

        <p className='paragraph1'>
          In the first version of the Audio player component, I included a feature that displayed
          the audio's duration and progress time, as well as a progress bar that users could control
          to
          skip through the audio. Play and stop buttons were also present, along with a button to
          skip audio in 30-second intervals. However, I realized that this version was too large for
          my website, so I created a second version that is essentially the same, but without the
          timer.
        </p>

        <AudioSimpleTimer id="2" to='/' link="/audio/Karma_Ramu.mp3"
                          description="React audio player with timer."/>

        <AudioSimple id="3" to='/' link="/audio/Space_Symphony.mp3"
                     description="React audio player without timer."/>

        <p className='paragraph1'>
          In addition to these two versions, there is another iteration of the player that includes
          a header that can be utilized as a link. This particular version is currently featured on
          the 'Audio' section of my website.
        </p>

        <h3 className="pageHeader1">
          How to use
        </h3>

        <p className='paragraph1'>
          If you wish to use this audio player for your project, please download it from my <a
          className="inLineLink"
          href="https://github.com/RokasDan">[GitHub]</a> page. There you will find the AudioState
          component, which checks the states of the
          players, as well as the two player components, AudioSimple and AudioSimpleTimer, each with
          its own CSS style sheet. Be sure to download the style sheet for the player component you
          choose to use. Please refer to the code below for instructions on how to implement them.
        </p>
        <CodeBlock codeString={pythonCodeString} language="JavaScript"/>


      </AudioProvider>

    </div>
  );
}
export default ReactAudio;
