import React, { useState } from 'react'
import './ProfilePage.css'
import Image from "../../components/image/image"; 
import Collections from '../../components/Collections/Collections'
import Gallery from '../../components/Gallery/Gallery'
const ProfilePage = () => {
  const [type,setType] =useState("saved")
  return (
    <div className='ProfilePage'>
      <Image className="profileImg" 
      w={100}
      h={100}
      path="/general/noAvatar.png" />
      <h1 className="profileName">John Doe</h1>
      <span className='profileUsername'>@johndoe</span>
      <div className='followcounts'> 10 follower  .20 followings</div>
      <div className="profileInteractions">
        <Image path="/general/share.png" />
        <div className="profileButton">
        <button>Message</button>
        <button>follow</button>
        </div>
        <Image path="/general/more.png" />
      </div>
      <div className="profileOptions">
        <span onClick={()=>setType("created")} className={type === "created"?"active": ""}>Created</span>
        <span onClick={()=>setType("saved")} className={type === "saved"?"active": ""}>Saved</span>
      </div>
      {type==="created" ? <Gallery /> : <Collections /> }
    </div>
  )
}

export default ProfilePage
