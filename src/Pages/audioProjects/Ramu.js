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


const Ramu = () => {
  // Page for Ramu project.

  return (
    <div className="pageStyle">

      <ProjectHeader projectName='Ramu' date='2023-01-12'/>

      <VideoComponent
        src="https://www.youtube.com/embed/pr17OJS4fnI?ecver=1&amp;iv_load_policy=3&amp;rel=0&amp;showinfo=0&amp;yt:stretch=16:9&amp;autohide=1&amp;color=red&amp;width=560&amp;width=560"/>
      <p className='paragraph1'>
      </p>

      <h3 className="pageHeader1">
        About The Project
      </h3>

      <p className='paragraph1'>
        "Ramu" is a song originally written and performed by Kazimieras Likša, whose alternative
        rock and acoustic style resonated deeply with me. I felt compelled to create a cover of this
        song, which would be a homage to his work while incorporating my own musical tastes.
      </p>

      <p className='paragraph1'>
        To achieve this, I aimed to imbue the track with a cinematic sound, distinct from the
        original. With only my acoustic guitar and voice at my disposal, I turned to virtual
        instruments from 8DIO and Spitfire Audio, which added a magical touch to the music.
      </p>

      <p className='paragraph1'>
        To complement the audio, I sought to create a visual representation of the song and enlisted
        the help of my friend Chris Fernandez, a talented video director and editor. He worked his
        magic and filmed and edited the video that you can watch at the beginning of the page. I
        highly recommend following his <a
        className="inLineLink"
        href="https://github.com/RokasDan">[Instagram]</a> for more of his stunning projects!
      </p>

    </div>
  );
}
export default Ramu;
