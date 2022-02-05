import { useState } from 'react';
import './Navigator.css';
import { Link } from 'react-router-dom'

const Navigator = () => {
    // Creating the HTML structure for the object.

    return(
        <header id="move" className="locatorStyle">
            <h1 className="webName">[Rokas.Dan]</h1>
            <nav className="navBar">
                <Link to='/about' id='about' className="buttonStyle-left">{"<"}About{">"}</Link>
                <Link to='/software' id='software' className="buttonStyle">{"<"}Software{">"}</Link>
                <Link to='/audio' id='audio' className="buttonStyle-right">{"<"}Audio{">"}</Link>
            </nav>
        </header>
    );

}
export default Navigator;
