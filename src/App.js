import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Invite from './components/Invite/Invite';
import Rsvp from './components/Rsvp/Rsvp';
import Guestbook from './components/Guestbook/Guestbook';
import Map from './components/Map/Map';

// nav icons
import { TfiArrowCircleDown, TfiArrowCircleUp } from 'react-icons/tfi'
import { MdCall, MdLocationOn, MdHome, MdRsvp } from 'react-icons/md'
import { SlVolume2, SlVolumeOff } from 'react-icons/sl'

const pages = [
  { id: 1, component: <><div className='front'><Header /></div></> },
  { id: 2, component: <><div className='front'><Invite /></div></> },
  { id: 3, component: <><div className='front'><Map /></div></> },
  { id: 4, component: <><div className='front'><Rsvp /></div></> },
  { id: 5, component: <><div className='front'><Guestbook /></div></> },
  { id: 6, component: <><div className='front'><Footer /></div></> },
]

const App = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [height, setHeight] = useState(0);
  const [volume, setVolume] = useState(true);

  const bookRef = useRef(null);
  const prevBtnRef = useRef(null);
  const nextBtnRef = useRef(null);
  const paperRef = useRef([]);

  const maxLocation = pages.length;

  useEffect(() => {
    const calculateHeight = () => {
      setHeight(window.innerHeight - 35);
    };
    calculateHeight();
    window.addEventListener("resize", calculateHeight);
    return () => {
      window.removeEventListener("resize", calculateHeight);
    };
  }, []);

  // button transition effect
  // useEffect(() => {
  //   if (currentPage === 1) {

  //   }
  // }, [currentPage])

  function handleNext() {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, maxLocation));
    paperRef.current[currentPage - 1].classList.add("flipped");
    paperRef.current[currentPage - 1].style.zIndex = 2;
    paperRef.current[currentPage].style.zIndex = 1;
  }

  function handlePrev() {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    if (currentPage > 1) {
      paperRef.current[currentPage - 2].classList.remove("flipped");
      paperRef.current[currentPage - 2].style.zIndex = 2;
      paperRef.current[currentPage - 1].style.zIndex = 1;
      paperRef.current[currentPage].style.zIndex = 0;
    }
  }

  return (
    <div className='kad-kahwin' >
      <div ref={bookRef} id="book" style={{ height: height }}>

        {pages.map((page, idx) => (
          <div key={page.id} id={`p${page.id}`} className="paper" ref={(el) => (paperRef.current[idx] = el)}>
            {page.component}
          </div>
        ))}
      </div>
      <div className='nav-button'>
        <div onClick={() => {setVolume(!volume)}} className="nav-btn">{volume === true ? <SlVolume2 size={28} /> : <SlVolumeOff size={28} />}</div>
        {currentPage === 1 ? "" : <div ref={prevBtnRef} className="nav-btn" onClick={handlePrev}><TfiArrowCircleUp size={28} /></div>}
        {currentPage === maxLocation ? "" : <div ref={nextBtnRef} className="nav-btn" onClick={handleNext}><TfiArrowCircleDown size={28} /></div>}
      </div>
    </div>
  )
}

export default App