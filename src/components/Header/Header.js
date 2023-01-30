import React from 'react'
import './Header.css'
import IMG from '../../assets/header.PNG'
import TITLE from '../../assets/walimah.PNG'

const Header = () => {
  return (
    <header className='main__header'>
      <div className='main__header-title'>
        <img src={TITLE} />

      </div>
      <div className='main__header-pengantin'>
        
      </div>

      <div className='main__header-venue'>

      </div>
    </header>
  )
}

export default Header