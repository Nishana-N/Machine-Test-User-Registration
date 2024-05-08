import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <h4>Hello welcome to this page</h4>
        <div>
            <button ><Link to="/register">Register</Link></button>
            <button><Link to="/login">Login</Link></button>
        </div>
    </div>
  )
}

export default Home