import { useState, useEffect } from 'react'
// import './PostCards.css'
import Post from '../Post/Post'
import { getAllPosts } from '../../services/posts'

const PostCards = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
      const allPosts = await getAllPosts()
      setPosts(allPosts)
    }
    fetchPosts()
  }, [])

  const CARDS = posts
    .reverse()
    .map((post, id) =>
      id < 8 ? (
        <Post
          author={post.author}
          title={post.title}
          imgURL={post.imgURL}
          entryDate={post.entryDate}
          content={post.content}
          key={post._id}
        />
      ) : null
    )

  return (
    <div className='post-cards'>
      <div className='latest'>LATEST</div>
      <div className='cards'>{CARDS}</div>
    </div>
  )
}

export default PostCards
