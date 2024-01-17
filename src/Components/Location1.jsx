import React from 'react'
import { NavLink } from 'react-router-dom'

const Location1 = () => {
  return (
        <div className='location my-3'>
            <div className="row">
             <div className="col-12 col-sm-12 col-md-4">
               <div className="card" style={{"borderRadius" : "20px"}}>
               <img src='https://bangalorelocale.com/wp-content/uploads/2021/07/CTR-Malleshwaram.jpg' alt='location_image'  className=""
                style={{"height" : "200px"}} />
                    <div className="card-body">
                        <h5 className='text-center text-uppercase my-3'>Malleshwaram</h5>
                    </div>
                    <p className='text-center'>Interesting Food joints to explore!</p>
                    <div className="card-footer">
                        <NavLink to={'/homepage'} className='btn btn-warning my-2 col-lg-12 col-sm-12 col-md-12 col-xxl-12 col-xl-12 col-xs-12' style={{"--bs-btn-opacity" : ".5"}}>Explore</NavLink>
                    </div>
               </div>
                </div>
                <div className="col-12 col-sm-12 col-md-4">
                   <div className="card mb-3">
                   <img src='https://static2.tripoto.com/media/filter/tst/img/2156988/Image/1661867521_vid20220430215252_00_02_48_10179_still011.jpg.webp' alt='location_image'  className="cardImage" style={{"height" : "200px"}}/>
                <div className="card-body">
                    <h5 className='text-center text-uppercase my-3'>V.V Puram</h5>
                </div>
                <p className='text-center'>Interesting Food joints to explore!</p>
                <div className="card-footer">
                <NavLink to={'/homepage'} className='btn btn-warning my-2 col-lg-12 col-sm-12 col-md-12 col-xxl-12 col-xl-12 col-xs-12' style={{"--bs-btn-opacity" : ".5"}}>Explore</NavLink>
                </div>
                   </div>
                </div>
                <div className="col-12 col-sm-12 col-md-4">
                   <div className="card mb-3">
                   <img src='https://samudyatabhatt.files.wordpress.com/2017/04/market-place.jpg' alt='location_image'  className="cardImage" style={{"height" : "200px"}}/>
                <div className="card-body">
                    <h5 className='text-center text-uppercase my-3'>Jayanagar</h5>
                </div>
                <p className='text-center'>Interesting Food joints to explore!</p>
                <div className="card-footer">
                <NavLink to={'/homepage'} className='btn btn-warning my-2 col-lg-12 col-sm-12 col-md-12 col-xxl-12 col-xl-12 col-xs-12' style={{"--bs-btn-opacity" : ".5"}}>Explore</NavLink>
                </div>
                   </div>
                </div>
                <div className="col-12 col-sm-12 col-md-4">
                    <div className="card mb-3">
                    <img src='https://i.ytimg.com/vi/fOMzke1JHvM/maxresdefault.jpg' alt='location_image'  className="cardImage" style={{"height" : "200px"}}/>
                <div className="card-body">
                    <h5 className='text-center text-uppercase my-3'>M.G Road</h5>
                </div>
                <p className='text-center'>Interesting Food joints to explore!</p>

                <div className="card-footer">
                <NavLink to={'/homepage'} className='btn btn-warning my-2 col-lg-12 col-sm-12 col-md-12 col-xxl-12 col-xl-12 col-xs-12' style={{"--bs-btn-opacity" : ".5"}}>Explore</NavLink>
                </div>
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-md-4">
                   <div className="card mb-3">
                   <img src='https://lh3.googleusercontent.com/zqjoqNFtHS3iMWYtp2ZlfppmweTzGpSMIbrN4XkBNlfICCiIRvA5nIiwwOMLgNkdjAH8GQw39fkTwkr124hYv4mjQH8=w300-rw' alt='location_image'  className="cardImage" style={{"height" : "200px"}}/>
                <div className="card-body">
                    <h5 className='text-center text-uppercase my-3'>H.S.R Layout</h5>
                </div>
                <p className='text-center'>Interesting Food joints to explore!</p>

                <div className="card-footer">
                <NavLink to={'/homepage'} className='btn btn-warning my-2 col-lg-12 col-sm-12 col-md-12 col-xxl-12 col-xl-12 col-xs-12' style={{"--bs-btn-opacity" : ".5"}}>Explore</NavLink>
                </div>
                   </div>
                </div>
                <div className="col-12 col-sm-12 col-md-4">
                    <div className="card mb-3">
                    <img src='https://im1.dineout.co.in/images/uploads/restaurant/sharpen/3/s/r/p37590-1665126832633fd1b01cc35.jpg?tr=tr:n-medium' alt='location_image'  className="cardImage" style={{"height" : "200px"}} />
                <div className="card-body">
                    <h5 className='text-center text-uppercase my-3'>R.R Nagar</h5>
                </div>
                <p className='text-center'>Interesting Food joints to explore!</p>

                <div className="card-footer">
                <NavLink to={'/homepage'} className='btn btn-warning my-2 col-lg-12 col-sm-12 col-md-12 col-xxl-12 col-xl-12 col-xs-12' style={{"--bs-btn-opacity" : ".5"}}>Explore</NavLink>
                </div>
                    </div>
                </div>
             </div>
            </div>
  )
}

export default Location1
