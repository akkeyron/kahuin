import React from 'react'
import './Invite.css'

// assets
import BISMILLAH from '../../assets/page2/bismillah.png'
import FLOWERS from '../../assets/page1/petal.GIF'
import GOLD from '../../assets/page2/gold.png'

const abah = "HAJI MOHD YUNOS BIN HASHIM"
const mak = "HAJAH SARIAH BINTI RAMLI"
const bride = "Nuramirah Binti Mohd Yunos"
const groom = "Loqman Al Hakim Bin Aripin"

const Invite = () => {
    return (
        <>
            <div className='invite-container'>
                <div className='invite__assets-bismillah'>
                    <img src={BISMILLAH} alt="" />
                </div>
                <div className='invite__assets-text'>
                    <p className='text-malay2'>DENGAN PENUH KESYUKURAN KEPADA ALLAH SWT</p>
                    <p className='text-english'>With great pleasure</p>
                </div>
                <div className='invite__assets-text'>
                    <h2>{abah}</h2>
                    <h2>&</h2>
                    <h2>{mak}</h2>
                </div>
                <div className='invite__assets-text'>
                    <p className='text-malay2'>MENJEMPUT YANG BERBAHAGIA</p>
                    <p className='text-malay2' style={{ marginBottom: '0.4rem' }}>DATO'/DATUK/DATIN/TUAN/PUAN/ENCIK/CIK</p>
                    <p className='text-malay2'>UNTUK MERAIKAN MAJLIS PERKAHWINAN</p>
                    <p className='text-malay2' style={{ marginBottom: '0.8rem' }}>ANAKANDA KAMI DAN PASANGANNYA</p>
                    <p className='text-english'>Cordially invite Yang Berbahagia</p>
                    <p className='text-english' style={{ marginBottom: '0.4rem' }}>Dato'/Datuk/Datin/Mr./Mrs./Miss</p>
                    <p className='text-english'>to join the wedding reception of our beloved</p>
                    <p className='text-english'>daughter with her husband</p>
                </div>
                <div className='invite__assets-pengantin'>
                    <img src={GOLD} className="invite__assets-border" alt="" />
                    <h2>{bride}</h2>
                    <h2>&</h2>
                    <h2>{groom}</h2>
                    <img src={FLOWERS} alt="" className='petals' />
                    <img src={GOLD} className="invite__assets-border" alt="" />
                </div>

            </div>

        </>


    )
}

export default Invite