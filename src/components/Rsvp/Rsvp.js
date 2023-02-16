import { React, useRef } from 'react'
import './Rsvp.css'
import TITLE from '../../assets/rsvp/rsvp.png'
import NAME from '../../assets/rsvp/nama.png'
import COUNT from '../../assets/rsvp/no_guest.png'
import TEL from '../../assets/rsvp/no_tel.png'
import UCAPAN from '../../assets/rsvp/ucapan.png'
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


    // set data to aws api
    // fetch('https://m621zbw7gb.execute-api.ap-southeast-1.amazonaws.com/dev/wedding-api', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Access-Control-Allow-Origin': '*',
    //   },
    //   body: JSON.stringify(entries),
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log('Success:', data);
    //   })
    //   .catch((error) => {
    //     console.error('Error:', error);
    //   })
    //   .finally(() => {
    //     // reset form
    //     data.target.reset();
    //   });
  }

  return (
    <div id="rsvp">
      <div className='rsvp__container'>

        <div className='rsvp__title'><img src={TITLE} alt="" /></div>
        <form ref={formRef} onSubmit={handleSubmit}>
          <div className='rsvp__name'><img src={NAME} alt="" /></div>
          <input type="text" name="name" required />

          <div className='rsvp__tel'><img src={TEL} alt="" /></div>
          <input type="tel" name="phone" />

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