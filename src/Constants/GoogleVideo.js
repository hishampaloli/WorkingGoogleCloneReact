import { useEffect, useState } from "react"
import React from 'react'
import axios from 'axios';

const useGooglevideos =(term) => {
 const [video, setVideo] = useState(null);
 

 const options = {
    method: 'GET',
    url: `https://google-search3.p.rapidapi.com/api/v1/video/q=${term}`,
    headers: {
      'X-User-Agent': 'desktop',
      'X-Proxy-Location': 'EU',
      'X-RapidAPI-Host': 'google-search3.p.rapidapi.com',
      'X-RapidAPI-Key': 'ff85a0dbafmshe35a6ef7d310686p14f37cjsn1606943bd8d2'
    }
  };
  

useEffect(() => {
    axios.request(options).then(function (response) {
        setVideo(response.data)
    }).catch(function (error) {
        console.error(error);
    });
  
},[term])

 return {video}
}

export default useGooglevideos;