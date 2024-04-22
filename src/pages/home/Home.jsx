import React from 'react'
import PostSide from '../../components/PostSide/PostSide'
import ProfileSide from '../../components/profileSide/ProfileSide'
import RightSide from '../../components/RightSide/RightSide'
import back from '../../img/wp4082523.webp'
import './Home.css'
import { useSelector } from 'react-redux'
const Home = () => {
  const authData = useSelector((state) => state.authReducer.authData)

  console.log(authData,"authData");



  return (
    <div className="Home" style={{ backgroundImage: `URL(${back})` }}>
      <ProfileSide  />
      <PostSide />
      <RightSide />
    </div>
  )
}

export default Home
