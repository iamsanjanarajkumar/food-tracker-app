import React, { useState, useEffect } from 'react'
import UserCard from './Usercard';
import contact from './../Server/Restaurant';

const Homepage = () => {
  const [isOn, setIsOn] = useState(false);
  const [filteredItems, setFilteredItems] = useState([]);

 useEffect(() => {
  setFilteredItems(contact)
 },[])

 const handleChange = (event) =>{
  const filteredCards = contact.filter((card) => 
    card.name.toLowerCase().includes(event.target.value)
  );
  setFilteredItems(filteredCards);
 } 

  const handleToggle = () => { 
      setIsOn(!isOn);
      if(isOn) {
        let items = contact.filter((item) => item.type === "veg")
        setFilteredItems(items)
        console.log('veg =', items)
      } else {
        let items = contact.filter((item) => item.type === "non-veg")
        setFilteredItems(items)
        console.log('veg =', items)
      }
  };
  return (
    <div className='container'>
      <div className="row">
        <div className="main-banner d-flex mt-3">
          <form className="d-flex col-lg-4 align-self-center p-3">
              <input className="form-control m-1 " type="search" onChange={handleChange} placeholder="Search" aria-label="Search" />
              <button className="btn btn-success m-1" type="submit">
                  <i className="bi bi-search"></i>
              </button>
          </form>
            <div className="ms-auto mx-5 my-2">
                <label className="switch">
                    <input type="checkbox" onChange={handleToggle}  checked={isOn}/>
                    <span className="slider round"></span>
                </label>
                
                <p className='text-center'>{isOn ? 'Non-Veg' : 'Veg'}</p>
            </div>
        </div>
      </div>
      <UserCard products={filteredItems} />
    </div>
    
  )
}

export default Homepage