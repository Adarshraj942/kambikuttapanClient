import React, { useState } from 'react'
// import Razorpay from 'razorpay'
import './Post.css'
import Comment from '../../img/comment.png'
import Share from '../../img/share.png'
import Heart from '../../img/like.png'
import NotLike from '../../img/notlike.png'
import { useSelector } from 'react-redux'
import { createPayment, likeAndCommentPost } from '../../api/postRequest'
import { appConfig } from '../../config/appConfig'
import { useNavigate } from 'react-router-dom'
import { path } from '../../paths/paths'
import CommentModel from '../CommentModal/CommentModel'

const Post = ({ data }) => {
  const navigate = useNavigate()
  // const dispatch = useDispatch()
  const { user } = useSelector((state) => state.authReducer.authData)
  const [liked, setLiked] = useState(data?.isLiked)
  const [likes, setLikes] = useState(data?.likes)
  const [modalOpened, setModalOpened] = useState(false)

  const handleSelect = async () => {
    if (!data?.isFree && !data?.isPaid) {
      const res = await createPayment({
        postId: data?._id,
      })

      // console.log(res, 'responseddd')

      // const options = {
      //   key: 'rzp_test_w5XnOXa3pTEdZE',
      //   amount: res?.amount,
      //   currency: res?.currency,
      //   name: 'Your Company Name',
      //   description: 'Test Transaction',
      //   order_id: res?.id,
      //   handler: function (response) {
      //     alert(
      //       `Payment Successful! Payment ID: ${response?.razorpay_payment_id}`,
      //     )
      //   },
      //   prefill: {
      //     name: 'Your Name',
      //     email: 'your.email@example.com',
      //     contact: '9999999999',
      //   },
      //   notes: {
      //     address: 'Your Address',
      //   },
      //   theme: {
      //     color: '#3399cc',
      //   },
      // }

      // const rzp = new Razorpay(options)
      // rzp.open()

      alert('need to pay')
    } else {
      navigate(path.singlePost, { state: { postId: data?._id } })
    }
  }
 
  const handleLike = () => {
    setLiked((prev) => !prev)
    likeAndCommentPost(data?._id, user?._id)
    liked ? setLikes((prev) => prev - 1) : setLikes((prev) => prev + 1)
  }
  return (
    <div className="Post">
      <img
        onClick={handleSelect}
        src={`${appConfig.awsBucketUrl}/${data?.image}`}
        alt="story"
      />

      <div className="postReact">
        <img
          src={liked ? Heart : NotLike}
          className="likeImg"
          alt=""
          onClick={handleLike}
        />
        <img onClick={() => setModalOpened(true)} src={Comment} alt="" />
        <img src={Share} alt="" />
      </div>

      <span style={{ color: 'var(--gray)', fontSize: '12px' }}>
        {likes} likes
      </span>

      <div className="detail">
        <p className="truncate">
          <b>{data?.title}</b>
        </p>
        <p className="truncate">{data?.summary}</p>
        <CommentModel
          modalOpened={modalOpened}
          setModalOpened={setModalOpened}
          comments={data?.comments}
          postId={data?._id}
        />
      </div>
    </div>
  )
}

export default Post
