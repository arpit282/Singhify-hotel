import React from 'react'
import './SearchResults.css'
import Icon from '@material-ui/icons/FavoriteBorder'
import Star from '@material-ui/icons/Star'

function SearchResults({img,location,title,description,star,price,total}) {
    return (
        <div className='searchresults'>
            <img src={img}></img>
            <Icon className='heart'></Icon>

            <div className='search_info'>
                <div className='info_top'>
                    <p>{location}</p>
                    <h3>{title}</h3>
                    <p>______</p>
                    <p>{description}</p>
                </div>
                <div className='info_bottom'>
                    <div className='stars'>
                        <Star className='stars'/>
                        <p><strong>{star} </strong></p>
                    </div>
                    <div className='price'>
                        <h2>{price}</h2>
                        <p>{total}</p>
                    </div>
                </div>
           
            </div>
        </div>
    )
}

export default SearchResults
