import './SoftwareLink.css'
import { Link } from 'react-router-dom'

const SoftwareLink = (props) => {
    // A component which can be used to link the software pages
    // This should have Project name, short description
    // and the date of the project.

    const name = props.projectName;
    const link = props.link;
    const date = props.date;
    const description = props.description;

    return(
        <div className='SoftwareLink'>

                <header className="spacing">
                  <h3 className="linkHeader"><Link className="linkStyle" to={link}>{"["}{name}{"]"}</Link></h3>
                     <p className="dateStyle">Posted: {date}</p>
                </header>
                <p className="description2">{description}</p>

        </div>
    );
}
export default SoftwareLink;
