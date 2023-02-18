import { React, useRef, useState, useEffect } from 'react'
import './Guestbook.css'
import axios from 'axios';

const endpoint = 'https://m621zbw7gb.execute-api.ap-southeast-1.amazonaws.com/dev/wedding-api';

const Guestbook = () => {
    const [wishes, setWishes] = useState([
        {
            "name": "abu",
            "message": "hi"
        },
        {
            "name": "ali",
            "message": "selamat pengantin baru"
        },
        {
            "name": "minah",
            "message": "barakallah"
        },
        {
            "name": "minah2",
            "message": "semoga bahagia ke anak cucu cicit"
        }
    ]);
    const [showPopup, setShowPopup] = useState(false);
    const [isloading, setLoading] = useState(false);
    const boxRef = useRef();
    const formRef = useRef(null);

    // fetch from api using fetch
    // display loading message
    // const fetchWishes = async () => {
    //     setLoading(true);
    //     const response = await fetch(endpoint);
    //     const data = await response.json();
    //     setWishes(data);
    //     setLoading(false);
    // };

    // useEffect (() => {
    //     fetchWishes();
    // }, []);

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
                <h2>UCAPAN // WISHES</h2>

                <div className='guestbook__wishes' ref={boxRef}>
                    <div className='guestbook__box'>
                        {isloading && <div>Loading...</div>}
                        <ul>
                            {wishes.map((wish, index) => (
                                <li key={index}>
                                    {/* message that overflows the box will be next line */}
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
                            <p>Nama / Name</p>
                            <input type="text" name="name" required />

                            <p>Ucapan / Wishes</p>
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