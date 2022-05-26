import React from 'react'
import {Link} from 'react-router-dom'

function Footer() {
  return (
    <div className='footer'>
      <div className="st">
      <p>Indian</p>
      </div>
      <div className="nd">
      <div className="left">
      <Link to='/about'>About</Link>
          <Link to='/about'>Advertising</Link>
          <Link to='/about'>Business</Link>
          <Link to='/about'>How Search Works</Link>
      </div>

      <div className="right">
      <Link to='/about'>Privacy</Link>
          <Link to='/about'>Term</Link>
          <Link to='/about'>Settings</Link>
      </div>
          
      </div>
    </div>
  )
}

export default Footer
