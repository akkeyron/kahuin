import React from 'react'
import './Map.css'
import DATE from '../../assets/page3/date_icon.png'
import ADDRESS from '../../assets/page3/address_icon.png'
import TIME from '../../assets/page3/time_icon.png'

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

                <div className='map__links'>
                    <div className='map__link'>

                    </div>
                    <div className='map__link'>
                        
                    </div>
                    
                </div>


            </div>
        </div>
    )
}

export default Map