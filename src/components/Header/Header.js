import React from 'react'
import './Header.css'
import INITIAL from '../../assets/initial.png'
import WALIMAH from '../../assets/page1/walimah_new.png'
import FLOWERS from '../../assets/page1/petal.GIF'

const Header = () => {
  return (
    <div className='main__header'>
      <div className='main__header-title'>
        <img src={WALIMAH} alt="" />

        <p className='text-malay2' style={{ marginBottom: '0.3rem' }}>WALIMATULURUS</p>
        <p className='text-malay2' style={{ color: '#8d8d8d', fontSize: '0.7rem'}}>WEDDING INVITATION</p>
      </div>
      <div className='main__header-pengantin'>
        <img src={INITIAL} className='main__header-initial' alt="" />
        <img src={FLOWERS} alt="" className='petals' />
      </div>

      <div className='main__header-venue'>
        <p className='text-malay' style={{ marginBottom: '0.9rem'}}>MIRA & LOQMAN</p>
        <p className='text-malay'>SABTU | 8 JULAI 2023</p>
        <p className='text-malay2' style={{ color: '#8d8d8d', fontSize: '0.7rem'}}>SATURDAY | 8TH OF JULY 2023</p>

      </div>
    </div>
  )
}

export default Header