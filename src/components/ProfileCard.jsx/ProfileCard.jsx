import React, { useEffect } from 'react'
import Cover from '../../img/cover.jpg'
import Profile from '../../img/profileImg.jpg'
import './ProfileCard.css'
import { useSelector } from 'react-redux'

const ProfileCard = () => {
  const authData = useSelector((state) => state.authReducer.authData)
  const ProfilePage = true

  useEffect(() => {
    if (!authData?.data) {
    }
  }, [authData])
  return (
    <div className="ProfileCard" style={{ color: 'black' }}>
      <div className="ProfileImages">
        <img src={authData?.data?.coverImage ?? Cover} alt="" />
        <img src={authData?.data?.profileImage ?? Profile} alt="" />
      </div>

      <div className="ProfileName">
        <span> {authData?.data?.userName} </span>
        <span>{`${authData?.data?.firstName} ${authData?.data?.lastName}`}</span>
      </div>

      <div className="followStatus">
        <hr />
        <div>
          <div className="follow">
            <span>{authData?.data?.followings}</span>
            <span>Followings</span>
          </div>
          <div className="vl"></div>
          <div className="follow">
            <span>{authData?.data?.followers}</span>
            <span>Followers</span>
          </div>

          {ProfilePage && (
            <>
              <div className="vl"></div>
              <div className="follow">
                <span>{authData?.data?.posts}</span>
                <span>Posts</span>
              </div>
            </>
          )}
        </div>
        <hr />
      </div>
      {ProfilePage ? '' : <span>My Profile</span>}
    </div>
  )
}

export default ProfileCard
