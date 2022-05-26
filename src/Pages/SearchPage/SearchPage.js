import React, { useContext } from "react";
import { StateContext } from "../../Constants/StateProvider";
import { Link } from "react-router-dom";
import Input  from "../../Components/Input";
import SettingsIcon from '@mui/icons-material/Settings';
import AppsIcon from '@mui/icons-material/Apps';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import './SearchPage.css';
import Searchicons from "../../Components/Searchicons";
import useGoogleSearch from "../../Constants/GoogleData";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import response from "../../Constants/response";
import Footer from "../../Components/Footer";
import ShowOn from "../../Components/ShowOn";



function SearchPage() {
  const { items } = useContext(StateContext); // to use the context value in child component,
  // const data = useGoogleSearch(items)

  const data = response

  console.log(data);

  return  <div className="searchPage">
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
    <Searchicons cl='search-cl' />
   
    </div>
   </div>

   <ShowOn />

    <div className="resultInfo">
      <p> About {data.searchInformation.formattedTotalResults} results in ({data.searchInformation.formattedSearchTime} seconds) </p>
    </div>

    <div className="results">
    {data?.items.map(item => {
         return (<div className="search-results">

           <a className="result-link"  href={item.link}>
          
                 {item.displayLink} <MoreVertIcon className="moreIc" /> </a> 

           <a className="result-title" href={item.link}>{item.title}</a>

           <p className="result-snippets" >{item.snippet} </p>
          </div>)
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

        <div className="ftr">
        <Footer />
        </div>
        
    </div>
}

export default SearchPage;
