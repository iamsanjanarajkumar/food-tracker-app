import React from 'react'
import LocationCards from './LocationCards'

const Hero = () => {
  return (
    <>
    <nav className='imga d-flex align-items-center justify-content-center flex-column'>
        <h1 className="display-2 text-white fw-bold white">
            <span>Welcome to </span>
                 <div>Hunger Hunt</div>
        </h1>
        <span className='text-white'>__________________<i class="bi bi-ubuntu"></i>__________________</span>
            <div className="timings text-white d-flex gap-3 hunger">
            <div className='text-uppercase '>Get the freshest item from hunter hunt</div>
        </div>

        <p className="text-light text-center my-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero atque omnis neque impedit quisquam.</p>
      </nav>
      <LocationCards />
      </>
  )
}

export default Hero