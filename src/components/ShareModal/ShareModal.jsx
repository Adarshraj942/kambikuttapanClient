import { Modal, useMantineTheme } from '@mantine/core'
import PostShare from '../PostShare/PostShare'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createPost } from '../../actions/post.actions'

function ShareModal({ modalOpened, setModalOpened }) {
  const theme = useMantineTheme()
  const dispatch = useDispatch()
  // const [image, setImage] = useState(null)

  const [data, setData] = useState({
    title: '',
    summary: '',
    story: '',
    image: null,
  })
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }
  const handleSubmit = async (e) => {
    // e.preventDefault()
    dispatch(
      createPost({
        ...data,
      }),
    )
    // console.log(data, 'datassss',isSuccess)
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
      <PostShare data={data} setData={setData} />
      <div className="a-right">
        <form onSubmit={handleSubmit} className="infoForm authForm">
          <h3>Post story</h3>

          <div>
            <input
              type="text"
              placeholder="Title"
              className="infoInput"
              name="title"
              required
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Summary"
              className="infoInput"
              name="summary"
              required
              onChange={handleChange}
            />
          </div>

          <div>
            <input
              type="textArea"
              className="infoInput"
              name="story"
              placeholder="Story"
              required
              style={{ height: '10rem', marginTop: '11rem' }}
              onChange={handleChange}
            />
          </div>

          <button
            className="button infoButton"
            type="submit"
            style={{ marginTop: '10rem' }}
          >
            Share
          </button>
        </form>
      </div>
    </Modal>
  )
}

export default ShareModal
