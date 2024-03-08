import React from 'react'
import './Header.css'
import { TextField } from '@mui/material'
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import notificationIcon from '../assets/ic_round-notifications.svg'
import messageIcon from '../assets/bi_chat-left-dots-fill.svg'
import downArrow from '../assets/Frame 10.svg'
import profileIcon from '../assets/profileIcon.png'
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
  return (
    <div className='header-container'>
    <div className='mobile-menu'><RxHamburgerMenu/>
    <SearchIcon/>
      </div>  
     <div className='searchbox'> <TextField
      sx={{minWidth:"300px",'& .MuiInputBase-input': {
        height: '10px'},}}
      placeholder='Search'
      InputProps={{
        endAdornment: (
          <IconButton>
            <SearchIcon />
          </IconButton>
        ),
      }}
      /></div>
      <div className='header-icons'>
      <img src={notificationIcon} style={{height:"24px",width:"24px",marginRight:"20px"}}/>
      <img src={messageIcon} style={{height:"24px",width:"24px",marginRight:"20px"}}/>
      <img src={profileIcon} style={{borderRadius:"16px",height:"24px",width:"24px",marginRight:"10px"}}/>
       <p className='user-name'>Admirra John</p> 
       
      <img src={downArrow}  style={{height:"24px",width:"24px"}}/>
      </div>
    </div>
  )
}

export default Header