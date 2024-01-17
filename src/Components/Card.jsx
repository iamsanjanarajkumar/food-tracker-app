import React from 'react'
import contact from '../Server/Restaurant'

const Card = (props) => {
    const { name, img1, img2, img3, img4, img5,img6, img7, img8, img9, img10 } = props.contact

  return (
    
  <div className='col-xs-12 col-sm-4 col-md-4 col-lg-3 col-xl-3 col-xxl-3 my-3'>
        <div className="card bodies" style={{"borderRadius": "20px"}}>
          <img src={img1 || img2 || img3 || img4 || img5 ||img6 || img7 || img8 || img9 || img10} className="card-img-top" alt="Foods" style={{"height" : "220px" , "borderRadius" : "20px 20px 0px 0px"}} />
          <div className="card-body" style={{"borderRadius" : "0px 0px 20px 20px"}}>
            <div className="text-center">
              <h5 className="mb-0">{name}</h5>
              <div className='text-secondary second'>Our app will make your food ordering pleasant and fast</div>
              <h5 className="text-dark mb-0">&#x20B9;{contact.rate}</h5>
            </div>
          </div>
        </div>
</div>

  )
}

export default Card