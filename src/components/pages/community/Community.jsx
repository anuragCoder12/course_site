import React from 'react'
import './Community.css'
import image from '../../assets/corporate-team-working-remotely-online-600nw-1922213237.webp'
import Pricing from '../pricing/Pricing'

function Community() {
  return (
    <div>
      <div className="community">
        
        <div className="community-img">
            <img src={image} alt="" />
        </div>
        <div className="community-text">
            <h2>Join our tech community</h2>
            <p>We encourage you to join our growing community</p>
            <button>Join with us</button>
        </div>
      </div>
      
    </div>
  )
}

export default Community
