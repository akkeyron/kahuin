import {React,useRef} from 'react'
import './Rsvp.css'

const Rsvp = () => {
  const form = useRef();
  const sendData = (data) => {
    data.preventDefault();

    data.target.reset()
  };

  return (
    <div id="rsvp">
      <h2>RSVP SECTION</h2>
      <div className='container rsvp__container'>
        <div className='rsvp__form'>
          <form ref={form} onSubmit={sendData}>
            <input type="text" name="name" placeholder="Name" required />
            <input type="tel" name="tel" placeholder="Phone No" />
            <input type="number" name="total" placeholder="Jumlah Kehadiran" required />
            <textarea name="message" row="7" placeholder="Ucapan kepada pengantin (optional)"></textarea>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Rsvp