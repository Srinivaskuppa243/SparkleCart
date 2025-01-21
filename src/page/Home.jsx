import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <div className='hero-section d-flex flex-column justify-content-center align-items-center text-center'>
        <div className='card '>
          <h1>Welcome to SparkleCart</h1>
          <p>Your one stop destination for shopping and accesories</p>
          <NavLink to="/shop"><button className='btn btn-secondary'>Shop Now!!</button></NavLink>
        </div>
      </div>
      {/* Filtered Section */}
      <div className='d-flex gap-4 my-4 h-20 justify-content-center align-items-center'>
        <div className='card shadow'>
          <h1 className='card-title text-center'>Men</h1>
          <img className='filter-img' src='./src/assets/men.jpeg' />
        </div>
        <div className='card shadow'>
          <h1 className='card-title text-center'>Women</h1>
          <img className='filter-img' src='./src/assets/wom.jpeg' />
        </div>
        <div className='card shadow'>
          <h1 className='card-title text-center'>Accessories</h1>
          <img className='filter-img' src='./src/assets/accesories.jpeg' />
        </div>
      </div>
      {/* Testimonial Section */}
      <div className="testimonials-section text-center mx-3 my-5">
        <h2>What Our Customers Say</h2>
        <div className="mt-2 row row-cols-1 row-cols-md-3 g-4">
          {/* Testimonial 1 */}
          <div className="col">
            <div className="card shadow">
              <img className="card-img-top rounded-circle mx-auto mt-3" src="./src/assets/Customer1.jpeg" alt="Customer 1" style={{ width: '100px', height: '100px' }} />
              <div className="card-body">
                <p className="card-text">"I love SparkleCart! The variety of products and customer service is amazing!"</p>
                <h5 className="card-title">Sarah Williams</h5>
                <p className="card-text text-muted">Customer</p>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="col">
            <div className="card shadow">
              <img className="card-img-top rounded-circle mx-auto mt-3" src="./src/assets/Customer2.jpeg" alt="Customer 2" style={{ width: '100px', height: '100px' }} />
              <div className="card-body">
                <p className="card-text">"Great experience shopping with SparkleCart. Highly recommend it to everyone!"</p>
                <h5 className="card-title">Michael Thompson</h5>
                <p className="card-text text-muted">Customer</p>
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="col">
            <div className="card shadow">
              <img className="card-img-top rounded-circle mx-auto mt-3" src="./src/assets/Customer3.jpeg" alt="Customer 3" style={{ width: '100px', height: '100px' }} />
              <div className="card-body">
                <p className="card-text">"I found everything I needed, and the process was so simple. Will shop again!"</p>
                <h5 className="card-title">Emily Johnson</h5>
                <p className="card-text text-muted">Customer</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer bg-dark text-center text-white p-4 w-100">
        <h5>&copy; 2025 SparkleCart. All Rights Reserved.</h5>
      </div>
    </>
  )
}

export default Home
