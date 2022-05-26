import React, {useContext} from 'react';
import GoogleNews from '../../Constants/GoogleNews';
import './News.css';
import { StateContext } from '../../Constants/StateProvider';
import response from '../../Constants/NewsResponse';
import Searchicons from "../../Components/Searchicons";
import SettingsIcon from '@mui/icons-material/Settings';
import AppsIcon from '@mui/icons-material/Apps';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Input from '../../Components/Input';
import Footer from '../../Components/Footer';
import {Link} from 'react-router-dom'
import ShowOn from '../../Components/ShowOn';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

function News() {
    const {items} = useContext(StateContext)
    // const data = GoogleNews(items);
    const data = response

    console.log(data)

  return (

    <div>
       <div className="upper">
    <div className="border">
    <div className="searchInp">
    <div className="left">
    
    <Link className="li" to='/' >
    <div className="logo-search"></div>
    </Link>
    
      <Input hidebtn={true} val={items}  />
    </div>

    <div className="right">
    <SettingsIcon className="ic" />
    <AppsIcon className='ic' />
    <AccountCircleOutlinedIcon />
    </div>
    </div>
    <Searchicons cl='news-cl' />
    </div>
    </div>

    <ShowOn />

    <p className="res" >About 2,950,000,000 results in (0.58 seconds)</p>

    <div className='news-wrap'>{data.entries.map(news => {
        return <div className='news-div'>
        <a className='link-div' href={news.link}>
        <a className='link-a' >{news.source.title}</a>
            <a className='link-title'>{news.title}</a>

            <p className='link-time'>Last Updated:- {data.feed.updated.substring(0,17)}</p>
        </a>
           
          
        </div>
    })}</div>

      <div className="down">
          <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="" />
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
            <li>7</li>
            <li>8</li>
            <li>9</li>
            <li>10</li>
            <ChevronRightIcon />
          </ul>
        </div>

        <div className="ftr-videos">
          <Footer />
        </div>

      </div>


   
  )
}

export default News