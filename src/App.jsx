import React from 'react'
import Header from './components/header/header.component'
import Nav from './components/nav/nav.component'
import About from './components/about/about.component'
import Experience from './components/experience/experience.component'
import Services from './components/services/services.component'
import Portfolio from './components/portfolio/portfolio.component'
import Testimonials from './components/testimonials/testimonial.component'
import Contact from './components/contact/contact.component'


const app = () => {
  return (
      
    <>
       <Header />
       <Nav />
       <About />
       <Experience />
       <Services />
       <Portfolio />
       <Testimonials />

    </>
  )
}

export default app