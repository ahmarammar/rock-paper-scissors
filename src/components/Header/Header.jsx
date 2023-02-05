import React from 'react'
import Score from './Score'
import logo from "../../assets/images/logo.svg"

const Header = ({winner}) => {

  return (
    <header className='p-6 border-4 border-headerOutline rounded-xl'>
      <div className='flex items-center justify-between'>
        <img src={logo} alt="Rock Paper Scissors" className='h-12'/>
        <Score winner={winner} />
      </div>
    </header>
  )
}

export default Header