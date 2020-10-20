import React, { useState } from 'react'
import './Search.css'
import {DateRangePicker} from 'react-date-range'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import { Button } from '@material-ui/core'
import People from '@material-ui/icons/People'
import { useHistory } from 'react-router-dom'

function Search() {
    const history = useHistory()

    const [start,setstart] = useState(new Date())
    const [end ,setend] = useState(new Date())

    const selectionrange={
        start: start,
        end:end,
        key:"selection",
    }

    function handleSelect(ranges){
        setstart(ranges.selection.start)
        setend(ranges.selection.end)
    }

    return (
        <div className='search'>
            <DateRangePicker ranges={[selectionrange]} onChange={handleSelect}/>
            <h2>
                Number of Guests
                <People></People>
            </h2>
                <input min={0} defaultValue={2} type='number'></input>
                <Button onClick={() => history.push('/search')}>Search Airbnb</Button>
        </div>
)

}

export default Search 
