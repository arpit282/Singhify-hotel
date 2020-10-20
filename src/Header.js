import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search'
import Expand from '@material-ui/icons/ExpandMore'
import Language from '@material-ui/icons/Language'
import Avatar from '@material-ui/icons/AccountCircle'
import {  Link } from 'react-router-dom'

function Header() {
    return (
        
        <div className='header'>
        <Link to='/'> 
        <div className='together'>
            <img className='header_icon' src="https://designkultur.files.wordpress.com/2010/04/341px-s-bahn-logo-svg1.png"></img>

            <h1>Singhify</h1>
            </div>

        </Link>
        

        <div className='header_center'>
            <input type='text' placeholder='Start your search'/>
            <SearchIcon></SearchIcon>
        </div>
        <div className='header_right'>
            <p>Become a host</p>
            <Language></Language>
            <Expand/>
            <Avatar/>
        </div>
        </div>
    )
}

export default Header
