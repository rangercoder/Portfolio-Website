import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/about'
import Experience from './components/Experience/Experience'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/portfolio'
import Testimonials from './components/testimonials/testimonials'
import Contact from './components/Contact/Contact'



const App = () => {
  return (
    <>
      <Header />
      <Nav />  
      <About/>
      <Experience />
      <Services/>
      <Portfolio/>
      <Testimonials/>
      <Contact/>



    </>
  )
}

export default App