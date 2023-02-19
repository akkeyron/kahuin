import * as React from 'react';
import { useState, useRef, useEffect } from 'react';
import { MdCall, MdLocationOn, MdHome, MdRsvp } from 'react-icons/md'
import { TfiLocationPin } from 'react-icons/tfi'
import './Navbar.css'
// nav icons
import { TfiArrowCircleDown, TfiArrowCircleUp } from 'react-icons/tfi'
import { SlVolume2, SlVolumeOff } from 'react-icons/sl'
import { RxHamburgerMenu } from 'react-icons/rx'
import { SlEnvolope } from 'react-icons/sl'
import { HiOutlinePencilSquare } from 'react-icons/hi2'


const Navbar = (props) => {
  const [volume, setVolume] = useState(true);
  const currentPage = useRef(0);
  const [menuPopup, setMenuPopup] = useState(false);
  const paperRef = props.paperRef;
  const dropdownRef = useRef(null);
  const maxLocation = props.maxPage;

  // if user clicked outside of the dropdown close it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setMenuPopup(false);
      }
    };
    
    // add event listener to close dropdown when click outside
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // cleanup
      console.log('cleanup');
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);


  function handleNext() {
    if (currentPage.current >= maxLocation) return;


    paperRef.current[currentPage.current].classList.add("flipped");
    paperRef.current[currentPage.current].style.zIndex = 2;
    paperRef.current[currentPage.current + 1].style.zIndex = 1;

    currentPage.current = currentPage.current + 1;
    console.log('current page: ', currentPage.current);
  }

  function handlePrev() {
    if (currentPage.current === 0) return;

    paperRef.current[currentPage.current - 1].classList.remove("flipped");
    paperRef.current[currentPage.current - 1].style.zIndex = 2;
    paperRef.current[currentPage.current].style.zIndex = 1;

    // handle error when it is the last page
    if (currentPage.current !== maxLocation) {
      paperRef.current[currentPage.current + 1].style.zIndex = 0;
    }


    currentPage.current = currentPage.current - 1;
    console.log('current page: ', currentPage.current);
  }

  // make a jump to page number function
  function jumpToPage(pageNumber) {
    if (pageNumber > currentPage.current) {
      for (let i = currentPage.current; i < pageNumber; i++) {
        paperRef.current[i].classList.add("flipped");
        paperRef.current[i].style.zIndex = 2;
        paperRef.current[i + 1].style.zIndex = 1;
      }
    }

    else if (pageNumber < currentPage.current) {
      for (let i = currentPage.current; i > pageNumber; i--) {
        paperRef.current[i - 1].classList.remove("flipped");
        paperRef.current[i - 1].style.zIndex = 2;
        paperRef.current[i].style.zIndex = 1;

        // handle error when its last page
        if (i !== maxLocation) {
          paperRef.current[i + 1].style.zIndex = 0;
        }
      }
    }

    currentPage.current = pageNumber;
    console.log('current page: ', currentPage.current);
  }

  console.log('menuPopup: ', menuPopup);

  return (
    <nav className='nav-button'>
      <div onClick={() => { setVolume(!volume) }} className="nav-btn">{volume === true ? <SlVolume2 size={28} /> : <SlVolumeOff size={28} />}</div>
      <div className="nav-btn" onClick={handlePrev}><TfiArrowCircleUp size={28} /></div>
      <div className="nav-btn" onClick={handleNext}><TfiArrowCircleDown size={28} /></div>
      <div className="nav-btn"><RxHamburgerMenu size={28}  onClick={() => setMenuPopup(!menuPopup)}/></div>
      <div className={`dropdown-content ${menuPopup ? 'active' : ''}`} ref={dropdownRef}>
        <ul>
          <li onClick={() => jumpToPage(2)}>
            <div className='dropdown__content-icon'><TfiLocationPin size={25} /></div>
            <p>MAP</p>
          </li>
          <li onClick={() => jumpToPage(3)}>
            <div className='dropdown__content-icon'><SlEnvolope size={25} /></div>
            <p>RSVP</p>
          </li>
          <li onClick={() => jumpToPage(4)}>
            <div className='dropdown__content-icon'><HiOutlinePencilSquare size={25} /></div>
            <p>WISH</p>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;