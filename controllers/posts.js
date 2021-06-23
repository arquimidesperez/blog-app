import Post from '../models/post.js'

export const getPosts = async (req, res) => {
  try {
    const posts = await Post.find()
    res.json(posts)
  } catch (error) {
    console.log(error.message)
    res.status(500).json({ error: error.message })
  }
}

export const getPost = async (req, res) => {
  try {
    const { id } = req.params
    const post = await Post.findById(id)
      // .populate('userId')
    if (post) {
      return res.json(post)
    }
    res.status(404).json({ message: 'Post not found!' })
  } catch (error) {
    console.log(error.message)
    res.status(500).json({ error: error.message })
  }
}

export const createPost = async (req, res) => {
  try {
    const post = new Post(req.body)
    await post.save()
    res.status(201).json(post)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: error.message })
  }
}

export const updatePost = async (req, res) => {
  const { id } = req.params
  const post = await Post.findByIdAndUpdate(id, req.body, { new: true })
  res.status(200).json(post)
}

export const deletePost = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Post.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send('Post deleted')
    }
    throw new Error('Post not found')
  } catch (error) {
    console.log(error.message)
    res.status(500).json({ error: error.message })
  }
}