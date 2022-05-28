import React from 'react'
import CTA from '../cta/cta.component';
import './header.styles.css'

const Header = () => {
  return (
    <header>
        <div className="container header__container">
            <h5>Hello, I'm</h5>
            <h1>Sam Mhondiwa</h1>
            <h5 className="text-light">FullStack Developer</h5>
            <CTA />
        </div>
    </header>
  )
}

export default Header