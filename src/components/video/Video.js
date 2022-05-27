import React from 'react'
import './_video.scss'
import {AiFillEye} from 'react-icons/ai'

const Video = () => {
  return (
    <div className='video'>
      <div className='__top'>
      <img src='https://i.ytimg.com/vi/6ZfuNTqbHE8/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCCFksaGXu1MJxNlQBhD1J22vqqng' alt='infinity war' />
      <span style={{opacity: '90%'}}>05:34</span>
        </div>

      <div className='__title'>
        Marvel Studios' Avengers: Infinity War
      </div>

      <div className='__details'>
        <span>
          <AiFillEye />
          <span>1.2M Views • </span>
        </span>
        <span>
          1 Year Ago
          </span>

      </div>
      <div className='__channel'>
        <img src='https://yt3.ggpht.com/fGvQjp1vAT1R4bAKTFLaSbdsfdYFDwAzVjeRVQeikH22bvHWsGULZdwIkpZXktcXZc5gFJuA3w=s68-c-k-c0x00ffffff-no-rj' alt='marvel' />
        <p>Marvel Studios</p>
      </div>
    </div>
  )
}

export default Video