import React from 'react'
import './PostInteractions.css'
import Image from '../image/image'
const PostInteractions = () => {
  return (
    <div className='PostInteractions'>
      <div className="interactionIcons">
        <Image path="/general/react.svg" alt="" />
        273
        <Image path="/general/share.svg" alt="" />
        <Image path="/general/more.svg" alt="" />
      </div>
      <button>Save</button>
    </div>
  )
}

export default PostInteractions
