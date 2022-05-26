import React, {useContext, useState} from 'react';
import { StateContext } from '../../Constants/StateProvider';
import response from '../../Constants/ShoppingResponse';
import Searchicons from "../../Components/Searchicons";
import SettingsIcon from '@mui/icons-material/Settings';
import AppsIcon from '@mui/icons-material/Apps';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Input from '../../Components/Input';
import Footer from '../../Components/Footer';
import MenuIcon from '@mui/icons-material/Menu';
import './Shopping.css'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { Link } from 'react-router-dom';
import ShowOn from '../../Components/ShowOn';



function Shopping() {

    const {items} = useContext(StateContext)
const data = response

function show() {
  document.querySelector('.left-bo').classList.toggle('show')
}

console.log(data);
return (

    <div className='shop-container' >
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
    <Searchicons cl='shopping-cl' />
    </div>
    </div>

    <ShowOn />

    <p className="res" >About 2,950,000,000 results in (0.58 seconds)</p>


<div className="main-bo">

<button className='show-btn'  onClick={show}><MenuIcon className='show-ic' /></button>

<div className="left-bo">
{data?.filters.map(res => {
  return <div className='firstbox'>
  <p>{res.type}</p>
  <div className="co">
  {res.options.map(resp => {
      return <div className="first-f">
     {resp.text ? <label htmlFor=""><input className='inpt' type="checkbox" />{resp.text} </label>: null}
      </div> 
    })}
  </div>
    
  </div>
})}

</div>


<div className="shop">
    {data.shopping_results.map(res => {
        return <div className='shop-div'>
            <div className="up">
                <img src={res.thumbnail} alt="" />
                <a href={res.link}>{res.title}</a>
            </div>

            <div className="shop-down">
                <h3>{res.price}</h3>
                <a href={res.link}>{res.source}</a>
                <p>{res.delivery}</p>
            </div>
        </div>
    })}

    </div>
</div>

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

export default Shopping


