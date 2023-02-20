import * as React from 'react';
import { useState, useRef, useEffect } from 'react';
import './Navbar.css'

// nav icons
import { TfiArrowCircleDown, TfiArrowCircleUp, TfiLocationPin } from 'react-icons/tfi'
import { SlVolume2, SlVolumeOff } from 'react-icons/sl'
import { RxHamburgerMenu } from 'react-icons/rx'
import { SlEnvolope } from 'react-icons/sl'
import { HiOutlinePencilSquare } from 'react-icons/hi2'

// music
// import music from '../../assets/lovers_oath.ogg';

const Navbar = (props) => {

  // React states
  const [muted, setMuted] = useState(false);
  const [menuPopup, setMenuPopup] = useState(false);

  // React refs
  const currentPage = useRef(0);
  const paperRef = props.paperRef;
  const dropdownRef = useRef(null);
  const maxLocation = props.maxPage;

  // if user clicked outside of the dropdown close it
  useEffect(() => {

    const handleClickOutside = (event) => {
      if (!dropdownRef.current.contains(event.target)) {
        setMenuPopup(false);
      }
    };

    // add event listener to close dropdown when click outside
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


  function handleNext() {
    if (currentPage.current >= maxLocation) return;


    paperRef.current[currentPage.current].classList.add("flipped");
    paperRef.current[currentPage.current].style.zIndex = 2;
    paperRef.current[currentPage.current + 1].style.zIndex = 1;

    currentPage.current = currentPage.current + 1;
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
  }

  return (
    <nav className='nav-button'>
      {/* music player */}
      <div onClick={() => setMuted((prev) => !prev)} className="nav-btn">{muted === false ? <SlVolume2 size={28} /> : <SlVolumeOff size={28} />}</div>
      {/* <audio src={music} autoPlay={true} loop={true} muted={muted} controls={false} /> */}

      {/* navigation buttons */}
      <div className="nav-btn" onClick={handlePrev}><TfiArrowCircleUp size={28} /></div>
      <div className="nav-btn" onClick={handleNext}><TfiArrowCircleDown size={28} /></div>
      <div className="nav-btn"><RxHamburgerMenu size={28} onClick={() => setMenuPopup((prev) => !prev)} /></div>

      {/* dropdown menu */}
      <div className={`dropdown-content ${menuPopup ? 'active' : ''}`} ref={dropdownRef}>
        <ul>
          <li onClick={() => jumpToPage(2)}>
            <div className='dropdown__content-icon'><TfiLocationPin size={23} /></div>
            <p>MAP</p>
          </li>
          <li onClick={() => jumpToPage(3)}>
            <div className='dropdown__content-icon'><SlEnvolope size={23} /></div>
            <p>RSVP</p>
          </li>
          <li onClick={() => jumpToPage(4)}>
            <div className='dropdown__content-icon'><HiOutlinePencilSquare size={23} /></div>
            <p>WISH</p>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;