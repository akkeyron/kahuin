import * as React from 'react';
import { useState } from 'react';
import { MdCall, MdLocationOn, MdHome, MdRsvp } from 'react-icons/md'
import './Navbar.css'
// nav icons
import { TfiArrowCircleDown, TfiArrowCircleUp } from 'react-icons/tfi'

const Navbar = (endPage) => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <div href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><TfiArrowCircleDown /></div>
      <div href="#rsvp" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><TfiArrowCircleUp /></div>
    </nav>
  )
}

export default Navbar;