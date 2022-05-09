import React from 'react'
import picture from "./myPicture.jpg"
const ProfilePhoto = () => {
  return (
    <div>
<img src={picture} style={{width:"200px"}} />
    </div>
  )
}

export default ProfilePhoto