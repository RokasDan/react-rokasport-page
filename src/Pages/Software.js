import './PageStyle.css';
import '../Components/SoftwareLink'
import SoftwareLink from "../Components/SoftwareLink";

const Software = () => {
  // Page for the software projects.

  return (
    <div className="pageStyle">
      <h2 className="pageHeader1">
        Software
      </h2>
      <p className="paragraph">
        Here you will find my software projects. Click on the links to find out more.
      </p>

      <SoftwareLink projectName='Trolley VR' link='/audio' date='Currently Working On' description='
      A multiplayer virtual reality game which recreates multiple variants of the famous trolley dilemma.
      Project is made with Unity3D and C#.'/>

      <SoftwareLink projectName='React Audio Player' link='/audio' date='2022-02-08' description='
      A customisable react.js audio player which can have multiple instances on one page.'/>

      <SoftwareLink projectName='Stealth Boy' link='/audio' date='2021-09-26' description='
      A third person stealth platformer game made with Unity3D and C#.'/>

      <SoftwareLink projectName='PyFighter' link='/audio' date='2021-07-12' description='
      A 2D side-scroll platforming fighting game made with Python coding environment.'/>

      <SoftwareLink projectName='8-Bit Tron' link='/audio' date='2021-06-03' description='
      A 16 note sequenced synthesizer with a miniature digital audio workstation made with Pure Data
      visual coding environment.'/>

      <SoftwareLink projectName='Traffic Police' link='/audio' date='2021-04-07' description='
      A website with MySQL database which imitates a "Traffic Police" report system. This project
      was made using HTML, CSS, PHP and MySQL.'/>

      <SoftwareLink projectName='Color To Sound' link='/audio' date='2020-03-21' description='
      A musical instrument which plays specific chords and drones according to a color being scanned.
      This project was made using Arduino systems and Java coding environment.'/>
    </div>
  );
}
export default Software;
