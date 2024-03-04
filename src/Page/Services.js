import React from 'react'

const Services = () => {
  return (
    <>
		<div id="services" className="section lb">
        <div className="container">
            <div className="section-title text-center">
                <h3>Services</h3>
                <p>Quisque eget nisl id nulla sagittis auctor quis id. Aliquam quis vehicula enim, non aliquam risus.</p>
    		</div>

            <div className="row">
				<div className="col-md-4">
                    <div className="services-inner-box">
						<div className="ser-icon">
							<i className="flaticon-wedding-photo"></i>
						</div>
						<h2>Wedding Photography</h2>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
					</div>
                </div>
                <div className="col-md-4">
                    <div className="services-inner-box">
						<div className="ser-icon">
							<i className="flaticon-image"></i>
						</div>
						<h2>Portrait photography</h2>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
					</div>
                </div>
				<div className="col-md-4">
                    <div className="services-inner-box">
						<div className="ser-icon">
							<i className="flaticon-event"></i>
						</div>
						<h2>Event Photography</h2>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
					</div>
                </div>
            </div>
		</div>
    </div>
    </>
  )
}

export default Services
