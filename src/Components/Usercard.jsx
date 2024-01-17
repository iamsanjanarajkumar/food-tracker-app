import React from 'react'
// import { useState } from 'react'
// import contact
import contact from './../Server/Restaurant';
// import { NavLink } from 'react-router-dom';
// import User from './User';
import UserCard1 from './UserCard1';
// import Location from './Location';
// import ViewMore1 from './ViewMore1';
// import UserCard from './Usercard';

const UserCard = (props) => {    

    // const {maps} = props.contact

    return (
    <div className='container'>
        <div className="row">
            <div className="col">
                <h5 className="display-4 text-center">
                    Basaveshwara Nagar
                </h5>
            </div>
            <img src="" alt="" />
        </div>
        <div className='row'>
            {
                props.products && props.products.map((restaurant, index) => {
                    return(
                      <UserCard1 key={index} contact={restaurant}/>
                    )
                })
            }
        </div>
    </div> 
  )
}

export default UserCard