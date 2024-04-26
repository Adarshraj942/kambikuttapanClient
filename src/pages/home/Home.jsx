/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import PostSide from '../../components/PostSide/PostSide'
import ProfileSide from '../../components/profileSide/ProfileSide'
import RightSide from '../../components/RightSide/RightSide'
import back from '../../img/wp4082523.webp'
import './Home.css'
import { useDispatch, useSelector } from 'react-redux'
import { getAllPosts } from '../../actions/post.actions'
import { useNavigate } from 'react-router-dom'
import { path } from '../../paths/paths'
import { getLocalStorageItem } from '../../utils/appUtils'
const Home = () => {
  const userData = getLocalStorageItem('profile')
  const postData = useSelector((state) => state.postReducer.posts)

  const dispatch = useDispatch()
  const navigate = useNavigate()
  useEffect(async () => {
    const fetchData = async () => {
      try {
        if (!userData) {
          navigate(path.auth)
        } else {
          await dispatch(getAllPosts())
        }
      } catch (error) {
        console.error('Error fetching posts:', error)
      }
    }

    fetchData()
  }, [userData])

  return (
    <div className="Home" style={{ backgroundImage: `URL(${back})` }}>
      <ProfileSide />
      <PostSide postData={postData} />
      <RightSide />
    </div>
  )
}

export default Home
