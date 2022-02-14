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
      A multiplayer virtual reality game which recreates multiple variants of the famous trolley dilemma.'/>

      <SoftwareLink projectName='React Audio Player' link='/audio' date='2022-02-08' description='
      A customisable react.js audio player which can have multiple instances on one page.'/>

      <SoftwareLink projectName='Stealth Boy' link='/audio' date='2021-09-26' description='
      A third person stealth platformer game made with Unity3D.'/>

      <SoftwareLink projectName='PyFighter' link='/audio' date='2021-07-12' description='
      A 2D game side-scroll platformer game where you fight the Computer Science school teachers
      from University of Nottingham.'/>


    </div>
  );
}
export default Software;
