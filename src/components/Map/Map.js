import React from 'react'
import './Map.css'
const google_location = 'https://goo.gl/maps/HDw5oc3BEio1QgL88'
const waze_location = 'https://www.waze.com/en/live-map/directions/my/wilayah-persekutuan-kuala-lumpur/kuala-lumpur/dewan-de-orchid-m3lati?place=ChIJ9bc8Udo5zDERwthUak6KxcA'

const Map = () => {
    return (
        <div id="map">
            <h2>Wedding Venue</h2>

            <div className='container map-container'>
                <div className='map__picture'>

                </div>
                <div className='map__address'>

                    <h4>
                        Level 3, M3 Shopping Mall, Jln Madrasah, Taman Melati, 53100 Kuala Lumpur
                    </h4>
                    <a href={google_location} className='btn btn__map' target='_blank'>Google Maps</a>
                    <a href={waze_location} className='btn btn__map' target='_blank'>Waze</a>
                </div>


            </div>
        </div>
    )
}

export default Map