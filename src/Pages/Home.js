import { Link, NavLink } from 'react-router-dom'
import './PageStyle.css';
import pdf from "../Content/CV.pdf";

const Home = () => {
  // Page for the About section.

  return(
    <div className="pageStyle">
      <h2 className="pageHeader1">
        Home
      </h2>
      <p className="paragraph">
        This is my portfolio website where I post my software and audio projects.
        Please use the navigation bar to find the relevant projects you want
        to take a look at.
      </p>

      <p className="paragraph">
        Both software and audio pages will have links which look like <Link to='/' className="inLineLink">[This]</Link>.<br/>
        By using these links you can find more relevant information about a specific
        project. Other interactable elements in this website will have same light blue color and
        square brackets placed around them.
      </p>

      <p className="paragraph">
        There is also page a about me were you can find my information about me and my hobbies!
      </p>

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
export default Home;
