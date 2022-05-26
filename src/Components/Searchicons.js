import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import SearchIcon from "@mui/icons-material/Search";
import ImageIcon from '@mui/icons-material/Image';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import FeedIcon from '@mui/icons-material/Feed';

function Searchicons({cl}) {

  function handleHover() {
    document.querySelector('.show-on-hover').classList.toggle('show-cl')
  }

  console.log(cl);

  return (
    <div className="searchPage-options">
          <div className="searchPage-optionsLeft">

          <Link to='/search'>
          <div className={cl==="search-cl" ? `searchPage-option search-cl` : 'searchPage-option'}>
              <SearchIcon className='icons' />
              <Link to='/search' >All</Link>
            </div>
          </Link>


          <Link to='/videos'>
            <div className={cl==="video-cl" ? `searchPage-option search-cl` : 'searchPage-option'}>
              <VideoLibraryIcon className='icons'  />
              <Link to="/videos">Video</Link>
            </div>
            </Link>

            <Link to='/image'>
            <div className={cl==="image-cl" ? `searchPage-option search-cl` : 'searchPage-option'}>
              <ImageIcon className='icons' />
              <Link to="/image">Images</Link>
            </div>
            </Link>

            <Link to='/news'>
            <div className={cl==="news-cl" ? `searchPage-option search-cl` : 'searchPage-option'}>
              <FeedIcon className='icons' />
              <Link to="/news">News</Link>
            </div>
            </Link>

            <Link to='/shopping'>
            <div className={cl==="shopping-cl" ? `searchPage-option search-cl` : 'searchPage-option'}>
             <ShoppingCartIcon className='icons' />
              <Link to="/Shopping">Shopping</Link>
            </div>
            </Link>

            <div onMouseDown={handleHover} style={{cursor: 'pointer'}} className="searchPage-option more">
              <MoreVertIcon className='icons' />
              <Link >More</Link>
            </div>

           

            <div className="searchPage-option tool">
            <Link to="/">Tools</Link>
          </div>

          </div>
         
        </div>
        
  )
}

export default Searchicons;