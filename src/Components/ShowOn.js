import React from 'react'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import BookOutlinedIcon from '@mui/icons-material/BookOutlined';
import FlightOutlinedIcon from '@mui/icons-material/FlightOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';


function ShowOn() {
  return (
    <div className='show-on-hover'>
                <p><LocationOnOutlinedIcon fontSize='inherit' className='on-ic' /> Map</p>
                <p><BookOutlinedIcon fontSize='inherit' className='on-ic' /> <a href="https://www.google.com/travel/flights">Books</a> </p>
                <p><FlightOutlinedIcon fontSize='inherit' className='on-ic'  /> Flight</p>
                <p><BarChartOutlinedIcon fontSize='inherit' className='on-ic'  /> Finance</p>
              </div>
  )
}

export default ShowOn