import React, { useRef, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Invite from './components/Invite/Invite';
import Rsvp from './components/Rsvp/Rsvp';
import Guestbook from './components/Guestbook/Guestbook';
import Map from './components/Map/Map';
import Navbar from './components/Navbar/Navbar';

// import music from './assets/lovers_oath.ogg';

const pages = [
  { id: 1, component: <><Header /></> },
  { id: 2, component: <><Invite /></> },
  { id: 3, component: <><Map /></> },
  { id: 4, component: <><Rsvp /></> },
  { id: 5, component: <><Guestbook /></> },
  { id: 6, component: <><Footer /></> },
];

const App = () => {
  // states
  const [muted, setMuted] = useState(false);

  // refs
  const paperRef = useRef<Array<HTMLDivElement>>([]);
  // const play = music;
  const maxLocation: number = pages.length - 1;

  // refs
  const currentPage = useRef<number>(0);

  // when the user click next button
  const handleNext = () => {
    if (currentPage.current >= maxLocation) return;
    if (paperRef.current.length <= currentPage.current) return;

    paperRef.current[currentPage.current].classList.add("flipped");
    paperRef.current[currentPage.current].style.zIndex = '2';
    paperRef.current[currentPage.current + 1].style.zIndex = '1';

    currentPage.current = currentPage.current + 1;
  }

  // when the user click prev button
  const handlePrev = () => {
    if (currentPage.current === 0) return;

    paperRef.current[currentPage.current - 1].classList.remove("flipped");
    paperRef.current[currentPage.current - 1].style.zIndex = '2';
    paperRef.current[currentPage.current].style.zIndex = '1';

    // handle error when it is the last page
    if (currentPage.current !== maxLocation) {
      paperRef.current[currentPage.current + 1].style.zIndex = '0';
    }

    currentPage.current = currentPage.current - 1;
  }

  // jump to page
  const jumpToPage = (pageNumber: number) => {
    if (pageNumber > currentPage.current) {
      for (let i = currentPage.current; i < pageNumber; i++) {
        paperRef.current[i].classList.add("flipped");
        paperRef.current[i].style.zIndex = '2';
        paperRef.current[i + 1].style.zIndex = '1';
      }
    }

    else if (pageNumber < currentPage.current) {
      for (let i = currentPage.current; i > pageNumber; i--) {
        paperRef.current[i - 1].classList.remove("flipped");
        paperRef.current[i - 1].style.zIndex = '2';
        paperRef.current[i].style.zIndex = '1';

        // handle error when its last page
        if (i !== maxLocation) {
          paperRef.current[i + 1].style.zIndex = '0';
        }
      }
    }

    currentPage.current = pageNumber;
  }



  return (
    <div className='kad-kahwin'>
      {/* <audio src={play} autoPlay={true} loop={true} controls={false} /> */}
      {/* <div id="book" style={{ height: `${window.innerHeight - 44}px` }}> */}
      <div id="book" style={{ height: `${window.innerHeight - 44}px` }}>
        {paperRef.current = new Array(pages.length)}

        {pages.map((page, idx) => (
          <div key={page.id} id={`p${page.id}`} className="paper" ref={(el) => {
            if (el) {
              paperRef.current[idx] = el;
            }
          }}>
            {page.component}
          </div>
        ))}
      </div>
      {/* pass ref to navbar */}
      {/* the value is undefined in navbar component after passing*/}

      <Navbar handlePrev={handlePrev} handleNext={handleNext} jumpToPage={jumpToPage} />

    </div>
  )
}

export default App