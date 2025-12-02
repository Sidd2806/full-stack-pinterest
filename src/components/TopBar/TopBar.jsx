import React from 'react'
import './TopBar.css'
import UserButton from '../userButton/userButton'
import Image from '../image/image'
const TopBar = () => {
  return (
    <div className='topBar'>
      {/* search waala banate hai  */}
      <div className='search'>
      <Image path="/general/search.svg" alt="" />
      <input type="text" placeholder='Search'/>
      </div>
      {/* user details ya profile banana hai  */}
      <div>
      <UserButton />
      </div>
    </div>
  )
}
export default TopBar
