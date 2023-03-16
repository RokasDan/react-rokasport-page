import '../PageStyle.css';

import 'prismjs';
import 'prismjs/themes/prism.css';


import ProjectHeader from "../../Components/ProjectHeader";
import VideoComponent from "../../Components/VideoComponent";
import {CodeBlock} from "../../Components/CodeBlock";
import AudioSimple from "../../Components/AudioSimple";
import AudioSimpleTimer from "../../Components/AudioSimpleTimer";
import {AudioProvider} from '../../Components/AudioState';
import image1 from "../../Pictures/bitdsp.png";
import image2 from "../../Pictures/bitmaster.png";
import image3 from "../../Pictures/bitmatrix.png";
import image4 from "../../Pictures/bitplay.png";
import image5 from "../../Pictures/bitfx.png";

const ReactAudio = () => {
  // Page for 8BitTron project.

  return (
    <div className="pageStyle">

      <ProjectHeader projectName='8-BitTron' date='2021-08-11'/>

      <VideoComponent
        src="https://www.youtube.com/embed/ulqRqfumAS0?ecver=1&amp;iv_load_policy=3&amp;rel=0&amp;showinfo=0&amp;yt:stretch=16:9&amp;autohide=1&amp;color=red&amp;width=560&amp;width=560"/>
      <p className='paragraph1'>
      </p>
      <h3 className="pageHeader1">
        Intro
      </h3>
      <p className='paragraph1'>
        8-Bit Tron is a highly versatile sequenced synthesizer with an integrated Digital Audio
        workspace that offers users an immersive and educational experience in music production. Created with Pure Data coding environment, the
        instrument boasts four distinct instrument strips that allow for the creation and mixing of
        8-bit style music with ease.
      </p>
      <p className='paragraph1'>
        With 16 notes available in the Chromatic scale, users can
        effortlessly explore their creativity and produce unique compositions. This synthesizer not
        only delivers an enjoyable musical experience but also serves as a tool for
        learning about audio mixing.
      </p>
      <p className='paragraph1'>
        If you'd like to experience this synthesizer for yourself, please visit my <a
        className="inLineLink"
        href="https://github.com/RokasDan/8-Bit-Tron">[GitHub]</a> page.
      </p>

      <h3 className="pageHeader1">
        How To Use
      </h3>

      <p className='paragraph1'>
        When launching the 8-Bit Tron project in the Pure Data Extended coding environment, the
        first step is to activate the DSP to allow the synthesizer to transmit audio to your
        computer's output. Following this, turn up the master volume fader of your chosen instrument
        track - this can also be adjusted later when using the instrument sequencer.
      </p>

      <div className="image-container">
        <img className='imageWrap' src={image1}/>
        <img className='imageWrap2' src={image2}/>
      </div>

      <p className='paragraph1'>
        Once these steps are complete, set the notes you wish to use by accessing the
        16-note matrix of each instrument. There are three melodic instruments available, each
        oscillating different sound waves - Square wave, Sawtooth wave, and Triangle wave - with 6
        note pitches and an additional top note to indicate silence. Additionally, octave control
        offers 5 octaves to experiment with. Once you've selected your notes, hit the Play toggle to
        begin sequencing your composition. Adjacent to the Play button, the tempo speed can be
        adjusted during playback or while the instrument is idle.
      </p>

      <div className="image-container">
        <img className='imageWrap' src={image3}/>
        <img className='imageWrap2' src={image4}/>
      </div>

      <h3 className="pageHeader1">
        Sound Processing
      </h3>

      <p className='paragraph1'>
        The final set of controls enables users to add various effects and perform basic audio
        processing. These include a low and high pass filter, as well as a Band Pass equalizer with
        a resonance setting. Additionally, users can apply a Vibrato effect, adjusting the Rate and
        Vibrato intensity as desired. For those seeking a tremolo effect, it is also available. The
        reverb module offers Dry and Wet sound settings, and users can adjust the
        Reverb Size to their liking. Finally, each instrument channel can be adjusted with the
        Stereo Pan setting.
      </p>
      <div className="image-container2">
        <img className='imageWrap' src={image5}/>
      </div>

      <h3 className="pageHeader1">
        Closing Notes
      </h3>
      <p className='paragraph1'>
        As an individual with a genuine love for audio production, working on this project has been
        a delightful experience for me. The instrument's intuitive design makes it a pleasure to
        use, offering users the freedom to experiment with random notes and uncover a vast array of
        creative possibilities. Additionally, the incorporation of effects adds an extra layer of
        sophistication to the instrument, allowing each channel to be crafted with a unique and
        captivating sound.
      </p>

    </div>
  );
}
export default ReactAudio;
