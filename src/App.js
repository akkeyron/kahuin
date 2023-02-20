import React, { useRef, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Invite from './components/Invite/Invite';
import Rsvp from './components/Rsvp/Rsvp';
import Guestbook from './components/Guestbook/Guestbook';
import Map from './components/Map/Map';
import Navbar from './components/Navbar/Navbar'

import music from './assets/lovers_oath.ogg';

const pages = [
  { id: 1, component: <><Header /></> },
  { id: 2, component: <><Invite /></> },
  { id: 3, component: <><Map /></> },
  { id: 4, component: <><Rsvp /></> },
  { id: 5, component: <><Guestbook /></> },
  { id: 6, component: <><Footer /></> },
]

const App = () => {
  const bookRef = useRef(null);
  const paperRef = useRef([]);
  const play = music;

  return (
    <div className='kad-kahwin'>
      <audio src={play} autoPlay={true} loop={true} controls={false} />
      <div ref={bookRef} id="book" style={{ height: (window.innerHeight - 35) }}>

        {pages.map((page, idx) => (
          <div key={page.id} id={`p${page.id}`} className="paper" ref={(el) => (paperRef.current[idx] = el)}>
            {page.component}
          </div>
        ))}
      </div>
      {/* pass ref to navbar */}
      {/* the value is undefined in navbar component after passing*/}

      <Navbar paperRef={paperRef} maxPage={pages.length - 1} />

    </div>
  )
}

export default App