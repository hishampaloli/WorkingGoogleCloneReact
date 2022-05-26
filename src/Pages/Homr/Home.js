import React from 'react'
import { Link } from "react-router-dom";
import AppsIcon from '@mui/icons-material/Apps';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Input from '../../Components/Input';
import Footer from '../../Components/Footer';
import './Home.css'

function Home() {
  return (
    <div className='Home'>
        <div className="header">
        <Link to='/gmail'>Gmail</Link>
        <Link to='/image'>Image</Link>
        <AppsIcon className='appicon' />
        <AccountCircleIcon />
        </div>

        <div className="Home-body">
            <div className="logo">
                <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="" />
            </div>
            <div className="input-container">
                <Input  />
            </div>
        </div>

<div className="ftr-home">
    <Footer  />
</div>
        
    </div>
  )
}

export default Home