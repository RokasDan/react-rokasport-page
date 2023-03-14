import '../PageStyle.css';

import 'prismjs';
import 'prismjs/themes/prism.css';


import ProjectHeader from "../../Components/ProjectHeader";
import VideoComponent from "../../Components/VideoComponent";
import {CodeBlock} from "../../Components/CodeBlock";
import AudioSimple from "../../Components/AudioSimple";
import AudioSimpleTimer from "../../Components/AudioSimpleTimer";
import {AudioProvider} from '../../Components/AudioState';
import image1 from "../../Pictures/copmain.png";
import image2 from "../../Pictures/copintro.png";
import image3 from "../../Pictures/cophome.png";
import image4 from "../../Pictures/coplist.png";
import image5 from "../../Pictures/coppeople.png";
import image6 from "../../Pictures/copcarsearch.png";
import image7 from "../../Pictures/copcardetails.png";
import image8 from "../../Pictures/copoffence.png";
import image9 from "../../Pictures/copreport.png";
import image10 from "../../Pictures/copmakereport.png";
import image11 from "../../Pictures/copnew.png";
import image12 from "../../Pictures/copnew2.png";

const TrafficPolice = () => {
  // Page for Traffic Police project.

  return (
    <div className="pageStyle">
      <ProjectHeader projectName='Traffic police' date='2021-06-07'/>

      <div className="pictureWrapper1">
        <img className="projectIcon" src={image1}/>
      </div>

      <h3 className="pageHeader1">
        Intro
      </h3>

      <p className='paragraph1'>
        Traffic Police is a web application that emulates a professional traffic police database,
        enabling users to search for offenders and create detailed reports as if they were law
        enforcement officers. The website was developed using HTML, CSS, and PHP, and the database
        was designed using MySQL Workbench.
      </p>
      <p className="paragraph1">
        As part of my Master's degree in Computer Science program at Nottingham University, I
        developed this project. If you would like to try it out for yourself, please visit my <a
        className="inLineLink"
        href="https://github.com/RokasDan">[GitHub]</a> page.
      </p>

      <h3 className="pageHeader1">
        User Login
      </h3>

      <p className='paragraph1'>
        Upon launching the Traffic Police web application, users are presented with two distinct
        login options: one for regular police officers and the other for police administrators.
        While officer and administrator profiles share many similarities, administrators are
        equipped with additional functionality, enabling them to edit reports created by other
        officers and administrators. Additionally admins also can create new accounts for officers
        and new administrators.
      </p>

      <p className='paragraph1'>
        To distinguish between the two account types, admin accounts
        are presented with a distinct dark orange background, while officer accounts are presented
        with a blue background.
      </p>

      <div className="image-container2">
        <img className='imageWrap' src={image2}/>
      </div>

      <h3 className="pageHeader1">
        Home Menu
      </h3>

      <p className='paragraph1'>
        The primary menu offers a diverse range of functionalities, catering to various user needs.
        In this menu, users have the ability to modify their password, access a comprehensive
        directory of individuals associated with reports, and peruse an inventory of vehicles
        implicated in incidents. Moreover, users can consult a list of potential offenses alongside
        their respective definitions. Finally, the menu provides the option to search for a specific
        report or initiate the creation of a new report pertaining to a traffic-related event.
      </p>

      <div className="image-container2">
        <img className='imageWrap' src={image3}/>
      </div>

      <h3 className="pageHeader1">
        People Search
      </h3>
      <p className='paragraph1'>
        The People search menu allows users to locate individuals by entering their driver's license
        number or name. Based on the search query entered in the menu, the system generates a list
        of one or more search results. Each result in the list is accompanied by a link that
        redirects the user to a more comprehensive profile page for the individual in question. The
        profile page provides detailed information about the person, including any vehicles
        associated with them, if applicable.
      </p>

      <div className="image-container">
        <img className='imageWrap' src={image4}/>
        <img className='imageWrap2' src={image5}/>
      </div>

      <h3 className="pageHeader1">
        Vehicle Search
      </h3>
      <p className='paragraph1'>
        Similarly to the People search functionality, users can also obtain information about
        vehicles through the platform's vehicle search feature. By entering either a partial or full
        vehicle number plate, the system generates a list of relevant search results. Users can
        select a specific vehicle from the list to access detailed information, including the make
        and model, color, and ownership status.
      </p>

      <div className="image-container">
        <img className='imageWrap' src={image6}/>
        <img className='imageWrap2' src={image7}/>
      </div>

      <h3 className="pageHeader1">
        Offence List
      </h3>
      <p className='paragraph1'>
        The Offense Lists feature provides users with a comprehensive directory of offenses that
        officers can include in their reports. Upon accessing this menu, users are presented with a
        complete list of offenses. By selecting the "view" button, users can obtain more detailed
        information about each offense, including the maximum possible fine and the number of
        license points that a driver may lose as a result of the offense.
      </p>

      <div className="image-container2">
        <img className='imageWrap' src={image8}/>
      </div>

      <h3 className="pageHeader1">
        Report Search
      </h3>

      <p className='paragraph1'>
        The Report search menu offers a convenient way for users to locate reports submitted by
        fellow officers or administrators. By simply inputting search criteria such as car number
        plate, name, license number or report date, the user can easily retrieve a list of relevant
        reports. Once the list is generated, the user can select a particular report of interest and
        obtain more information by clicking the "view" button. This action will display additional
        details about the offense, issued penalties, as well as information about the offender and
        their vehicle. For users with Admin privileges, they can further modify report details and
        penalties by selecting the green hash tag buttons located next to the relevant fields.
      </p>
      <div className="image-container2">
        <img className='imageWrap' src={image9}/>
      </div>

      <h3 className="pageHeader1">
        Create Report Menu
      </h3>
      <p className='paragraph1'>
        The Create Report menu enables officers and administrators to easily generate reports. Users
        can select a person and vehicle from the police database to include in the report, then
        choose an offense from the list of available options. Next, the user can specify the date of
        the offense and provide a detailed description of the incident in question.
      </p>

      <div className="image-container2">
        <img className='imageWrap' src={image10}/>
      </div>

      <p className='paragraph1'>
        In the event that the person or vehicle involved in the incident is not found in the police
        database, the Create Report menu provides a convenient option for the user to add the
        necessary information. This includes entering the offender's details as well as adding a new
        vehicle to the database. Once the new additions have been added to the database, the user
        can easily return to the Create Report menu to complete the report with all the relevant
        information.
      </p>

      <div className="image-container">
        <img className='imageWrap' src={image11}/>
        <img className='imageWrap2' src={image12}/>
      </div>

      <h3 className="pageHeader1">
        Closing Notes
      </h3>

      <p className='paragraph1'>
        In conclusion, this project was a challenging yet rewarding experience for me. Prior to this
        project, I had not incorporated a database into a web application before. It was interesting
        to learn how MySQL can be used to create relationships and store data, and then be queried for
        use on a website. Through this project, I have gained a deeper understanding of database
        management and its importance in developing web applications.
      </p>

    </div>
  );
}
export default TrafficPolice;
