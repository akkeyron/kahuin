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
                    <iframe
                        width="500"
                        height="300"
                        frameborder="0"
                        loading="lazy"
                        src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.5261006509054!2d101.71656831467375!3d3.218252397656864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xadd3c58b2247d95c!2zM8KwMTMnMDUuNyJOIDEwMcKwNDMnMDcuNSJF!5e0!3m2!1sen!2smy!4v1673864129070!5m2!1sen!2smy`}
                        allowfullscreen
                        referrerpolicy="no-referrer-when-downgrade"
                    />

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