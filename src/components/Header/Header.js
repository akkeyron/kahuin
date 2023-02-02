import React from 'react'
import './Header.css'
import INITIAL from '../../assets/initial.PNG'
import WALIMAH from '../../assets/walimah_khat.png'
import ROMAN_WALIMAH from '../../assets/roman_walimah.PNG'
import NAME_DATE from '../../assets/name_date.PNG'
import DAY_DATE from '../../assets/day_date.PNG'

const Header = () => {
  return (
    <header className='main__header'>
      <div className='main__header-title'>
        <img src={WALIMAH} />
      </div>
      <div className='main__header-pengantin'>
        <img src={ROMAN_WALIMAH} />
      </div>
      <div className='main__header-pengantin'>
        <img src={INITIAL} />
      </div>

      <div className='main__header-venue'>
        <img src={NAME_DATE} />

      </div>
      <div className='main__header-pengantin'>
        <img src={DAY_DATE} />
      </div>
    </header>
  )
}

export default Header