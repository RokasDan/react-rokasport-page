import '../PageStyle.css';

import 'prismjs';
import 'prismjs/themes/prism.css';


import ProjectHeader from "../../Components/ProjectHeader";
import VideoComponent from "../../Components/VideoComponent";
import AudioSimple from "../../Components/AudioSimple";
import {AudioProvider} from '../../Components/AudioState';

import image1 from "../../Pictures/lobby.png";
import image2 from "../../Pictures/stickman.png";
import image3 from "../../Pictures/Train.png";
import image4 from "../../Pictures/blood.png";
import image5 from "../../Pictures/explode.png";
import pdf from "../../Content/Thesis.pdf";


const TrolleyVr = () => {
  // Page for Nottcraft project.

  return (
    <div className="pageStyle">

      <ProjectHeader projectName='Trolley VR' date='2022-08-11'/>

      <VideoComponent
        src="https://www.youtube.com/embed/cBmWNC8s92g?ecver=1&amp;iv_load_policy=3&amp;rel=0&amp;showinfo=0&amp;yt:stretch=16:9&amp;autohide=1&amp;color=red&amp;width=560&amp;width=560"/>

      <p className='paragraph1'>
      </p>
      <h3 className="pageHeader1">
        Intro
      </h3>

      <p className='paragraph1'>
        Trolley VR is a multiplayer virtual reality game that explores variations of the well known
        "embodied
        trolley" dilemma. Using VR technology, players are immersed in ethical scenarios and must
        make critical decisions with significant consequences. Trolley VR aims to investigate
        whether VR's immersive visuals and sensory experiences can influence ethical
        decision-making.
      </p>

      <p className='paragraph1'>
        Trolley VR features a range of thought-provoking scenarios, each with its unique time
        pressure element as a train approaches the dilemma's potential victims. The game's
        multiplayer also includes a peer-pressure element, as two players work together to
        decide on the most ethical choice based on the particular variation of the trolley dilemma.
      </p>

      <p className='paragraph1'>
        The project was exhibited at Nottingham Contemporary Museum and covered by Notts TV news.
        For academic findings, please see the thesis available <a className="inLineLink" href={pdf} target="_blank"
                                                                  rel="noreferrer">[here]</a>.
        If you wish to try this project out your self, you can download the game from my<a
        className="inLineLink"
        href="https://drive.google.com/drive/folders/1yxx3i8Xg55WfdQcg9SXNvuuf6v0L-4nZ?usp=share_link">[Google Drive]</a>.
      </p>

      <VideoComponent
        src="https://www.youtube.com/embed/aIUeJZk5_bs?ecver=1&amp;iv_load_policy=3&amp;rel=0&amp;showinfo=0&amp;yt:stretch=16:9&amp;autohide=1&amp;color=red&amp;width=560&amp;width=560"/>
      <p className='paragraph1'>
      </p>

      <h3 className="pageHeader1">
        Use of Unity
      </h3>

      <p className='paragraph1'>
        For this project, I
        opted to use Unity3D due to its familiarity and the abundance of VR development tools
        available, such as the Unity XR Interaction Toolkit and Oculus SDK.
      </p>

      <p className='paragraph1'>
        While I initially
        considered using the Oculus SDK, I found it to be limiting in terms of control bindings and
        compatibility issues across different VR platforms. As a result, I chose to use the Unity XR
        Interaction Toolkit, which allowed me to create VR interactions that were better mapped
        with different VR headsets. I tested the game on the Oculus Quest 2 and 1, as well as the
        HTC Vive, and encountered no issues. However, I have yet to test it with other headsets,
        such as the Valve Index by Steam, and cannot confirm the compatibility of the game with
        these devices.
      </p>

      <h3 className="pageHeader1">
        Multiplayer Functionality
      </h3>

      <p className='paragraph1'>
        To create the multiplayer component of Trolley VR, I opted to use the Photon Pun Engine.
        This was because an online multiplayer setup was essential for the live event that
        Nottingham University planned to hold for this project. A LAN option would have required
        extensive resources such as portable computers, as most headsets lack a LAN capability.
        Additionally, I wanted to ensure that players were unrestricted by wires while playing.
        Photon Pun Engine provided a perfect solution, as they offer a free server for transmitting
        data between game clients. The engine also has a user-friendly API, which made it easy for
        me to set up Photon Pun with my Unity project.
      </p>

      <p className='paragraph1'>
        With the use of Photon PUN engine I implemented a lobby system, allowing
        players to create or join a lobby by entering a number into a keypad provided by the
        multiplayer menu. If the lobby number doesn't exist, the player automatically creates a
        lobby with that specific number and another player can join it using the same number.
      </p>

      <div className="image-container2">
        <img className='imageWrap' src={image1}/>
      </div>

      <p className='paragraph1'>
        Once two players have joined the lobby, they can start the game and interact with each other
        in real-time. The game allows players to see and interact with various objects, and the
        outcome of the dilemma can be influenced by the other player's actions depending on the
        dilemma
        variant. While Photon Pun Engine was used to transmit game data, voice chat capability was
        not implemented. This decision was made since players were expected to be in the same room
        during the project research, allowing them to communicate with each other in real-time
        and creating a more intense peer pressure effect during gameplay.
      </p>

      <h3 className="pageHeader1">
        Visual Design
      </h3>

      <p className='paragraph1'>
        Given that the project involves a dilemma where potential victims may die, it was crucial to
        choose appropriate visual effects and models that would not expose players to potentially
        traumatizing scenes. To address this concern, a low-poly aesthetic was chosen for the game.
        Although this style is not particularly realistic, it is effective in allowing players to
        emotionally connect with the dilemma without exposing them to graphic violence. Furthermore,
        the low level of detail in the models of victim characters allows players to use their
        imagination to create a description for the victims.
      </p>
      <div className="image-container">
        <img className='imageWrap' src={image2}/>
        <img className='imageWrap2' src={image3}/>
      </div>
      <p className='paragraph1'>
        For effects such as blood or explosions, I opted to use simple colored cubes. These
        were ideal because their low-poly aesthetic complemented the overall look of the game, and
        the color of the cube provided enough information for players to understand what material it
        was supposed to represent without being too shocking.
      </p>
      <div className="image-container">
        <img className='imageWrap' src={image4}/>
        <img className='imageWrap2' src={image5}/>
      </div>

      <h3 className="pageHeader1">
        Audio Design
      </h3>

      <p className='paragraph1'>
        I also considered the audio design, particularly for when the dilemmas reached their
        outcomes after a player's choice. Since the visual design is relatively simplistic, I aimed
        to balance this by using audio that would provide a more realistic response to the dilemma.
      </p>

      <p className='paragraph1'>
        For instance, when a train is approaching a victim, the victim will start screaming and
        pleading for
        their life. Furthermore, visual effects such as blood splattering or explosions are
        accompanied by sound effects which aim to be as close to their real sound as possible.
        Below are some
        of the audio effects used in the game:
      </p>

      <AudioProvider>
        <AudioSimple id="1" to='/' link="/audio/Scream.mp3"
                     description="Victim scream example."/>
        <AudioSimple id="2" to='/' link="/audio/LargeMan.mp3"
                     description="Large man pleading example."/>
        <AudioSimple id="3" to='/' link="/audio/Blood.mp3"
                     description="Blood impact example."/>
        <AudioSimple id="4" to='/' link="/audio/TrainExplode.mp3"
                     description="Train explosion example."/>
      </AudioProvider>

      <h3 className="pageHeader1">
        Closing notes
      </h3>

      <p className='paragraph1'>
        This project was a significant milestone for me, as it not only served as my Master's thesis
        but also earned further funding for its expansion. Ultimately, the project was showcased at
        Nottingham Contemporary Museum, which was a remarkable accomplishment. However, the most
        rewarding aspect for me was observing people play the virtual reality game and navigate
        through the dilemmas together. Witnessing the players' unexpected interactions and choices
        was truly fascinating, and the accompanying study revealed some intriguing results.
      </p>

    </div>
  );
}
export default TrolleyVr;
