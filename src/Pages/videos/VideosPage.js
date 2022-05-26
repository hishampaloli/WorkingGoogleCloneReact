import React, { useContext } from "react";
import { StateContext } from "../../Constants/StateProvider";
import { Link } from "react-router-dom";
import Input  from "../../Components/Input";
import Searchicons from "../../Components/Searchicons";
import useGooglevideos from "../../Constants/GoogleVideo";
import response from "../../Constants/vidReponse";
import SettingsIcon from '@mui/icons-material/Settings';
import Footer from "../../Components/Footer";
import AppsIcon from '@mui/icons-material/Apps';
import './Videos.css'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ShowOn from "../../Components/ShowOn";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

function SearchPage() {
  const { items } = useContext(StateContext); // to use the context value in child component,
  
  // const data = useGooglevideos(items)

  // const result = data.video.results

// console.log(result);
 const data = response;

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
    <AppsIcon className="ic" />
    <AccountCircleOutlinedIcon />
    </div>
    </div>
    <Searchicons cl='video-cl' />
    </div>
    </div>

    <ShowOn />

    <p className="res" >About 2,950,000,000 results in (0.58 seconds)</p>

      {data.results.map(res => {
          return <div className="video-cards">
              <a className="linkTag" href={res.link}>{res.cite.domain}</a>
              <a className="titleTag" href={res.link}>{res.title}</a>
              <p className="descTag">{res.description}</p>
          </div>
      })}  

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

export default SearchPage;
