import React from 'react'
import PostSide from '../../components/PostSide/PostSide'
import ProfileCard from '../../components/ProfileCard.jsx/ProfileCard'
import ProfileLeft from '../../components/ProfileLeft/ProfileLeft'
import RightSide from '../../components/RightSide/RightSide'
import back from "../../img/wp4082523.webp"
import './Profile.css'
const Profile = () => {
  return (
    <div className="Profile" style={{backgroundImage:`URL(${back})`}}>
        <ProfileLeft/>

        <div className="Profile-center">
            <ProfileCard/>
           <div style={{display:"flex",flexDirection:"row",}}>
           <button className="button ps-button" style={{marginLeft:"1rem"}}>Saved</button>
            <button className="button ps-button" style={{marginLeft:"1rem"}}>Draft</button>
            <button className="button ps-button" style={{marginLeft:"1rem"}}>Publised</button>
            <button className="button ps-button" style={{marginLeft:"1rem"}}>Edited</button>
           </div>
            <PostSide/>
        </div>

        <RightSide/>
    </div>
  )
}

export default Profile