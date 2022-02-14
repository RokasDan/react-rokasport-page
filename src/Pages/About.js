import './PageStyle.css';
import pdf from "../Content/CV.pdf";
import profile from "../Pictures/Profile.jpg"
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
        I recently graduated from the University Of Nottingham with a Masters of Computer science.
        Now I am software developer who currently has strong interest in virtual reality technology
        and audio. My most recent projects involve me developing VR and other 3D games using Unity
        game engine and C# coding environment. You can try my projects your self by visiting
        my <a className="inLineLink" href="https://github.com/RokasDan">[GitHub]</a> page.
      </p>

      <div className="pictureWrapper2">
        <img className="singlePicture" src={picture} alt="VR game Picture"/>
      </div>

      <p className="paragraph">
        I also have recently discovered my affinity for front-end development. My primary
        tools for such development are HTML, CSS and JS. However, I have fallen in love
        with the well known React.js library which I now mostly use for website and app
        development. Additionally, I also have skills with developing back-end for websites.
        I can create MySQL databases and make them communicate with websites using JS or
        PHP coding languages.
      </p>

      <p className="paragraph">
        As mentioned before, I love making music and working on audio projects. I often like
        to help independent artists to record their music and produce music for bands and singers.
        I also make my own music which mostly consist of Indie or Alternative rock genres.
        I especially like to mix alternative rock sounds with folk and classical orchestra music. I
        also like like to dabble with 80's synth sounds and mix them with Indie or Alternative music
        genres. My current favorite music artists are Kishi Bashi, Sleeping At Last and Bombay
        Bicycle Club.
      </p>

      <p className="paragraph">
        Finally, for my free-time hobbies I love making Astrophotography. I also have big heart for
        nature and because of this reason I often take many nature land scape photos as-well. You
        can find my photography on my <a className="inLineLink"
                                         href="https://www.instagram.com/rokas_dan">[Instagram]</a> and <a
        className="inLineLink"
        href="https://www.facebook.com/rokas.danevicius/">[Facebook]</a> pages.
      </p>

      <div className="picturesWrapper3">
        <img className="singlePicture" src={picture1} alt="Astro Picture1"/>
        <img className="singlePicture" src={picture2} alt="Astro Picture2"/>
      </div>

      <div className="horizontal">
        <div className="horizontalDiv">
          <h3 className="pageHeader1">
            Contact
          </h3>

          <p className="paragraph">
            Email:&nbsp;&nbsp;rokas108@gmail.com<br/>
            Mobile:&nbsp;&nbsp;+447721953057<br/>
          </p>
        </div>

        <div className="horizontalDiv">
          <h3 className="pageHeader1">
            Links
          </h3>

          <p className="paragraph">
            Link To My <a className="inLineLink"
                          href="https://github.com/RokasDan">[GitHub]</a><br/>
            Link To My <a className="inLineLink" href={pdf} target="_blank"
                          rel="noreferrer">[CV]</a><br/>
            Link To My <a className="inLineLink"
                          href="https://www.youtube.com/user/Rokas108/videos">[Youtube]</a><br/>
            Link To My <a className="inLineLink"
                          href="https://www.instagram.com/rokas_dan">[Instagram]</a><br/>
            Link To My <a className="inLineLink"
                          href="https://www.facebook.com/rokas.danevicius/">[Facebook]</a><br/>
          </p>
        </div>
      </div>
    </div>


  );
}
export default About;
