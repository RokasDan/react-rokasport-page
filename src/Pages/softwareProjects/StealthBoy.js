import '../PageStyle.css';

import 'prismjs';
import 'prismjs/themes/prism.css';


import ProjectHeader from "../../Components/ProjectHeader";
import VideoComponent from "../../Components/VideoComponent";
import {CodeBlock} from "../../Components/CodeBlock";
import image1 from "../../Pictures/stealthboyfinishpng.png";
import image2 from "../../Pictures/stealthboybossfight.png";
import image3 from "../../Pictures/Stealthboyred.png";
import image4 from "../../Pictures/Stealthboygreen.png";
import image5 from "../../Pictures/Stealthboywhite.png";
import image6 from "../../Pictures/Stealthboydoorkey.png";
import image7 from "../../Pictures/Runner.png";
import image8 from "../../Pictures/Gunner.png";
import image9 from "../../Pictures/Turret.png";
import image10 from "../../Pictures/Boss.png";

const codeString = `private void UpdateRotation()
    {
        // Tracking where the mouse is on the screen of the game. According to the mouse position we rotate
        // the player on the horizontal axis towards the mouse position.
        var playerTransform = transform;
        var playerPosition = playerTransform.position;

        var cameraPosition = cam.transform.position;

        var playerDistance = Vector3.Distance(cameraPosition, playerPosition);
        var mousePosition = new Vector3(Input.mousePosition.x, Input.mousePosition.y, playerDistance);

        var worldPosition = cam.ScreenToWorldPoint(mousePosition);
        worldPosition.y = playerPosition.y;

        var lookDirection = (worldPosition - playerPosition).normalized;
        var lookRotation = Quaternion.LookRotation(lookDirection);

        playerTransform.rotation = lookRotation;
    }`

const StealthBoy = () => {
  // Page for StealthBoy project.

  return (
    <div className="pageStyle">

      <ProjectHeader projectName='Stealth Boy' date='2022-01-14'/>

      <VideoComponent
        src="https://www.youtube.com/embed/KGhloxp82pM?ecver=1&amp;iv_load_policy=3&amp;rel=0&amp;showinfo=0&amp;yt:stretch=16:9&amp;autohide=1&amp;color=red&amp;width=560&amp;width=560"/>
      <p className='paragraph1'>
      </p>

      <h3 className="pageHeader1">
        Intro
      </h3>

      <p className='paragraph1'>
        During my time studying computer science at Nottingham University, I had the opportunity to
        flex my creativity by developing a video game prototype using Unity3D. The result was
        Stealth Boy game prototype, a thrilling third-person stealth and platformer. As players
        navigate through multiple levels, they must
        exercise caution and stealthily move to avoid detection, all while
        solving intricate puzzles that unlock new areas and opportunities for progress. With the
        stakes always high, players must use their cunning and wit to stealthily deploy their sharp
        knife
        weapon before they're detected by the ever-watchful enemy. And should they be discovered,
        players must quickly move and hide before trying to make their next move!
      </p>

      <p className='paragraph1'>
        If you wish to try out the prototype your self please find the source on my <a className="inLineLink"
                                                                                       href="https://github.com/RokasDan">[GitHub]</a>.
      </p>

      <h3 className="pageHeader1">
        The Main Objective
      </h3>

      <p className='paragraph1'>
        In Stealth Boy, players must guide the game's protagonist through multiple levels by dodging
        enemies and carrying door keys to reach the safety of the red finish tile at
        the end of each level. The stakes are high, as a single misstep or a few enemy hits will
        require
        players to restart the level from scratch. As players progress through the game, they'll
        unlock new levels and challenges, culminating in a thrilling boss fight in the game's final
        level.
      </p>

      <div className="image-container">
        <img className='imageWrap' src={image6}/>
        <img className='imageWrap2' src={image1}/>
      </div>

      <h3 className="pageHeader1">
        Main Mechanic
      </h3>
      <p className='paragraph1'>
        Stealth Boy incorporates several simple yet essential game mechanics, including basic
        movement, knife attacks, and item carrying. But the true centerpiece of the
        game is the stealth mechanic, which is at the core of every level and encounter. Players
        must navigate through each level undetected by enemies, evading their attacks and staying
        out of sight to progress to the next stage. Enemy detection is indicated by a red light
        hanging over the player, while successful evasion is represented by a green light. Finally
        when players a clear to move a white light will show above the player.
      </p>
      <div className="image-container">
        <img className='imageWrap' src={image3}/>
        <img className='imageWrap4' src={image4}/>
        <img className='imageWrap2' src={image5}/>
      </div>
      <p className='paragraph1'>
        Additionally, the stealth mechanic is more than just avoiding detection; it plays a
        crucial role in combat and item management, adding a layer of depth to the gameplay. If the
        player is detected before attacking, they'll lose their ability to fight and be forced to
        retreat until they can find a new opportunity. Similarly, carrying items becomes riskier
        when enemies are nearby, as players must carefully plan their routes and timing to avoid
        detection, or risk dropping the item and losing it altogether.
      </p>

      <h3 className="pageHeader1">
        Enemy AI
      </h3>
      <p className='paragraph1'>
        The enemy AI in my stealth boy game is
        my first foray into the world of AI development.
        Although the AI system is straightforward, it utilizes the Unity's Navmesh for
        pathfinding. To detect the presence of the player, the system employs Unity
        Physics.CheckSphere to determine if they are within the enemy's view range and field of
        view. If the player
        is within view, the system then conducts a Unity Physics.Raycast to verify that there are no
        obstructions impeding the enemy's line of sight to the player. Once it confirms that there
        are no barriers, the enemy is considered to have detected the player, and it starts to move
        towards
        them along the best available path.
      </p>

      <p className='paragraph1'>
        The Enemy AI has three distinct states of operation. The initial
        stage is the patrol phase, where the enemy moves along a simple waypoint system. Depending
        on the enemy type, the character will either follow the optimal path to the next waypoint or
        rotate between two points if it is a stationary enemy. Once the player is detected, the AI
        enters the engage state. This will move the enemy towards the player's position
        and attack them. The final state is the search phase, which
        activates when the player leaves the enemy's line of sight. During this phase, the enemy
        moves or rotates towards the player's last known location. If the player is not spotted
        again after a certain period, the AI returns to its initial patrol state.
      </p>

      <VideoComponent
        src="https://www.youtube.com/embed/-KIOlfUTy1g?ecver=1&amp;iv_load_policy=3&amp;rel=0&amp;yt:stretch=16:9&amp;autohide=1&amp;color=red&amp;width=560&amp;width=560"/>
      <p className='paragraph1'></p>

      <h3 className="pageHeader1">
        Enemy Types
      </h3>
      <p className='paragraph1'>
        In the game enemies come in four different types, each with unique characteristics. The
        first type is the runner enemy, easily recognizable by its red
        color, cube shape, and deadly spike. These enemies charge at the player with their sharp
        weapon, forcing the player to react quickly. Fortunately, a single hit from the player is
        enough to take them down.
      </p>

      <p className='paragraph1'>
        The second type, the gunner enemy, is a yellow rectangular shape that not only chases the
        player but also shoots at them. If hit by this enemy three times, the player is defeated.
        To defeat this enemy it takes three hits from the player.
      </p>

      <div className="image-container">
        <img className='imageWrap' src={image7}/>
        <img className='imageWrap2' src={image8}/>
      </div>

      <p className='paragraph1'>
        The third type is the turret enemy, characterized by its blue color and cylinder shape.
        Stationary and only rotating to the spotted player, this enemy attacks the player with slow
        rockets. The rockets' exploding radius is fatal to the player. The player cannot defeat this
        enemy type an can only avoid its detection and attacks.
      </p>

      <p className='paragraph1'>
        Lastly, the final and most challenging enemy type is the boss enemy. Encountered only in the
        final level, this enemy is similar in appearance to the turret enemy but is painted in a
        red color and has the added challenge of mobility. The boss enemy attacks the
        player with both turret rockets and gunner enemy weapons, making it much harder to avoid.
        With a much larger health bar than the other enemies, players must hit it multiple times to
        defeat it.
      </p>

      <div className="image-container">
        <img className='imageWrap' src={image9}/>
        <img className='imageWrap2' src={image10}/>
      </div>
      <h3 className="pageHeader1">
        Third Person Camera
      </h3>
      <p className='paragraph1'>
        When I developed this game, I decided to create the third-person view without using external
        packages like cinemachine. Instead, I opted to design the view myself. Since this was my
        first time creating a third-person camera for a game, I encountered some difficulties when
        rotating the player to the position of my mouse. The player would turn too quickly or tilted
        when it wasn't supposed to. To overcome this issue, I projected my
        mouse position onto the world Y plane, and the result was much smoother camera movement and
        more precise player orientation.
      </p>

      <CodeBlock codeString={codeString} language="csharp"/>

      <h3 className="pageHeader1">
        Closing Notes
      </h3>

      <p className='paragraph1'>
        In conclusion, I am extremely satisfied with the development of the Stealth Boy prototype.
        As my first attempt at creating a 3D game, I believe it is a polished prototype with solid
        enemy AI. I found the process of designing and creating different enemy types and their
        paths to be an enjoyable and engaging experience. The game's level of difficulty is balanced
        and provides a challenging yet enjoyable experience for players. Overall, I am proud of what
        I have accomplished with this prototype, and I am excited to continue honing my game
        development skills in future projects.
      </p>

    </div>
  );
}
export default StealthBoy;
