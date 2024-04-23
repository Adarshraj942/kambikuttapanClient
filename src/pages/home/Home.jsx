/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import PostSide from '../../components/PostSide/PostSide'
import ProfileSide from '../../components/profileSide/ProfileSide'
import RightSide from '../../components/RightSide/RightSide'
import back from '../../img/wp4082523.webp'
import './Home.css'
import { useDispatch, useSelector } from 'react-redux'
import { getAllPosts } from '../../actions/post.actions'
const Home = () => {
  const authData = useSelector((state) => state.authReducer.authData)
  const dispatch = useDispatch()
  useEffect(async () => {
    const fetchData = async () => {
      try {
        await dispatch(getAllPosts())
        
      } catch (error) {
        console.error('Error fetching posts:', error)
      }
    }

    fetchData()
  }, [authData])

  return (
    <div className="Home" style={{ backgroundImage: `URL(${back})` }}>
      <ProfileSide />
      <PostSide />
      <RightSide />
    </div>
  )
}

export default Home
