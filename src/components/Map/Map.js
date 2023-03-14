import React from 'react'
import './Map.css'
import FLOWER from '../../assets/page3/pink_flower.png'
import { SiWaze, SiGooglemaps } from 'react-icons/si'
import { TfiLocationPin } from 'react-icons/tfi'
import { CiClock2 } from 'react-icons/ci'
import { BsHeart } from 'react-icons/bs'
import { RxCalendar } from 'react-icons/rx';


// address to the venue
const google_location = 'https://goo.gl/maps/HDw5oc3BEio1QgL88'
const waze_location = 'https://www.waze.com/en/live-map/directions/my/wilayah-persekutuan-kuala-lumpur/kuala-lumpur/dewan-de-orchid-m3lati?place=ChIJ9bc8Udo5zDERwthUak6KxcA'
const address1 = "DEWAN DE' ORCHID MELATI";
const address2 = "LEVEL 3, M3 SHOPPING MALL, JALAN MADRASAH";
const address3 = "TAMAN MELATI, 53100, KUALA LUMPUR";

const Map = () => {
    return (

        <div className='map__container'>
            <div className='map__text'>
                <RxCalendar size={28} />
                <p className='map__text-malay'>SABTU | 8 JULAI 2023</p>
                <p className='map__text-english'>Saturday | 8th July 2023</p>
            </div>

            <div className='map__text'>
                <TfiLocationPin size={28} />
                <p className='map__text-malay'>{address1}</p>
                <p className='map__text-malay'>{address2}</p>
                <p className='map__text-malay'>{address3}</p>
            </div>

            <div className='map__text'>
                <CiClock2 size={28} />
                <p className='map__text-malay'>11.30 AM - 03.30 PM</p>
            </div>

            <div className='map__text'>
                <BsHeart size={28} />
                <p className='map__text-malay'>KETIBAAN PENGANTIN | 12 TENGAHARI</p>
                <p className='map__text-english'>Arrival of Bride & Groom | 12 PM</p>

            </div>

            <div className='map__redirection'>
                <p className='map__text-malay'>Tekan di bawah untuk arah perjalanan</p>
                <p className='map__text-english'>Press below for direction</p>

                <div className='map__links'>
                    <div className='map__link'>
                        <a href={waze_location} target="_blank" rel='noopener noreferrer'><SiWaze size={48} /></a>
                    </div>

                    <div className='map__link'>
                        <a href={google_location} target="_blank" rel='noopener noreferrer'><SiGooglemaps size={48} /></a>
                    </div>
                </div>
            </div>



            <div className='map__flower-left'>
                <img src={FLOWER} alt="" />
            </div>
            <div className='map__flower-right'>
                <img src={FLOWER} alt="" />
            </div>
        </div>
    )
}

export default Map