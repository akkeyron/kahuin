import { React, useState } from 'react'
import './Guestbook.css'

const Guestbook = () => {
    const [wishes, setWishes] = useState([
        { id: 1, name: "Loqman", wish: "I love Mira" },
        { id: 2, name: "Loqman Hakim", wish: "I want to marry Mira" },
        { id: 3, name: "Loqman Aripin", wish: "Mira is really cute!!" },
        { id: 4, name: "Bob", wish: "Semoga kekal berbahagia Loqman dan Mira!" },
        { id: 5, name: "Bob", wish: "I wish for a new house" },
    ]);


    return (
        <section id="guestbook">
            <h2>Ucapan</h2>
            <div className='container guestbook__container'>
                <div className='guestbook__text'>
                    <div className='guestbook__wishes'>
                        <ul>
                            {wishes.map((wish) => (
                                <li key={wish.id}>
                                    <strong>{wish.name}</strong>
                                    <p>{wish.wish}</p>
                                </li>
                            ))}
                        </ul>
                        {/* // get button to pop up window to send wishes */}
                        <button type="submit" className="btn guestbook__wish">Hantar Ucapan</button>
                    </div>
                </div>


            </div>
        </section>
    )
}

export default Guestbook