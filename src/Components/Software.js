
import './PageStyle.css';
import './SoftwareLink'
import SoftwareLink from "./SoftwareLink";

const Software = () => {
    // Page for the software projects.

    return(
        <div className="pageStyle">
            <h2 className="pageHeader1">
                Software
            </h2>
            <p className="paragraph">
                Moree skoooptyidy Poootidity
                ADASDASD
                asdasdsad
                asdasdasd
                asdasdasdasdasd
                asdasdasd
                asdasdads
                asdasdsad

                asdasdasd
                asdasdasd
            </p>

            <SoftwareLink projectName='RandomName' link='/audio' date='1111-11-11' description='This is a random
            project that nobody cares about'/>
        </div>
    );
}
export default Software;
