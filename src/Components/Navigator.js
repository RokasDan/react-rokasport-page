import {useState} from 'react';
import './Navigator.css';
import {Link, NavLink} from 'react-router-dom'

const Navigator = () => {
  // Creating the HTML structure for the object.

  return (<header id="move" className="locatorStyle">
    <h1 className="webName"><Link to='/' className="headerLink">[Rokas.Dan]</Link></h1>
    <nav className="navBar">
      <NavLink
        to='/about'
        id='about'
        className={({isActive}) => {
          return `buttonStyle ${isActive ? 'active' : ''}`
        }}
      >
        About
      </NavLink>
      <NavLink
        to='/software'
        id='software'
        className={({isActive}) => {
          return `buttonStyle ${isActive ? 'active' : ''}`
        }}
      >
        Software
      </NavLink>
      <NavLink
        to='/audio'
        id='audio'
        className={({isActive}) => {
          return `buttonStyle ${isActive ? 'active' : ''}`
        }}
      >
        Audio
      </NavLink>
    </nav>
  </header>);

}
export default Navigator;
