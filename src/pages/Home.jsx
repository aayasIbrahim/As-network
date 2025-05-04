import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div >
        <h2 className='text-center'>Welcome to React Boilerplate</h2>
        <p className='text-center'>Install react-router-dom tailwind css react Hooks</p>
        <Link to="/login">Login</Link>

    </div>
  )
}

export default Home