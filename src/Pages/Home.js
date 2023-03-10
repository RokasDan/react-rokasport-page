import { Link, NavLink } from 'react-router-dom'
import './PageStyle.css';
import pdf from "../Content/CV.pdf";
import p from "../Content/Minecraft.txt";

const Home = () => {
  // Page for the About section.

  return(
    <div className="pageStyle">
      <h2 className="pageHeader1">
        Home
      </h2>
      <p className="paragraph">
        Hey there stranger, welcome to my portfolio website! Here you can find a collection of my software and audio projects.
        Please explore my projects using the navigation bar to find the relevant projects you want
        to take a look at.
      </p>

      <p className="paragraph">
        Both software and audio pages will have links which look like <Link to='/' className="inLineLink">[This]</Link>.<br/>
        By using these links you can find more relevant information about a specific
        project. All interactive elements on this website are denoted <br/>
        by the same light blue color and square brackets.
      </p>

      <div className="horizontal">
        <div className="horizontalDiv">
          <h3 className="pageHeader1">
            Contact me at:
          </h3>

          <p className="paragraph">
            Email:&nbsp;&nbsp;rokas108@gmail.com<br/>
            Mobile&nbsp;LT:&nbsp;&nbsp;+37060599192<br/>
            Mobile&nbsp;UK:&nbsp;&nbsp;+447721953057<br/>
          </p>
        </div>

        <div className="horizontalDiv">
          <h3 className="pageHeader1">
            Connect with me:
          </h3>

          <p className="paragraph">
            Link To My <a className="inLineLink"
                          href="https://github.com/RokasDan">[GitHub]</a><br/>
            Link To My <a className="inLineLink"
                          href="https://www.linkedin.com/in/rokas-danevi%C4%8Dius-87a091193/">[LinkedIn]</a><br/>
            Link To My <a className="inLineLink" href={pdf} target="_blank"
                          rel="noreferrer">[CV]</a><br/>
            Link To My <a className="inLineLink"
                          href="https://www.instagram.com/rokas_dan">[Instagram]</a><br/>
            Link To My <a className="inLineLink"
                          href="https://www.facebook.com/rokas.danevicius/">[Facebook]</a><br/>

            Link To My <a className="inLineLink" href={p} target="_blank"
                          rel="noreferrer">[CV]</a><br/>
          </p>
        </div>
      </div>
    </div>
  );
}
export default Home;
