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

      <SoftwareLink projectName='Nottcraft' link='/Nottcraft' date='2023-03-06' description='
      Nottingham City in Minecraft: Explore a 1:1 scale replica of Nottingham using real-life
      coordinates, generated using LiDAR data sets.'/>

      <SoftwareLink projectName='Trolley VR' link='/TrolleyVr' date='2022-08-11' description='
      A multiplayer virtual reality game which recreates multiple variants of the famous trolley dilemma.
      Project is made with Unity3D and C#.'/>

      <SoftwareLink projectName='Stealth Boy' link='/StealthBoy' date='2022-02-14' description='
      A third person stealth platformer game prototype made with Unity3D and C#.'/>

      <SoftwareLink projectName='PyFighter' link='/Pyfighter' date='2022-01-02' description='
      A 2D side-scroll platforming fighting game made with Python coding environment and PyGame library.'/>

      <SoftwareLink projectName='React Audio Player' link='/ReactAudio' date='2021-11-17' description='
      Developed a customisable React audio player with multiple instance per page support.'/>

      <SoftwareLink projectName='8-Bit Tron' link='/BitTron' date='2021-08-11' description='
      A 16 note sequenced synthesizer with a miniature digital audio workstation made with Pure Data
      visual coding environment.'/>

      <SoftwareLink projectName='Traffic Police' link='/TrafficPolice' date='2021-06-07' description='
      A website with MySQL database which imitates a "Traffic Police" report system. This project
      was made using HTML, CSS, PHP and MySQL.'/>
    </div>
  );
}
export default Software;
