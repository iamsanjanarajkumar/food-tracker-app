import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const UserCard1 = (props) => {

    const { id, image, name, mapss, address, rate } = props.contact

  return (
    <div className='col-xs-12 col-sm-12 col-md-6 col-l-4 col-xl-4 col-xxl-4 my-3'>
      <div className="card" style={{"borderRadius" : "20px"}}>
          <img src={image} alt='' className='img-fluid shadow rounded-top' style={{"height": "200px"}}/>
          <div className="card-body">
            <div className='d-flex justify'>
              <h5 className="text-uppercase my-3">
                  {name}
              </h5>
              <div className='rate srate d-flex'>
                {rate} <i className='bi bi-star-fill'></i>
              </div>
            </div>
              <div className='text-secondary size'>
                <div>
                  {address}
                </div>
              </div>
                <div className='d-flex maps col-lg-8 col-sm-7 col-md-8 col-xl-8 col-xxl-8 col-xs-12'>
                  <NavLink className="mapss">
                  <i class="bi bi-phone-vibrate"></i> call store
                  </NavLink>
                  <NavLink to={mapss} className='mapss' target='_blank'>
                    <i className='bi bi-geo-alt'></i> Direction
                  </NavLink>
                </div>
                <NavLink to={`/view/${id}`} className='btn btn-warning my-2 col-lg-12 col-sm-12 col-md-12 col-xxl-12 col-xl-12 col-xs-12' style={{"--bs-btn-opacity" : ".5"}}>View More</NavLink>
          </div>
      </div>
    </div>
  )
}

export default UserCard1