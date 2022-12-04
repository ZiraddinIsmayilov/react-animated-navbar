import React from 'react'
import { posts } from './data'
import Card from './Card.js'
function Home() {
  return (
    <div className='home'>{posts.map(post=> <Card key={post.id} post={post}/> )}</div>
  )
}

export default Home