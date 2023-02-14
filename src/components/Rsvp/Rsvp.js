import { React, useRef } from 'react'
import './Rsvp.css'
import TITLE from '../../assets/rsvp/rsvp.png'
import NAME from '../../assets/rsvp/nama.png'
import COUNT from '../../assets/rsvp/no_guest.png'
import TEL from '../../assets/rsvp/no_tel.png'
import UCAPAN from '../../assets/rsvp/ucapan.png'

const Rsvp = () => {
  const form = useRef();
  const sendData = (data) => {
    data.preventDefault();

    data.target.reset()
  };

  return (
    <div id="rsvp">
      <div className='rsvp__container'>

        <div className='rsvp__title'><img src={TITLE} alt="" /></div>
        <form ref={form} onSubmit={sendData}>
          <div className='rsvp__name'><img src={NAME} alt="" /></div>
          <input type="text" name="name" required />

          <div className='rsvp__tel'><img src={TEL} alt="" /></div>
          <input type="tel" name="tel" />

          <div className='rsvp__count'><img src={COUNT} alt="" /></div>
          <input type="number" name="total" required />

          <div className='rsvp__tel'><img src={UCAPAN} alt="" /></div>
          <textarea name="message" row="7" ></textarea>

          <button type="submit" className="rsvp__btn">Send</button>
        </form>
      </div>
    </div>
  )
}

export default Rsvp