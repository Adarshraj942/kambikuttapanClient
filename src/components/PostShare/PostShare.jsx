import React, { useState, useRef, useEffect } from 'react'
import ProfileImage from '../../img/profileImg.jpg'
import './PostShare.css'
import { UilScenery } from '@iconscout/react-unicons'
import { UilPlayCircle } from '@iconscout/react-unicons'
import { UilLocationPoint } from '@iconscout/react-unicons'
import { UilSchedule } from '@iconscout/react-unicons'
import { UilTimes } from '@iconscout/react-unicons'
import { useSelector } from 'react-redux'


const PostShare = ({data,setData}) => {
  const authData = useSelector((state) => state.authReducer.authData)

  const [image, setImage] = useState(null)
  const imageRef = useRef()


  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0]
      setImage(URL.createObjectURL(img))
      setData({
        ...data,
        image: img,
      })
      console.log(data,"appledderrff",URL.createObjectURL(img));
    }
  }

  return (
    <div className="PostShare">
      <img src={authData?.data?.profileImage ?? ProfileImage} alt="" />
      <div>
        <input type="text" placeholder="What's happening" />
        <div className="postOptions">
          <div
            className="option"
            style={{ color: 'var(--photo)' }}
            onClick={() => imageRef.current.click()}
          >
            <UilScenery />
            Photo
          </div>
          <div className="option" style={{ color: 'var(--video)' }}>
            <UilPlayCircle />
            Video
          </div>{' '}
          <div className="option" style={{ color: 'var(--location)' }}>
            <UilLocationPoint />
            Location
          </div>{' '}
          <div className="option" style={{ color: 'var(--shedule)' }}>
            <UilSchedule />
            Shedule
          </div>
          <button style={{ color: 'black' }} className="button ps-button">
            Share
          </button>
          <div style={{ display: 'none' }}>
            <input
              type="file"
              name="myImage"
              ref={imageRef}
              onChange={onImageChange}
            />
          </div>
        </div>
        {data?.image && (
          <div className="previewImage">
            <UilTimes onClick={() => setImage(null)} />
            <img src={image} alt="sdfsf" />
          </div>
        )}
      </div>
    </div>
  )
}

export default PostShare
