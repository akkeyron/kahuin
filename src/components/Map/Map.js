import React from 'react'
import './Map.css'
import DATE from '../../assets/page3/date.png'
import ADDRESS from '../../assets/page3/address.png'
import TIME from '../../assets/page3/centered_time.png'
import ARRIVAL from '../../assets/page3/arrival_time.png'
import FLOWER from '../../assets/page3/pink_flower.png'
import DIRECTION from '../../assets/page3/redirection.png'
import { SiWaze, SiGooglemaps } from 'react-icons/si'

// address to the venue
const google_location = 'https://goo.gl/maps/HDw5oc3BEio1QgL88'
const waze_location = 'https://www.waze.com/en/live-map/directions/my/wilayah-persekutuan-kuala-lumpur/kuala-lumpur/dewan-de-orchid-m3lati?place=ChIJ9bc8Udo5zDERwthUak6KxcA'



const Map = () => {
    return (
        <div id="map">

            <div className='map__container'>
                <div className='map__date'>
                    <img src={DATE} alt="" />
                </div>

                <div className='map__address'>
                    <img src={ADDRESS} alt="" />
                </div>

                <div className='map__time'>
                    <img src={TIME} alt="" />
                </div>

                <div className='map__arrival'>
                    <img src={ARRIVAL} alt="" />
                </div>
            </div>

            <div className='map__redirection'>
                <img src={DIRECTION} alt="" />
            </div>

            <div className='map__links'>
                <div className='map__link'>
                    <a href={waze_location} target="_blank" rel='noopener noreferrer'><SiWaze size={48} /></a>
                </div>

                <div className='map__link'>
                    <a href={google_location} target="_blank" rel='noopener noreferrer'><SiGooglemaps size={48} /></a>
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