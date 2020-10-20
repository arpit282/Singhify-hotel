import { Button } from '@material-ui/core'
import React from 'react'
import './SearchPage.css'
import SearchResults from './SearchResults'

function SearchPage() {
    return (
        <div className='searchpage'>
            <div className='searchpage_info'>
                <p>62 stays . 26 august to 30 august . 2 guests </p>
                <h1>Stays Nearby</h1>
                <Button varient='outlined'>
                    Cancellation Flexibility
                </Button>
                <Button varient='outlined'>
                    Type of place
                </Button>
                <Button varient='outlined'>
                    Price 
                </Button>
                <Button varient='outlined'>
                    Rooms and Beds
                </Button>
                <Button varient='outlined'>
                    More Filters
                </Button>
            </div>
            <SearchResults img='https://a0.muscache.com/im/pictures/437faad0-28b7-4bde-b5eb-3902c358b4de.jpg?aki_policy=large' location='Gurugram, Haryana, India' title='Evergreen Woods - 6 Bedroom Farmhouse with pool' description='14 guests · 6 bedrooms · 7 beds · 6 bathrooms ' star={5.0} price='₹15,143/ night'/>
        
            <SearchResults img='https://skift.com/wp-content/uploads/2018/10/london-airbnb-living-room-e1539104712815.jpg' location='Gurugram, Haryana, India' title='Aravali Woods Villa, Non-Sharing Social Dist Home' description='4 guests · 4 bedrooms · 5 beds · 4 bathrooms ' star={4.7} price='₹7,674/ night' />
        
            <SearchResults img='https://a0.muscache.com/im/pictures/5ceb51a7-4583-4029-aa8f-a9717ed984d4.jpg?aki_policy=large' location='Greater Noida, Uttar Pradesh, India' title='Garden Ville Greater Noida' description='4 guests · 4 bedrooms · 5 beds · 4 bathrooms ' star={4.56} price='₹3,000/ night' />
        
            <SearchResults img='https://a0.muscache.com/im/pictures/0da90272-3a1c-4ce7-9935-a5f891caeb8f.jpg?aki_policy=large' location='Amritsar, Punjab, India' title='Green Pocket Outhouse' description='8 guests · 3 bedrooms · 4 beds · 3.5 bathrooms' star={5.0} price='₹7,000/ night' />
        
            <SearchResults img='https://a0.muscache.com/im/pictures/89138517-f9ea-434b-a34a-a95618b9580c.jpg?aki_policy=large' location='Gurugram, Haryana, India' title='Talwar Farmhouse near Manesar, Gurgaon' description='10 guests · 2 bedrooms · 4 beds · 2 bathrooms ' star={4.93} price='₹15,674/ night' />
        
            <SearchResults img='https://a0.muscache.com/im/pictures/f879de19-6ed5-4009-a446-c1a4c601ecbe.jpg?aki_policy=large' location='Naggar, Himachal Pradesh, India' title='The Luxurious Penthouse' description='6 guests · 3 bedrooms · 3 beds · 3.5 bathrooms ' star={5.0} price='₹10,000/ night' />

            <button className='next'>
                    Next
                </button>
        </div>
    )
}

export default SearchPage
