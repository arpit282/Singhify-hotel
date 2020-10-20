import React from 'react'
import './Home.css'
import Banner from './Banner'
import Card from './Card'

function Home() {
    return (
        <div className='home'>
            <Banner/>
          
            <div className='home_section'>
            <Card src='https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720' title='Unique Stays' description='Spaces that are more than just a place to sleep.'/>
            
            <Card src='https://a0.muscache.com/im/pictures/4a2f688e-0b33-4feb-932f-494b9a37348c.jpg?im_w=720' title='Online Experience' description='Unique activities we can do together, led by a world of hosts.'/>
            
            <Card src='https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720' title='Unique Stays' description='A world class position on top of the Himalayas'/>
            
        </div>
            <div className='home_section'>
          
          <Card src='https://architecturebeast.com/wp-content/uploads/2014/08/Top_50_Modern_House_Designs_Ever_Built_featured_on_architecture_beast_57.jpg' title='Entire Villa . Gurugram' description='Aravali Woods Villa, Non-Sharing Social Dist Home'
          price=' ₹7,524/night'/>
          <Card src='https://architecturebeast.com/wp-content/uploads/2014/08/Top_50_Modern_House_Designs_Ever_Built_featured_on_architecture_beast_02.jpg' title='Entire Villa .Palmapur' description='Rejuvenate(sanitized regularly)'
          price=' ₹5,548/night'/>
          <Card src='https://i.pinimg.com/originals/37/89/55/378955c20850a2eb253a35511fe69b5a.jpg' title='Entire Villa . Gautum Buddh Nagar' description='Independent villa in greator Noida'
          price=' ₹8,235/night'/>
          
      </div>    
        
      
        </div>

)
}

export default Home
