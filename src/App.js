import React, { useState, useRef, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Invite from './components/Invite/Invite';
import Rsvp from './components/Rsvp/Rsvp';
import Guestbook from './components/Guestbook/Guestbook';
import Map from './components/Map/Map';

const pages = [
  <>
    <div class="front">
      <div id="f1" class="front-content">
        <Header />
      </div>
    </div>
    <div class="back">
      <div id="b1" class="back-content">
        <Invite />
      </div>
    </div>
  </>,
  <>
    <div class="front">
      <div id="f2" class="front-content">
        <Map />
      </div>
    </div>
    <div class="back">
      <div id="b2" class="back-content">
        <Rsvp />
      </div>
    </div>
  </>,
  <>
    <div class="front">
      <div id="f3" class="front-content">
        <Guestbook />
      </div>
    </div>
    <div class="back">
      <div id="b3" class="back-content">
        <h1>Back 3</h1>
      </div>
    </div>
  </>,
];

const App = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [height, setHeight] = useState(0);

  const bookRef = useRef(null);
  const prevBtnRef = useRef(null);
  const nextBtnRef = useRef(null);
  const paper1Ref = useRef(null);
  const paper2Ref = useRef(null);
  const paper3Ref = useRef(null);

  const divref = useRef(null);

  const maxLocation = pages.length * 2;
  // if mobile screen
  const isMobile = useMediaQuery({ query: '(max-width: 600px)' });

  useEffect(() => {
    const calculateHeight = () => {
      setHeight(window.innerHeight);
    };
    calculateHeight();
    window.addEventListener("resize", calculateHeight);
    return () => {
      window.removeEventListener("resize", calculateHeight);
    };
  }, []);

  useEffect(() => {
    if (isMobile) {
      //screen size is mobile
      // if even page
      if (currentPage % 2 === 0) {
        bookRef.current.style.transform = "translateX(100%)";
      } else {
        bookRef.current.style.transform = "translateX(0%)";
      }
    } else {
      //screen size is not mobile
      bookRef.current.classList.remove("even-page");
    }

  }, [currentPage])

  function handleNext() {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, maxLocation));
    // handle next button for desktop and table screen
    if (currentPage < maxLocation && !isMobile) {
      switch (currentPage) {
        case 1:
          openBook();
          paper1Ref.current.classList.add("flipped");
          paper1Ref.current.style.zIndex = 2;
          paper2Ref.current.style.zIndex = 1;
          break;
        case 2:
          paper2Ref.current.classList.add("flipped");
          paper1Ref.current.style.zIndex = 0;
          paper2Ref.current.style.zIndex = 2;
          paper3Ref.current.style.zIndex = 1;
          break;
        case 3:
          paper3Ref.current.classList.add("flipped");
          paper2Ref.current.style.zIndex = 1;
          paper3Ref.current.style.zIndex = 2;
          closeBook(false);
          break;
        default:
          throw new Error("unkown state");
      }
      // handle next button for mobile screen
    } else if (currentPage < maxLocation && isMobile) {
      switch (currentPage) {
        case 1:
          paper1Ref.current.classList.add("flipped");
          paper1Ref.current.style.zIndex = 2;
          paper2Ref.current.style.zIndex = 1;
          break;
        case 3:
          paper2Ref.current.classList.add("flipped");
          paper1Ref.current.style.zIndex = 0;
          paper2Ref.current.style.zIndex = 2;
          paper3Ref.current.style.zIndex = 1;
          break;
        case 5:
          paper3Ref.current.classList.add("flipped");
          paper2Ref.current.style.zIndex = 1;
          paper3Ref.current.style.zIndex = 2;
          break;
        default:
          throw new Error("unkown state");
      }
    }
  }
  function handlePrev() {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    if (currentPage > 1 && !isMobile) {
      switch (currentPage) {
        case 2:
          closeBook(true);
          paper1Ref.current.classList.remove("flipped");
          paper1Ref.current.style.zIndex = 2;
          paper2Ref.current.style.zIndex = 1;
          break;
        case 3:
          paper2Ref.current.classList.remove("flipped");
          paper1Ref.current.style.zIndex = 1;
          paper2Ref.current.style.zIndex = 2;
          paper3Ref.current.style.zIndex = 0;
          break;
        case 4:
          openBook();
          paper3Ref.current.classList.remove("flipped");
          paper2Ref.current.style.zIndex = 1;
          paper3Ref.current.style.zIndex = 2;
          break;
        default:
          throw new Error("unkown state");
      }
    } else if (currentPage > 1 && isMobile) {
      switch (currentPage) {
        case 2:
          paper1Ref.current.classList.remove("flipped");
          paper1Ref.current.style.zIndex = 2;
          paper2Ref.current.style.zIndex = 1;
          break;
        case 4:
          paper2Ref.current.classList.remove("flipped");
          paper1Ref.current.style.zIndex = 1;
          paper2Ref.current.style.zIndex = 2;
          paper3Ref.current.style.zIndex = 0;
          break;
        case 6:
          paper3Ref.current.classList.remove("flipped");
          paper2Ref.current.style.zIndex = 1;
          paper3Ref.current.style.zIndex = 2;
          break;
        default:
          throw new Error("unkown state");
      }
    }
  }
  function openBook() {
    // move the book 
    if (!isMobile) {
      bookRef.current.style.transform = "translateX(50%)";
    }

    // prevBtnRef.current.style.transform = "translateX(-180px)";
    // nextBtnRef.current.style.transform = "translateX(180px)";
  }

  function closeBook(isAtBeginning) {
    if (isAtBeginning) {
      bookRef.current.style.transform = "translateX(0%)";
    } else {
      bookRef.current.style.transform = "translateX(100%)";
    }
    prevBtnRef.current.style.transform = "translateX(0px)";
    nextBtnRef.current.style.transform = "translateX(0px)";

  }

  return (
    <React.Fragment>
      <div className='kad-kahwin' >
        <div ref={bookRef} id="book" style={{ height: height }}>
          <div ref={paper1Ref} id="p1" className="paper">
            {pages[0]}
          </div>
          <div ref={paper2Ref} id="p2" className="paper">
            {pages[1]}
          </div>
          <div ref={paper3Ref} id="p3" className="paper">
            {pages[2]}
          </div>
        </div>
        <div className='nav-button'>
          {currentPage === 1 ? "" : <button type='button' ref={prevBtnRef} id="prev-btn" onClick={handlePrev}>Prev</button>}
          {currentPage === maxLocation ? "" : <button type='button' ref={nextBtnRef} id="next-btn" onClick={handleNext}>Next</button>}
        </div>


      </div>
    </React.Fragment>
  )
}

export default App

// {/* <Header />
//       <Invite />
//       <Map />
//       <Rsvp />
//       <Guestbook />
//       <Navbar />
//       <Footer /> */}