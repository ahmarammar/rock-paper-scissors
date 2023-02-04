import React from 'react'
import triangle from "../../assets/images/bg-triangle.svg"
import rock from "../../assets/images/icon-rock.svg"
import paper from "../../assets/images/icon-paper.svg"
import scissors from "../../assets/images/icon-scissors.svg"

const Game = () => {
  return (
    <div className='flex justify-center mt-44 relative'>
      <img src={triangle} alt="" className='h-56'/>
      <img src={rock} alt="" className='absolute top-36 bg-white p-8 w-32 h-32 rounded-full ring-[1.2rem] ring-rockring' />
      <img src={paper} alt="" className='absolute bottom-36 left-4 bg-white p-8 w-32 h-32 rounded-full ring-[1.2rem] ring-paperRing' />
      <img src={scissors} alt="" className='absolute bottom-36 right-4 bg-white p-8 w-32 h-32 rounded-full ring-[1.2rem] ring-scissorsRing' />
    </div>
  )
}

export default Game