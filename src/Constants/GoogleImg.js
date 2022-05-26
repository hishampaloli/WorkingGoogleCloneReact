import { useEffect, useState } from "react"
import React from 'react'
import axios from 'axios';

const useGoogleImg =(term) => {
 const [image, setImage] = useState(null);
 

 
const options = {
    method: 'GET',
    url: `https://google-search3.p.rapidapi.com/api/v1/image/q=${term}`,
    headers: {
      'X-User-Agent': 'desktop',
      'X-Proxy-Location': 'EU',
      'X-RapidAPI-Host': 'google-search3.p.rapidapi.com',
      'X-RapidAPI-Key': 'im Not A Fool'
    }
  };
  
  

useEffect(() => {
    axios.request(options).then(function (response) {
        console.log(response.data);
        setImage(response.data)
    }).catch(function (error) {
        console.error(error);
    });
  
},[term])

 return {image}
}

export default useGoogleImg;
