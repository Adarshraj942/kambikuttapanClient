/* eslint-disable no-mixed-operators */
/* eslint-disable no-unused-expressions */
import { Modal, useMantineTheme } from '@mantine/core'
import { useRef, useState } from 'react'
import { UilTimes } from '@iconscout/react-unicons'
import { getPreSignedUrlUtill } from '../../utils/s3.utils'
import { appConfig } from '../../config/appConfig'

function ProfileModal({ modalOpened, setModalOpened, authData }) {
  const theme = useMantineTheme()

  const [image, setImage] = useState({
    pImg: null,
    cImg: null,
  })
  const imageRef = useRef()

  const [userData, setUserData] = useState({
    ...authData?.data,
  })

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value })
  }

  const onImageChange = async (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0]
      setImage({
        ...image,
        [event.target.name]: URL.createObjectURL(img) ?? '',
      })
      // setImage(URL.createObjectURL(img))

      const imageData = await getPreSignedUrlUtill(img)
      setUserData({ ...userData, [event.target.name]: imageData ?? '' })
      console.log(imageData, 'image-image')
    }
  }

  return (
    <Modal
      overlayColor={
        theme.colorScheme === 'dark'
          ? theme.colors.dark[9]
          : theme.colors.gray[2]
      }
      overlayOpacity={0.55}
      overlayBlur={3}
      size="55%"
      opened={modalOpened}
      onClose={() => setModalOpened(false)}
    >
      <form className="infoForm">
        <h3>Your info</h3>

        <div style={{ marginTop: '20px', height: '4rem' }}>
          <div style={{ display: 'grid', width: '100%' }}>
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              onChange={handleChange}
              className="infoInput"
              name="firstName"
              id="firstName"
              placeholder="First Name"
              value={userData.firstName}
            />
          </div>

          <div style={{ display: 'grid', width: '100%' }}>
            <label htmlFor="firstName">Last Name</label>
            <input
              type="text"
              onChange={handleChange}
              className="infoInput"
              name="lastName"
              id="lastName"
              placeholder="Last Name"
              value={userData.lastName}
            />
          </div>
        </div>

        <div style={{ marginTop: '20px', height: '4rem' }}>
          <div style={{ display: 'grid', width: '100%' }}>
            <label htmlFor="userName">UserName</label>
            <input
              type="text"
              onChange={handleChange}
              className="infoInput"
              name="userName"
              id="userName"
              placeholder="User Name"
              value={userData.userName}
            />
          </div>
        </div>

        <div style={{ marginTop: '20px', height: '4rem' }}>
          <div style={{ display: 'grid', width: '100%' }}>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              onChange={handleChange}
              className="infoInput"
              name="email"
              placeholder="Email"
              value={userData.email}
            />
          </div>

          <div style={{ display: 'grid', width: '100%' }}>
            <label htmlFor="phoneNumber">PhoneNumber</label>
            <input
              type="text"
              onChange={handleChange}
              className="infoInput"
              id="phoneNumber"
              name="phoneNumber"
              placeholder="PhoneNumber"
              value={userData.phoneNumber}
            />
          </div>
        </div>

        <div style={{ marginTop: '20px', height: '4rem' }}>
          <div style={{ display: 'grid', width: '100%' }}>
            <label htmlFor="profileImage">ProfileImage</label>
            <input
              id="profileImage"
              type="file"
              name="profileImg"
              className="infoInput"
              ref={imageRef}
              onChange={onImageChange}
            />
            {userData?.profileImage ||
              (image.pImg && (
                <div className="previewImage">
                  <UilTimes
                    onClick={(event) => {
                      setImage({
                        ...image,
                        [event.target.name]: null,
                      }),
                        setUserData({ ...userData, [event.target.name]: null })
                    }}
                  />
                  <img
                    src={
                      image.pImg
                        ? image.pImg
                        : userData?.profileImage
                        ? `${appConfig.awsBucketUrl}/${userData?.profileImage}`
                        : ''
                    } 
                    alt="profileImage"
                  />
                </div>
              ))}
          </div>

          <div style={{ display: 'grid', width: '100%' }}>
            <label htmlFor="coverImage">CoverImage</label>
            <input
              id="coverImage"
              type="file"
              name="profileImg"
              className="infoInput"
              placeholder="PhoneNumber"
              ref={imageRef}
              onChange={onImageChange}
            />
             {userData?.coverImage ||
              (image.cImg && (
                <div className="previewImage">
                  <UilTimes
                    onClick={(event) => {
                      setImage({
                        ...image,
                        [event.target.name]: null,
                      }),
                        setUserData({ ...userData, [event.target.name]: null })
                    }}
                  />
                  <img
                    src={
                      image.cImg
                        ? image.cImg
                        : userData?.coverImage
                        ? `${appConfig.awsBucketUrl}/${userData?.coverImage}`
                        : ''
                    } 
                    alt="profileImage"
                  />
                </div>
              ))}
          </div>
        </div>

        <button className="button infoButton">Update</button>
      </form>
    </Modal>
  )
}

export default ProfileModal
