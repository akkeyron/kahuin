import { React, useRef, useState, useEffect } from 'react'
import './Guestbook.css'
import NAME from '../../assets/rsvp/nama.png'
import UCAPAN from '../../assets/rsvp/ucapan.png'
import FLOWERS from '../../assets/wishes/flower_border_top.png'
import TITLE from '../../assets/wishes/ucapan.png'
import BOX from '../../assets/wishes/border_with_flower.png'
import axios from 'axios';
import { useQuery } from 'react-query';

const endpoint = 'https://m621zbw7gb.execute-api.ap-southeast-1.amazonaws.com/dev/wedding-api';

const Guestbook = () => {
    const [wishes, setWishes] = useState([]);
    const [showPopup, setShowPopup] = useState(false);
    const boxRef = useRef();
    const formRef = useRef(null);

    // fetch from api using fetch
    const fetchWishes = async () => {
        const response = await fetch(endpoint);
        const data = await response.json();
        setWishes(data);
    };

    useEffect (() => {
        fetchWishes();
    }, []);



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

        // set data to aws api using axios
        axios.post(endpoint, entries)
            .then((response) => {
                console.log(response);
            }
            ).catch((error) => {
                console.log(error);
            }
            ).finally(() => {
                // reset form
                data.target.reset();
            });
    };



    return (
        <div id="guestbook">

            <div className='guestbook__container'>
                <div className='guestbook__title'><img src={TITLE} alt="" /></div>

                <div className='guestbook__wishes' ref={boxRef}>
                    <div className='guestbook__box'>
                        <ul>
                            {wishes.map((wish, index) => (
                                <li key={index}>
                                    <strong>{wish.name}</strong>
                                    <p>{wish.message}</p>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>

                {/* // get button to pop up window to send wishes */}
                <button type="submit" className="rsvp__btn" onClick={() => setShowPopup(true)}>Hantar Ucapan</button>

                <div className={`popup-container ${showPopup ? 'active' : ''}`} onClick={() => setShowPopup(false)}>
                    <div className={`popup ${showPopup ? 'active' : ''}`} onClick={(event) => event.stopPropagation()}>
                        <form ref={formRef} onSubmit={handleSubmit}>
                            <div className='rsvp__name'><img src={NAME} alt="" /></div>
                            <input type="text" name="name" required />

                            <div className='rsvp__tel'><img src={UCAPAN} alt="" /></div>
                            <textarea name="message" row="7" ></textarea>

                            <button type="submit" className='rsvp__btn ucapan'>Send</button>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Guestbook