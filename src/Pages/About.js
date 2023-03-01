import './PageStyle.css';
import pdf from "../Content/CV.pdf";
import profile from "../Pictures/Profile.jpg"
import { Link } from 'react-router-dom'
import picture from "../Pictures/Game.png"
import picture1 from "../Pictures/Astro1.jpg"
import picture2 from "../Pictures/Astro2.jpg"

const About = () => {
  // Page for the About section.

  return (
    <div className="pageStyle">

      <div className="pictureWrapper1">
        <img className="profilePicture" src={profile} alt="Profile Picture"/>
        <h3 className="pictureNote">Hello, my name is Rokas Danevičius!</h3>
      </div>
      <p className="paragraph">
        I am Software Engineer who is passionate about creating engaging apps, games and Virtual
        Reality experiences. I have a background in both software engineering and music
        technology. My interest in coding started when I developed a few virtual synthesizers
        while studying music technology. I found it surprisingly enjoyable and decided to pursue
        it further by studying Computer Science masters at Nottingham University.
      </p>

      <p className="paragraph">
        During my studies, I had the opportunity to take courses in game development and mixed
        reality, where I discovered my interest in creating 3D projects using Unity3D. Since then,
        I have been honing my skills and exploring the possibilities of interactive 3D
        applications, virtual reality simulations, and video games.
      </p>

      <p className="paragraph">
        In addition, I'm interested in expanding my knowledge of other coding practices, such as
        React, and front-end development for websites. Ultimately, I hope to continue growing as a
        developer and to share my passion for software engineering with others.
      </p>

      <p className="paragraph">
        To get in touch, please find my contact information at my <Link className="inLineLink"
                                                                     to="/">[Home]</Link><br/> page.
      </p>
    </div>
  );
}
export default About;
