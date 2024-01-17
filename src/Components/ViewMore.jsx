import axios from 'axios';
import { useEffect, useState } from "react";
import { NavLink, useParams } from 'react-router-dom';
import Card from './Card';


const baseUrl = "http://localhost:4000"

const ViewMore = () => {

  const [contact, setContact] = useState([]);
  const {id} = useParams()

  useEffect(() => {
      axios
      .get(`${baseUrl}/contact/${id}`)
      .then((res) => {
          console.log(res.data)
          setContact(res.data);
      })
      .catch((err) => console.log(err))
  }, [id])

  return (
    <nav class="text-start">
      <div class="container"> 
        <h1>Every Bite Has An Amazing  Flavor</h1>
        <div className="row" key={id}>
        <section class="dark">
          <div class="container">
            <h1 class="h1 text-center" id="pageHeaderTitle">{contact.name} Details</h1>
            <article class="postcard dark green">
              <NavLink class="postcard__img_link" href="#">
                {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                <img class="postcard__img" src={contact.image} alt="Image" />
              </NavLink>
              <div class="postcard__text">
                <h1 class="postcard__title green"><NavLink href="#">{contact.name}</NavLink></h1>
                <div class="postcard__subtitle small">
                  <time>
                    Establish <i class="bi bi-calendar mx-2"></i>Mon, May 25th 2020
                  </time>
                </div>
                <div class="postcard__bar"></div>
                <div class="postcard__preview-txt">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugiat asperiores inventore beatae accusamus odit minima enim, commodi quia, doloribus eius! Ducimus nemo accusantium maiores velit corrupti tempora reiciendis molestiae repellat vero. Eveniet ipsam adipisci illo iusto quibusdam, sunt neque nulla unde ipsum dolores nobis enim quidem excepturi, illum quos! Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore ea sed explicabo suscipit accusamus iusto minus temporibus corporis. Suscipit veniam architecto amet voluptas adipisci illo necessitatibus recusandae ipsum facere facilis!
                </div>
              </div>
            </article>
          </div>
        </section>
        </div>
        <div className='row'>
        {
          <section className="row">
          <h3 className="">
            {contact.name}
          </h3>
            <div className='row'>
              {
                contact.item && contact.item.map((names, index) => {
                  return (
                    <Card key={index} contact={names}/>
                  )
                })
              }
            </div>
            <div className="row mx-2">
              <div className="col-lg-5">
                {/* eslint-disable-next-line jsx-a11y/iframe-has-title */}
                <iframe src={contact.maps} width="450" height="390"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='col-lg-12'></iframe>
              </div>
              <div className="col-lg-7">
                <form>
                  <div className="row m-2">
                    <div className="col-md-9">
                      <div className="row mb-4">
                        <div className="col-md-6 mb-4 mb-md-0">
                          <div className="form-outline">
                            <input type="text" id="form3Example1" className="form-control" />
                            <label className="form-label" for="form3Example1">First name</label>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-outline">
                            <input type="email" id="form3Example2" className="form-control" />
                            <label className="form-label" for="form3Example2">Email Address</label>
                          </div>
                        </div>
                      </div>
                      <div className="form-outline mb-4">
                        <input type="text" id="form3Example3" className="form-control" />
                        <label className="form-label" for="form3Example3">Subject</label>
                      </div>
                      <div className="form-outline mb-4">
                        <textarea className="form-control" id="form4Example3" rows="4"></textarea>
                        <label className="form-label" for="form4Example3">Message</label>
                      </div>
                      <div className="text-center text-md-start">
                        <button type="submit" className="btn btn-primary mb-5 mb-md-0">
                          Send
                        </button>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <ul className="list-unstyled">
                        <li>
                          <i className="bi bi-geo-alt-fill bi-2x text-primary"></i>
                          <p><small>Bangalore</small></p>
                        </li>
                        <li>
                          <i className="bi bi-telephone-fill bi-2x text-primary"></i>
                          <p><small>{contact.Contactinfo}</small></p>
                        </li>
                        <li>
                          <i className="bi bi-envelope-at bi-2x text-primary"></i>
                          <p><small className='text-lowercase'>{contact.name}@gmail.com</small></p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </section>
        }
        </div>
      </div>  
    </nav>
  )
}

export default ViewMore