import React from 'react'

const Contact = () => {
  return (
    <>
      <div className="content">
        <div className="container m-5">
          <h1>Contact Us</h1>
          <p>
            We would love to hear from you! Whether you have a question, feedback, or need assistance, feel free to reach out to us. Our team is here to help you.
          </p>

          <div className="row">
            <div className="col-md-6">
              <h3>Get in Touch</h3>
              <form>
                <div className="form-group">
                  <label for="name">Full Name</label>
                  <input type="text" className="form-control" id="name" placeholder="Enter your name" required />
                </div>
                <div className="form-group">
                  <label for="email">Email address</label>
                  <input type="email" className="form-control" id="email" placeholder="Enter your email" required />
                </div>
                <div className="form-group">
                  <label for="message">Message</label>
                  <textarea className="form-control" id="message" rows="4" placeholder="Your message" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Send Message</button>
              </form>
            </div>

            <div className="col-md-6">
              <h3>Our Address</h3>
              <p>
                KSK Store<br />
                1234 Main St.<br />
                Hyderabad, Telangana, India<br />
                PIN: 500001
              </p>
              <div>
              <h4><strong>Phone: </strong>+91 123 456 7890</h4>
              <h4><strong>Email: </strong>contact@kskstore.com</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="cont-footer bg-dark text-center text-white p-4 w-100">
        <h5>&copy; 2025 SparkleCart. All Rights Reserved.</h5>
      </div>
    </>
  )
}

export default Contact
