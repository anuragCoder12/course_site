import React from 'react'
import './Home.css'
import meta from '../home/assets/header_-7.webp'
import Courses from '../courses/Courses'
import Community from '../community/Community'
import Pricing from '../pricing/Pricing'

function Home() {
  return (
    <div>
     <div className="home">
        <div className="texts">
        <h1>Start Your Carrer With Us!!</h1>
        <p>Ready to build a wonderfull carrer in the feild of IT</p>
        <div className="btn">
            <button>Register</button>
            </div>
           
        
     </div>
     <div className="home-image">
              <img src={meta} alt="" />
            </div>
     
    </div>
    <Courses/>
    <Community/>
    <Pricing/>
    </div>
  )
}

export default Home
