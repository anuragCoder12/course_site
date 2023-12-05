import React from 'react'
import './Courses.css'


function Courses() {
  return (
    <div className='all-course'>
        <div className="about-course">
        <h2>Our courses</h2>
        <p>Top trending courses with free certification</p>
       </div>
       <div className="courses">
        <ul>
          <li>Web development</li>
          <li>Mobile app development</li>
          <li>Data science</li>

        </ul>
       </div>
      
    </div>
  )
}

export default Courses
