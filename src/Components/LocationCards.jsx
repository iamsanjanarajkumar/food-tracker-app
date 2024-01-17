import React from 'react'
import '../css/locationCard.css'
import Location1 from './Location1';

const LocationCards = () => {
  return (
    <div className='container'>
        <div className="row">
            <div className="text-center explore">
                <h5 className="display-3">
                    Explore Areas
                </h5>
            </div>
        </div>
        <div className='row'>
            <Location1 />
        </div>
    </div>
  )
}

export default LocationCards
