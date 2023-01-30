import * as React from 'react';
import { useState } from 'react';
import { MdCall, MdLocationOn, MdHome, MdRsvp } from 'react-icons/md'
import './Navbar.css'

const Navbar = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><MdHome /></a>
      <a href="#rsvp" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><MdRsvp /></a>
      <a href="#call" onClick={() => setActiveNav('#skills')} className={activeNav === '#skills' ? 'active' : ''}><MdCall /></a>
      <a href="#location" onClick={() => setActiveNav('#projects')} className={activeNav === '#projects' ? 'active' : ''}><MdLocationOn /></a>
    </nav>
  )
}

export default Navbar;