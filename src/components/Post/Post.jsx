import React, { useState } from 'react'
import './Post.css'
import Comment from '../../img/comment.png'
import Share from '../../img/share.png'
import Heart from '../../img/like.png'
import NotLike from '../../img/notlike.png'
import { useSelector } from 'react-redux'
import { likeAndCommentPost } from '../../api/postRequest'
import { appConfig } from '../../config/appConfig'
import { useNavigate } from 'react-router-dom'
import { path } from '../../paths/paths'

const Post = ({ data }) => {
  const navigate = useNavigate()
  const { user } = useSelector((state) => state.authReducer.authData)
  const [liked, setLiked] = useState(data?.isLiked)
  const [likes, setLikes] = useState(data?.likes)

  const handleSelect = () => {
    if (!data?.isFree && !data?.isPaid) {
      alert('need to pay')
    } else {
      navigate(path.singlePost, { state: { postId: data?._id } });
    }
  }

  const handleLike = () => {
    setLiked((prev) => !prev)

    likeAndCommentPost(data?._id, user?._id)
    liked ? setLikes((prev) => prev - 1) : setLikes((prev) => prev + 1)
  }
  return (
    <div  className="Post">
      <img onClick={handleSelect} src={`${appConfig.awsBucketUrl}/${data?.image}`} alt="story" />

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
