import React from 'react'
import { Link } from 'react-router-dom'

const ServiceProviderCard = () => {
  return (
    <>
      <div className="provider_section">
        <h1 className='text-center py-3'>Service Provider</h1>
        <div className="container">
          <div className="row my-4">
            <div className="col-xl-6">
              <div className="card">
                <img src="/gallery/file.jpg" className="card-img-top" alt="..." style={{height:"180px"}}/>
                <div className="card-body d-flex flex-column align-item-center">
                  <h5 className="card-title text-center">Organization</h5>
                  <p className="card-text text-center">List of various oranization and their profile</p>
                  <Link to="/organization" className="btn btn-primary">Visit</Link>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="card">
                <img src="/gallery/photographer1.jpg" className="card-img-top" alt="..." style={{height:"180px"}} />
                <div className="card-body d-flex flex-column align-item-center">
                  <h5 className="card-title text-center">Photogapher</h5>
                  <p className="card-text text-center">List of various oranization and their profile</p>
                  <Link to="/photographer" className="btn btn-primary">Visit</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ServiceProviderCard
