import { React, useRef } from 'react'
import './Rsvp.css'
import axios from 'axios'

const endpoint = 'https://m621zbw7gb.execute-api.ap-southeast-1.amazonaws.com/dev/wedding-api'

const Rsvp = () => {
  const formRef = useRef();
  // handle submission
  const handleSubmit = (data) => {
    // prevent default form submission
    data.preventDefault();
    // get form data
    const formData = new FormData(formRef.current);
    // create object from form data
    const entries = Object.fromEntries(formData.entries());
    // send data to firebase
    console.log(entries);

    // send data to aws api using axios
    axios.post(endpoint, entries)
      .then((response) => {
        console.log(response);
      }, (error) => {
        console.log(error);
      }).finally(() => {
        // reset form
        data.target.reset();
      });
  }

  return (
    <div id="rsvp">
      <div className='rsvp__container'>

        <h2>RSVP</h2>
        <form ref={formRef} onSubmit={handleSubmit}>
          <p>Nama / Name</p>
          <input type="text" name="name" required />

          <p>No Telefon / Phone Number</p>
          <input type="tel" name="phone" />

          <p>Jumlah Kehadiran / Number of Guest(s)</p>
          <input type="number" name="total" required />

          <p>Ucapan / Wishes (optional)</p>
          <textarea name="message" row="7" ></textarea>

          <button type="submit" className="rsvp__btn">Send</button>
        </form>
      </div>
    </div>
  )
}

export default Rsvp