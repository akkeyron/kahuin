import React from 'react'
import './Header.css'
import INITIAL from '../../assets/initial.png'
import WALIMAH from '../../assets/walimah_khat.png'
import DAY_DATE from '../../assets/day_date.png'
import FLOWERS from '../../assets/page1/petal.GIF'

const Header = () => {
  return (
    <div className='main__header'>
      <div className='main__header-title'>
        <img src={WALIMAH} alt="" />
      </div>
      <div className='main__header-pengantin'>
        <img src={INITIAL} alt="" />
        <img src={FLOWERS} alt="" className='petals' />
      </div>

      <div className='main__header-venue'>
        <img src={DAY_DATE} alt="" />
      </div>
    </div>
  )
}

export default Header