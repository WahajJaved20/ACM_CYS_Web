import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import './App.css'

function Login() {
    const location = useLocation();
  return (
    <>
      <div className="container" id="welcome-container" >
        <h2 className="single-line">Congratulations, you have successfully completed this challenge</h2>
        <div className="flag-block">
            <p>Here's your flag for this challenge: <strong className="bold-text">{location.state}</strong></p>
        </div>
      </div>
    </>
  )
}

export default Login
