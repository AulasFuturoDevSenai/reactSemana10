import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Post from './Post.jsx'
import PostsLists from './PostsLists.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PostsLists />
  </StrictMode>,
)
