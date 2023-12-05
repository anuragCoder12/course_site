import React from 'react'
import './App.css'
import Header from './header/Header'
import Footer from './footer/Footer'
import Home from './components/pages/home/Home'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Pricing from './components/pages/pricing/Pricing'
import Courses from './components/pages/courses/Courses'


function App() {
  return (

    <div>
      <Router>
      <Header/>
        <Routes>
          <Route path='/' Component={Home}/>
          <Route path='/course_site' Component={Home}/>
          <Route path='/services' Component={Pricing}/>
          <Route path='/courses' Component={Courses}/>
         
        </Routes>
        <Footer/>
      </Router>
  
  
   
    </div>
  )
}

export default App
