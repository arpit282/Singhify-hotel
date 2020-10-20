import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import './Banner.css'
import Search from './Search'

function Banner() {

    const history = useHistory()
    const [showsearch,setshowsearch] = useState(false) 

    return (
        <div className="banner">
            <div className='banner_search'> {showsearch && <Search/>} 
                <button onClick={()=> setshowsearch(!showsearch)} className='banner_searchbutton'>
                    {showsearch ?"Hide":"Search Dates"}
                </button>
            </div>
            <div className='banner_info'>
                <h1>Get out and stretch your imagination</h1>
                <h5>Settle in somewhere new. Discover nearby stays to live, work, or just relax.</h5>
                <button onClick={() => history.push('/search')}>Explore Nearby</button>
            </div>
        </div>
    )
}

export default Banner 
