import { useEffect, useState } from "react"
import React from 'react'
import axios from 'axios';
import response from "./response";


const CONTEXT_KEY = "a67fff504754dd9ad"
const API_KEY = 'AIzaSyB9ND-BvOEeNJzia6hjQ7YnCAjyfn-BKqM'


const useGoogleSearch =(term) => {
    const [data, setData] = useState(null);
   
    useEffect(() => {
        const fetchData = async() => {
            fetch(
                `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}&nextPage=1`
            )
            .then(response => response.json())
            .then(result => {
                setData(result)
                console.log(result);
            })
        }
   
        fetchData();
    }, [term])
   
    return {data}
   }
   
   
export default useGoogleSearch