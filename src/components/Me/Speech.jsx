import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import { motion } from "motion/react"

const Speech = () => {
    return (
        <motion.div animate={{opacity:[0,1]}} transition={{duration:1,}} className='bubbleContainer'>
            <div className="bubble">
                <TypeAnimation
                    sequence={[
                        1000,
                        'I am a passionate front-end developer focused on creating responsive, user-friendly interfaces',
                        1000,
                        'and seamless user experiences through clean code and innovative design.',
                        1000,

                    ]}
                    wrapper="span"
                    speed={50}
                    style={{ fontSize: '16px', display: 'inline-block' }}
                    repeat={Infinity}
                />
            </div>
            <img src="/me.png" alt="" />
        </motion.div>
    )
}

export default Speech