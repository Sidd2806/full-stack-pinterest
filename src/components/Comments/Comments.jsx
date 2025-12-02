import React, { useState } from 'react'
import './Comments.css'
import Image from '../image/image'
import EmojiPicker from 'emoji-picker-react'; 
const Comments = () => {
  const [open,setOpen]=useState(false);
  return (
    <div className='Comments'>
      <div className="commentList">
        <div className="commentCount">5 count</div>
        {/* comment  */}
        <div className="comment">
          <Image path="/general/noAvatar.png" alt="" />
          <div className="commentContent">
            <span className='commentUsername'>Emily</span>
            <p className='commentText'>Love this color palette — saving for later!</p>
           <span className='commenTime'>1hr</span> 
          </div>
        </div>
        <div className="comment">
          <Image path="/general/noAvatar.png" alt="" />
          <div className="commentContent">
            <span className='commentUsername'>Marcus</span>
            <p className='commentText'>Amazing shot — where was this taken?</p>
           <span className='commenTime'>2hr</span> 
          </div>
        </div>
        <div className="comment">
          <Image path="/general/noAvatar.png" alt="" />
          <div className="commentContent">
            <span className='commentUsername'>Priya</span>
            <p className='commentText'>This is perfect inspiration for my kitchen remodel.</p>
           <span className='commenTime'>3hr</span> 
          </div>
        </div>
        <div className="comment">
          <Image path="/general/noAvatar.png" alt="" />
          <div className="commentContent">
            <span className='commentUsername'>Liam</span>
            <p className='commentText'>Stunning composition — love the lighting.</p>
           <span className='commenTime'>5hr</span> 
          </div>
        </div>
        <div className="comment">
          <Image path="/general/noAvatar.png" alt="" />
          <div className="commentContent">
            <span className='commentUsername'>Ava</span>
            <p className='commentText'>Saved to my travel board — amazing scenery!</p>
           <span className='commenTime'>1d</span> 
          </div>
        </div>
      </div>
      <form className='commentForm'>
        <input type="text" placeholder='Add a comment' />
        <div className="emoji">
          <div onClick={()=>setOpen(prev=>!prev)}>😊</div>
          {open && <div className="emojiPicker">
            <EmojiPicker />
          </div>}
        </div>
      </form>
    </div>
  )
}

export default Comments
