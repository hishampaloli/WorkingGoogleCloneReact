import React, { useContext } from "react";
import { StateContext } from "../../Constants/StateProvider";
import { Link } from "react-router-dom";
import Input  from "../../Components/Input";
import Searchicons from "../../Components/Searchicons";
import response from "../../Constants/ImgResponse";
import SettingsIcon from '@mui/icons-material/Settings';
import Footer from "../../Components/Footer";
import AppsIcon from '@mui/icons-material/Apps';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import useGoogleImg from "../../Constants/GoogleImg";
import respons from '../../Constants/ImgResponse';
import './Images.css'
import ShowOn from "../../Components/ShowOn";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';


function Image() {
    const { items } = useContext(StateContext); // to use the context value in child component,
    
    // const data = useGoogleImg(items)
//   console.log(data);
 const data = response;
  
    return (
        <div className="img-main">
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
      <AppsIcon className="ic" />
    <AccountCircleOutlinedIcon />
      </div>
      </div>
      <Searchicons cl='image-cl' />
      </div>
      </div>

      <ShowOn />

<div className="img-container">
      {data?.image_results.map(res => {
          return <div className="img-div">
          <img src={res.image.src} alt="" />
          <a href={res.link.href}>{res.link.title}</a>
          </div>
      })}

      

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

          <div className="ftr-image">
          <Footer />
          </div>
         
  
         

        </div>
    )
  }
  

export default Image;