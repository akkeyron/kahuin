import React, { useState, useRef, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Invite from './components/Invite/Invite';
import Rsvp from './components/Rsvp/Rsvp';
import Guestbook from './components/Guestbook/Guestbook';
import Map from './components/Map/Map';

const pages = [
  <>
    <div class="front">
      <Header />
    </div>
  </>,
  <>
    <div class="front">
      <Invite />
    </div>
  </>,
  <>
    <div class="front">
      <Map />
    </div>
  </>,
];

const pages2 = [
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

  const bookRef = useRef(null);
  const prevBtnRef = useRef(null);
  const nextBtnRef = useRef(null);
  const paper1Ref = useRef(null);
  const paper2Ref = useRef(null);
  const paper3Ref = useRef(null);
  const paperRef = useRef([]);

  const divref = useRef(null);

  const maxLocation = pages2.length;
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

  function handleNext() {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, maxLocation));
    paperRef.current[currentPage - 1].classList.add("flipped");
    paperRef.current[currentPage - 1].style.zIndex = 2;
    paperRef.current[currentPage].style.zIndex = 1;

    // handle next button for desktop and table screen
    // if (currentPage < maxLocation) {
    //   switch (true) {
    //     // front page
    //     case (currentPage === 1):
    //       paperRef.current[currentPage-1].classList.add("flipped");
    //       paperRef.current[currentPage-1].style.zIndex = 2;
    //       paperRef.current[currentPage].style.zIndex = 1;
    //       break;
    //       // middle page
    //     case (currentPage > 1 && currentPage < pages2.length):
    //       console.log("page 2");
    //       paperRef.current[currentPage-1].classList.add("flipped");
    //       paperRef.current[currentPage-2].style.zIndex = 1;
    //       paperRef.current[currentPage-1].style.zIndex = 2;
    //       paperRef.current[currentPage].style.zIndex = 1;
    //       break;
    //     case (currentPage === pages2.length):
    //       paperRef.current[currentPage-1].classList.add("flipped");
    //       paperRef.current[currentPage-2].style.zIndex = 1;
    //       paperRef.current[currentPage-1].style.zIndex = 2;
    //       break;
    //     default:
    //       throw new Error("unkown state");
    //   }
    // }
  }
  function handlePrev() {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    if (currentPage > 1) {
      paperRef.current[currentPage - 2].classList.remove("flipped");
      paperRef.current[currentPage - 2].style.zIndex = 2;
      paperRef.current[currentPage - 1].style.zIndex = 1;
      paperRef.current[currentPage].style.zIndex = 0;
    }



    // if (currentPage > 1) {
    //   switch (currentPage) {
    //     case 2:
    //       paper1Ref.current.classList.remove("flipped");
    //       paper1Ref.current.style.zIndex = 2;
    //       paper2Ref.current.style.zIndex = 1;
    //       break;
    //     case 3:
    //       paper2Ref.current.classList.remove("flipped");
    //       paper1Ref.current.style.zIndex = 1;
    //       paper2Ref.current.style.zIndex = 2;
    //       paper3Ref.current.style.zIndex = 0;
    //       break;
    //     case 4:
    //       paper3Ref.current.classList.remove("flipped");
    //       paper2Ref.current.style.zIndex = 1;
    //       paper3Ref.current.style.zIndex = 2;
    //       break;
    //     default:
    //       throw new Error("unkown state");
    //   }
    // }
  }

  // return (
  //   <React.Fragment>
  //     <div className='kad-kahwin' >
  //       <div ref={bookRef} id="book" style={{ height: height }}>
  //         <div ref={paper1Ref} id="p1" className="paper">
  //           {pages[0]}
  //         </div>
  //         <div ref={paper2Ref} id="p2" className="paper">
  //           {pages[1]}
  //         </div>
  //         <div ref={paper3Ref} id="p3" className="paper">
  //           {pages[2]}
  //         </div>
  //       </div>
  //       <div className='nav-button'>
  //         {currentPage === 1 ? "" : <button type='button' ref={prevBtnRef} id="prev-btn" onClick={handlePrev}>Prev</button>}
  //         {currentPage === maxLocation ? "" : <button type='button' ref={nextBtnRef} id="next-btn" onClick={handleNext}>Next</button>}
  //       </div>


  //     </div>
  //   </React.Fragment>
  // )

  return (
    <React.Fragment>
      <div className='kad-kahwin' >
        <div ref={bookRef} id="book" style={{ height: height }}>

          {pages2.map((page, idx) => (
            <div key={page.id} id={`p${page.id}`} className="paper" ref={(el) => (paperRef.current[idx] = el)}>
              {page.component}
            </div>
          ))}
        </div>
        <div className='nav-button'>
          {currentPage === 1 ? "" : <button type='button' ref={prevBtnRef} id="prev-btn" onClick={handlePrev}>Prev</button>}
          {currentPage === maxLocation ? "" : <button type='button' ref={nextBtnRef} id="next-btn" onClick={handleNext}>Next</button>}
        </div>


      </div>
    </React.Fragment >
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