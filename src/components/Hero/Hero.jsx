import React from 'react'
import Header from '../Header/Header'
import './Hero.css'
import hero_image from '../../assets/hero_image.png'
import hero_image_back from '../../assets/hero_image_back.png'
import Heart from '../../assets/heart.png'
import Calories from '../../assets/calories.png'
import {motion} from 'framer-motion'
import NumberCounter from 'number-counter' 


const Hero = () => {
  const transition = {type: 'spring', duration: 3}
  const mobile = window.innerWidth <=768? true: false;
  return (
    <div className='hero' id='home'>
    <div className="blur hero-blur"></div>
      <div className='left-h'>
        <Header />
        {/* the best ad */}
        <div className="the-best-ad">
            <motion.div
               initial={{left: mobile?'165px' : '238px'}}
               whileInView ={{left: '8px'}}
               transition={{...transition, type: 'tween'}}
            >
            </motion.div>
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
            <span>
              <NumberCounter end={1400} start={100} delay='200' prefix='+' />
            </span>
            <span>expert coaches</span>
          </div>
          <div>
            <span>
              <NumberCounter end={1978} start={100} delay='200' prefix='+' />
            </span>
            <span>members joined</span>
          </div>
          <div>
            <span>
              <NumberCounter end={2500} start={100} delay='200' prefix='+' />
            </span>
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

        <motion.div
            initial={{right: '1rem'}}
            whileInView={{right: '4rem'}}
            transition={transition}
            className="heart-rate">
            <img src={Heart} alt="Heart" />
            <span>Heart Rate</span>
            <span>116 bpm</span>
        </motion.div>

        {/* hero images */}

        <img src={hero_image} alt="hero-img" className='hero-image'  />
        <motion.img 
          initial={{right: '11rem'}}
          whileInView={{right: '20rem'}}
          transition={transition}
          src={hero_image_back} 
          alt="hero-img-back" 
          className='hero-image-back' />

        {/* Calories */}

        <motion.div 
            initial={{right: '37rem'}}
            whileInView={{right: '28rem'}}
            transition={transition}
            className="calories">
            <img src={Calories} alt="calories" />
            <div>
              <span>Calories Burned</span>
              <span>220 kcal</span>
            </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero
