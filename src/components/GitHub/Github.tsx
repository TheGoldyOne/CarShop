import React from 'react'

import './Github.scss'

import { FaGithub } from "react-icons/fa";

export default function Github() {
  return (
    <div className='github'>
      <a href="https://github.com/TheGoldyOne/CarShop">
        <FaGithub className='logo' />
        <div>
          <p><b>This project is open source</b></p>
          <p>Star and fork it on Github!</p>
        </div>
      </a>
    </div>
  )
}
