import React, { Suspense } from 'react';
import './me.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import Speech from './Speech';
import { animate, motion, stagger } from "motion/react"
import { Canvas } from '@react-three/fiber';
import Shape from './Shape';



const awardVarients={
  initial:{
    x:-100,
    opacity:0
  },
  animate:{
    x:0,
    opacity:1,
    transition:{
      duration:1,
      staggerChildren:0.2,
    }

  }

}
const followVarients={
  initial:{
    y:-100,
    opacity:0
  },
  animate:{
    y:0,
    opacity:1,
    transition:{
      duration:1,
      staggerChildren:0.2,
    }

  }

}

const Me = () => {
  return (
    <div className='me'>
      <div className='msection left'>
        <motion.h1 initial={{y:-100,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:1}} className='mTitle'>Hey There,
          <br />
          <span>I'm Fateme!</span>
        </motion.h1>
        <motion.div variants={awardVarients} initial="initial" animate="animate" className="awards">
          <motion.h2 variants={awardVarients}>A Passionate Frontend Developer</motion.h2>
          <motion.p variants={awardVarients}>who works with modern technologies to craft engaging, responsive, and user-friendly web interfaces.</motion.p>
          <motion.div className="awardList">
            <motion.img variants={awardVarients} src="/1.png" alt="Award 1"  />
            <motion.img variants={awardVarients} src="/2.svg" alt="Award 2"  />
            <motion.img variants={awardVarients} src="/3.png" alt="Award 3"  />
          </motion.div>
        </motion.div>
        <motion.a animate={{y:[0,5],opacity:[0,1,0]}} transition={{repeat:Infinity, duration:4,ease:'easeInOut'}} href="#services" className='scroll'>
          <svg width='50px' height='50px' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            <path d="M50,5C36.215,5,25,16.215,25,30L25,70C25,83.785,36.215,95,50,95S75,83.785,75,70L75,30C75,16.215,63.785,5,50,5ZM72.5,70C72.5,82.406,62.407,92.5,50,92.5S27.5,82.406,27.5,70L27.5,30C27.5,17.594,37.593,7.5,50,7.5S72.5,17.594,72.5,30L72.5,70Z" />
            <motion.path animate={{y:[0,5]}} transition={{repeat:Infinity, duration:4,ease:'easeInOut'}}  d="M59.558,59.558L50.625,68.492L50.625,30L49.375,30L49.375,68.491L40.442,59.557C40.198,59.313,39.802,59.313,39.558,59.557S39.314,60.198,39.558,60.442L49.558,70.442C49.68,70.564,49.84,70.625,50,70.625S50.32,70.564,50.442,70.442L60.442,60.442C60.686,60.198,60.686,59.801,60.442,59.557S59.802,59.313,59.558,59.558Z" />
          </svg>
        </motion.a>
      </div>
      <div className='msection right'>
        <motion.div variants={followVarients} initial='initial' animate='animate' className="social">
          <motion.a variants={followVarients} href="https://github.com/fatemeabdolmaleki" target="_blank" rel="noopener noreferrer">
            <GitHubIcon />
          </motion.a>
          <motion.a variants={followVarients} href="https://www.linkedin.com/in/fateme-abdolmaleki/" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon />
          </motion.a>
          <motion.a variants={followVarients} href="https://www.instagram.com/fatemeabdolmaleki_" target="_blank" rel="noopener noreferrer">
            <InstagramIcon />
          </motion.a>
          <motion.div variants={followVarients} className='socialTextContainer'>
            <div className='socialText'>Follow me</div>
          </motion.div>
        </motion.div>
        <Speech />
        {/* //contact BUTTON// */}
        < motion.a animate={{x:[200,0],opacity:[0,1]}} transition={{duration:2,}} href="#contact" className='contactLink'>
          <motion.div animate={{rotate:[0,360]}} transition={{duration:10,repeat:Infinity,ease:'linear',}} className="contactButton">
            <svg viewBox="0 0 200 200" width="150" height="150">
              <circle cx="100" cy="100" r="90" fill="pink" />
              <path
                id="innerCirclePath"
                fill="none"
                d="M 100,100 m -60,0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
              />
              <text className="circleText">
                <textPath href="#innerCirclePath">Hire Now •</textPath>
              </text>
              <text className="circleText">
                <textPath href="#innerCirclePath" startOffset="44%">
                  Contact Me •
                </textPath>
              </text>
            </svg>
            <div className="arrow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="50"
                height="50"
                fill="none"
                stroke="black"
                strokeWidth="2"
              >
                <line x1="6" y1="18" x2="18" y2="6" />
                <polyline points="9 6 18 6 18 15" />
              </svg>
            </div>
          </motion.div>
        </motion.a>
      </div>
      <div className='bg'>
        {/* 3d// */}
        <Canvas>
          <Suspense fallback='Loading....'>
          <Shape/>
          </Suspense>
        </Canvas>
        <div className='mImg'>
          <img src="/me1.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Me;
