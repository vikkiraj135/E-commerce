import React from 'react'
import './Hero.css'
import hand_icon from "../Assets/hand_icon.png"
import arrow_icon from '../Assets/arrow icon.png'
import hero_image from '../Assets/hero.jpeg'


const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
         <h2>NEW ARRIVALS ONLY</h2>
         <div>
            <div className="hero-hand-icon">
                <p>New</p>
                <img src={hand_icon} alt="" width={60} />
            </div>
            <p>Collections</p>
            <p>for everyone</p>
         </div>
         <div className="hero-letest-btn">
            <div>Letest collections</div>
            <img src={arrow_icon} alt="" width={30}/>
         </div>
        </div>
        <div className="hero-right">
            <img src={hero_image} alt="" width={500}/>
        </div>
      
    </div>
  )
}

export default Hero
