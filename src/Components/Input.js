import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { StateContext } from '../Constants/StateProvider';
import Button from '@mui/material/Button'
import SearchIcon from '@mui/icons-material/Search';
import MicNoneIcon from '@mui/icons-material/MicNone';
import '../App.css'

function Input({hidebtn = false , val}) {

    const [input, setInput] = useState('')
    const history = useHistory()
    const { addSearch, addSet } = useContext(StateContext);


    const search = (e) => {
      e.preventDefault();
      history.push("/search");
      addSearch(input);
    };

  return (

      <form className="frm">
    <div className='input'>
    <div className="inp">
    <SearchIcon className='search' />
    <input value={input} placeholder={val} onChange={(e) => setInput(e.target.value)} />
    <MicNoneIcon />
    </div>
        
        {!hidebtn ?  <div className='buttons'>
        <Button type="submit" style={{textTransform: 'none'}} onClick={(e) => search(e)} className='btn' variant="outlined">Google Search</Button>
        <Button className='btn' style={{textTransform: 'none'}} variant="outlined"> {" "} I'm Feeling Lucky</Button>
        </div> : null}

        
    </div>
    </form>
  )
}

export default Input