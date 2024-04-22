import React from 'react'
import PostSide from '../../components/PostSide/PostSide'
import ProfileSide from '../../components/profileSide/ProfileSide'
import RightSide from '../../components/RightSide/RightSide'
import back from "../../img/wp4082523.webp"
import './Home.css'
const Home = () => {
  return (
    <div className="Home" style={{backgroundImage:`URL(${back})`,}}>
        <ProfileSide/>
        <PostSide/>
        <RightSide/>
    </div>
  )
}

export default Home