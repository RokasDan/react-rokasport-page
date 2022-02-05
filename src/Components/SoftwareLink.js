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
            <article>
                <header className='projectDate'>
                    <h2 className="header3">{"<"}<Link className="linkStyle" to={link}>{name}</Link>{">"}</h2>
                     <time className="paragraph">Date {date}</time>
                </header>
                <p className="paragraph">{description}</p>
            </article>
        </div>
    );
}
export default SoftwareLink;
