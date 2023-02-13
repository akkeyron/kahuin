import React from 'react'
import './Invite.css'

// assets
import BISMILLAH from '../../assets/page2/bismillah.png'
import MIRA_LOQMAN from '../../assets/page2/mira_loqman.png'
import GELARAN from '../../assets/page2/gelaran.png'
import PARENTS from '../../assets/page2/mak_abah.png'
import SYUKUR from '../../assets/page2/syukur.png'
import FLOWERS from '../../assets/page1/petal.GIF'
import PINK from '../../assets/page2/pink_flower.png'
import WHITE from '../../assets/page2/white_flower.png'

const Invite = () => {
    return (
        <>
            <div className='invite-container'>
                <div className='invite__assets-bismillah'>
                    <img src={BISMILLAH} alt="" />
                </div>
                <div className='invite__assets-syukur'>
                    <img src={SYUKUR} alt="" />
                </div>
                <div className='invite__assets-parents'>
                    <img src={PARENTS} alt="" />
                </div>
                <div className='invite__assets-gelaran'>
                    <img src={GELARAN} alt="" />
                </div>
                <div className='invite__assets-pengantin'>
                    <img src={MIRA_LOQMAN} alt="" />
                    <img src={FLOWERS} alt="" className='petals' />
                </div>

            </div>

        </>


    )
}

export default Invite