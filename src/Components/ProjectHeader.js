import './ProjectHeader.css'

const SoftwareLink = (props) => {
  // A component which can be used to link the software pages
  // This should have Project name, short description
  // and the date of the project.

  const name = props.projectName;
  const date = props.date;

  return(
    <div className='projectHeader'>

      <header className='spacing'>
        <h2 className="naming">{name}</h2>
        <p className="dateStyle">Posted: {date}</p>
      </header>
    </div>
  );
}
export default SoftwareLink;
