import React, { useState } from 'react'
import './Post.css'
import Comment from '../../img/comment.png'
import Share from '../../img/share.png'
import Heart from '../../img/like.png'
import NotLike from '../../img/notlike.png'
import { useSelector } from 'react-redux'
import { likeAndCommentPost } from '../../api/postRequest'

const Post = ({ data }) => {
  const { user } = useSelector((state) => state.authReducer.authData)
  const [liked, setLiked] = useState(data?.isLiked)
  const [likes, setLikes] = useState(data?.likes)

  const handleSelect = () => {
    if (!data?.isFree && !data?.isPaid) {
      alert('need to pay')
    }
  }

  const handleLike = () => {
    setLiked((prev) => !prev)

    likeAndCommentPost(data?._id, user?._id)
    liked ? setLikes((prev) => prev - 1) : setLikes((prev) => prev + 1)
  }
  return (
    <div onClick={handleSelect} className="Post">
      <img src={data?.image} alt="" />

      <div className="postReact">
        <img
          src={liked ? Heart : NotLike}
          className="likeImg"
          alt=""
          onClick={handleLike}
        />
        <img src={Comment} alt="" />
        <img src={Share} alt="" />
      </div>

      <span style={{ color: 'var(--gray)', fontSize: '12px' }}>
        {likes} likes
      </span>

      <div className="detail">
        <span>
          <b>{data?.title}</b>
        </span>
        <span> {data?.summary}</span>
      </div>
    </div>
  )
}

export default Post
