import * as React from 'react';
import { useState, useRef, useEffect, FC } from 'react';
import './Navbar.css'

// nav icons
import { TfiArrowCircleDown, TfiArrowCircleUp, TfiLocationPin } from 'react-icons/tfi'
import { SlVolume2, SlVolumeOff } from 'react-icons/sl'
import { RxHamburgerMenu } from 'react-icons/rx'
import { SlEnvolope } from 'react-icons/sl'
import { HiOutlinePencilSquare } from 'react-icons/hi2'

// audio DOM element
const audio = document.getElementsByTagName('audio')[0];

// if user clicked outside of the dropdown close it
const useOnClickOutside = (dropdownRef: React.RefObject<HTMLDivElement>, handler: React.MouseEventHandler<HTMLButtonElement>, menuRef: React.RefObject<HTMLDivElement>) => {
  useEffect(() => {
    const listener = (event: any) => {
      if (!dropdownRef.current || dropdownRef.current.contains(event.target) || menuRef.current?.contains(event.target)) {
        return;
      }
      handler(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };

  }, [dropdownRef, handler]);
}

// interface
interface IProps {
  handlePrev: () => void;
  handleNext: () => void;
  jumpToPage: (page: number) => void;
}



const Navbar: FC<IProps> = ({ handlePrev, handleNext, jumpToPage }) => {
  // React states
  const [menuPopup, setMenuPopup] = useState(false);
  const [muted, setMuted] = useState(true);

  // React refs
  const dropdownRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(dropdownRef, () => setMenuPopup(false), menuRef);

  const togglePlayPause = () => {
    const prevState = muted;
    setMuted(!prevState);
    if (!audio) return;

    if (prevState === false) {
      audio.pause();
      
    }else if (prevState === true) {
      audio.play();
    }
  }

  return (
    <nav className='nav-button'>
      {/* music player */}
      <div onClick={togglePlayPause} className="nav-btn">{muted === false ? <SlVolume2 size={28} /> : <SlVolumeOff size={28} />}</div>

      {/* navigation buttons */}
      <div className="nav-btn" onClick={handlePrev}><TfiArrowCircleUp size={28} /></div>
      <div className="nav-btn" onClick={handleNext}><TfiArrowCircleDown size={28} /></div>
      <div className="nav-btn" ref={menuRef}><RxHamburgerMenu size={28} onClick={(event) => setMenuPopup(() => {
        event.stopPropagation();
        return !menuPopup;
      })} /></div>

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