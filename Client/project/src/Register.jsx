import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3000/register', {name, email, password})
        .then(res => {
            navigate('/login')
        }).catch(err => console.log(err))
    }

    return (
        <div>
            <h1>
                register
            </h1>
            <div className='text-center'>
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor='name'>
                            <strong>Name</strong>
                        </label>
                        <input type='text'
                            placeholder='Enter your name'
                            name='name'
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    <div className='mb-3'>
                        <label htmlFor='email'>
                            <strong>Email</strong>
                        </label>
                        <input type='text'
                            placeholder='enter ur email'
                            name='email'
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='password'>
                            <strong>Password</strong>
                        </label>
                        <input type="text"
                            placeholder='enter password'
                            name='password'
                            onChange={(e) => setPassword(e.target.value)}
                        />

                    </div>
                    <div>
                        <button type='submit'>Register</button>
                    </div>

                    <p>Already have an account?</p>
                    <Link to="/login" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
                        Login
                    </Link>




                </form>
            </div>
        </div>
    )
}

export default Register