import React from 'react'
import Header from '../Header/Header'
import './Hero.css'
import hero_image from '../../assets/hero_image.png'
import hero_image_back from '../../assets/hero_image_back.png'
import Heart from '../../assets/heart.png'
import Calories from '../../assets/calories.png'


const Hero = () => {

  return (
    <div className='hero'>
      <div className='left-h'>
        <Header />
        {/* the best ad */}
        <div className="the-best-ad">
            <div></div>
            <span>The best fitness club in Africa</span>
        </div>

        {/* Hero heading */}
        <div className="hero-text">
            <div>
                <span className='stroke-text'>Shape </span>
                <span>Your</span>
            </div>
            <div>
                <span>Desired body</span>
            </div>
            <div>
              <span>HERE, WE ARE GONNA HELP YOU SHAPE AND BUILD YOUR IDEAL BODY AND LIVE YOUR LIFE TO THE FULLEST.</span>
            </div>
        </div>
        {/* Figures */}
        <div className="figures">
          <div>
            <span>+180</span>
            <span>expert coaches</span>
          </div>
          <div>
            <span>+1978</span>
            <span>members joined</span>
          </div>
          <div>
            <span>+250</span>
            <span>fitness programs</span>
          </div>
        </div>

        {/* Hero Button */}
        <div className="hero-buttons">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>

      </div>
      <div className='right-h'>
        <button className="btn">Join Now</button>

        <div className="heart-rate">
          <img src={Heart} alt="Heart" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </div>

        {/* hero images */}

        <img src={hero_image} alt="hero-img" className='hero-image'  />
        <img src={hero_image_back} alt="hero-img-back" className='hero-image-back' />

        {/* Calories */}

        <div className="calories">
          <img src={Calories} alt="calories" />
          <div>
            <span>Calories Burned</span>
            <span>220 kcal</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
