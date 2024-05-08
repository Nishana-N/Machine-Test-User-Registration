import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState();
    const [password, setPassword]= useState()
    const navigate = useNavigate();

    const handleSubmit =(e) => {
        e.preventDefault()
        axios.post("http://localhost:3000/login", {email, password})
        .then(res => {
            navigate('/')
        }).catch(err => console.log(err))
    }

  return (
    <div>
        <h4>Login</h4>
        <form onClick={handleSubmit}>
            <div className='mb-3'>
                <label htmlFor='email'>
                    <strong>Email</strong>
                </label>
                <input type='text'
                placeholder='enter email'
                name='email'
                onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className='mb-3'>
                <label htmlFor='password'>
                    <strong>password</strong>
                </label>
                <input type='password'
                placeholder='enter password'
                name='password'
                onChange={(e) => setPassword(e.target.value)}
                />

            </div>
            <div >
                <button type='submit'>Login</button>
            </div>
            <p>Don't have an account</p>
            <Link to="/register">register</Link>
        </form>
    </div>
  )
}

export default Login