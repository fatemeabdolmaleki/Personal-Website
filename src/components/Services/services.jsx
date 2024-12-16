import React, { useRef, useState } from 'react'
import "./services.css"
import ComputerModelContainer from './computer/ComputerModelContainer'
import Counter from './Counter'
import { animate, motion, stagger, useInView } from "motion/react"

const textVariants={
  initial:{
    x:-100,
    y:-100,
    opacity:0,
  },
  animate:{
    x:0,
    y:0,
    opacity:1,
    transition:{
      duration:1,
    }
  }
}
const ListVariants={
  initial:{
    x:-100,
    opacity:0,
  },
  animate:{
    x:0,
    opacity:1,
    transition:{
      duration:1,
      staggerChildren:0.5,
    }
  }
}


const Skills=[
  {
    id:1,
    img:'/3.png',
    title:"HTML5",
    percent:'90 %'
  },
  {
    id:2,
    img:'/2.svg',
    title:"Css3",
    percent:'90 %'
  },
  {
    id:3,
    img:'/1.png',
    title:"JavaScript",
    percent:'80 %'
  },
  {
    id:4,
    img:'/5.png',
    title:"React",
    percent:'70 %'
  },
  {
    id:5,
    img:'/nextjs.svg',
    title:"Next . Js",
    percent:'70 %'
  },
  {
    id:6,
    img:'/tailwind-svgrepo-com.svg',
    title:"Tailwind",
    percent:'90 %'
  },

]

const Services = () => {
  const[currentSkillId,setCurrentSkillId]=useState(1)
  const ref =useRef()
  const isInView=useInView(ref,{margin:'-200px'})
  return (
    <div className='Services' ref={ref}>
      <div className='sSection left'>
        <motion.h1 variants={textVariants}  animate={isInView?'animate':'initial'} className='sTitle'>My Skills</motion.h1>
        <motion.div variants={ListVariants}  animate={isInView?'animate':'initial'} className="skillList">
          {
            Skills.map((val)=>{
              return(
                <motion.div variants={ListVariants} className='skill' key={val.id} onClick={()=>setCurrentSkillId(val.id)}>
                <div className='skillIcon'>
                  <img src={val.img} alt="" />
                </div>
                <div className='skillInfo'>
                  <h2>{val.title}</h2>
                  <h3>{val.percent}</h3>
                </div>
              </motion.div>
              )
            })
          }
        </motion.div>
        <div className='counterList'>
          <Counter from={0} to={24} text={'Projects Completed'}/>
          <Counter from={0} to={100} text={'Happy Clients'}/>
        </div>
      </div>
      <div className='sSection right'></div>
      <ComputerModelContainer/>
    </div>
  )
}

export default Services